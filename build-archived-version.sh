#!/bin/bash
set -euo pipefail

# build-archived-version.sh - Build a standalone static Docusaurus site for an archived version
#
# Usage: ./build-archived-version.sh <version-tag> [--llama-stack-dir <path>]
#
# Examples:
#   ./build-archived-version.sh v0.5.0
#   ./build-archived-version.sh v0.6.0 --llama-stack-dir /tmp/llama-stack
#
# Output: docs/<version-tag>/ containing the full static site

VERSION="${1:?Usage: $0 <version-tag> [--llama-stack-dir <path>]}"
REPO_DIR="$(cd "$(dirname "$0")" && pwd)"

# Parse optional arguments
LLAMA_STACK_DIR=""
shift
while [[ $# -gt 0 ]]; do
  case $1 in
    --llama-stack-dir) LLAMA_STACK_DIR="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

# Setup temp directory for the build
TEMP_DIR=$(mktemp -d)
BUILD_DIR="$TEMP_DIR/llama-stack/docs"
trap 'rm -rf "$TEMP_DIR"' EXIT

echo "=== Building archived version $VERSION ==="

# Step 1: Get llama-stack at the specified version
if [ -n "$LLAMA_STACK_DIR" ] && [ -d "$LLAMA_STACK_DIR" ]; then
  echo "--- Cloning from local repo ---"
  git clone --local --no-checkout "$LLAMA_STACK_DIR" "$TEMP_DIR/llama-stack"
  cd "$TEMP_DIR/llama-stack"
  git checkout "$VERSION" 2>/dev/null || git checkout "tags/$VERSION"
else
  echo "--- Cloning from GitHub ---"
  git clone --depth 1 --branch "$VERSION" https://github.com/llamastack/llama-stack.git "$TEMP_DIR/llama-stack"
fi

cd "$BUILD_DIR"

# Step 2: Install dependencies
echo "--- Installing dependencies ---"
npm ci 2>&1 | tail -5

# Step 3: Generate API docs
echo "--- Generating API docs ---"

if [ -f "static/llama-stack-spec.yaml" ]; then
  npm run gen-api-docs stable 2>&1 | grep -E "^Successfully" || true
fi

if [ -f "static/experimental-llama-stack-spec.yaml" ]; then
  npm run gen-api-docs experimental 2>&1 | grep -E "^Successfully" || true
fi

if [ -f "static/deprecated-llama-stack-spec.yaml" ]; then
  npm run gen-api-docs deprecated 2>&1 | grep -E "^Successfully" || true
fi

# Step 4: Inline raw-loader imports
echo "--- Inlining raw-loader imports ---"
python3 "$REPO_DIR/inline-raw-loader.py" docs "$TEMP_DIR/llama-stack"

# Step 5: Patch config for standalone archived build
echo "--- Patching config for baseUrl: /$VERSION/ ---"
export VERSION
node << 'CONFIGEOF'
const fs = require('fs');
const version = process.env.VERSION;

let config = fs.readFileSync('docusaurus.config.ts', 'utf8');

// Set baseUrl to /vX.Y.Z/
config = config.replace(
  /baseUrl:\s*["'][^"']*["']/,
  `baseUrl: '/${version}/'`
);

// Add announcement banner for archived version inside themeConfig
const bannerEntry = `
    announcementBar: {
      id: 'archived_version',
      content: 'This is documentation for <b>${version}</b>. For the latest version, visit <a href="https://llamastack.github.io/">the main site</a>.',
      backgroundColor: '#2b3137',
      textColor: '#ffffff',
      isCloseable: false,
    },`;

// Insert after "themeConfig: {"
config = config.replace(
  /themeConfig:\s*\{/,
  `themeConfig: {${bannerEntry}`
);

fs.writeFileSync('docusaurus.config.ts', config);
console.log('Config patched');
CONFIGEOF

# Step 6: Build
echo "--- Building ---"
NODE_OPTIONS="--max-old-space-size=8192" npm run build 2>&1 | tail -50

# Step 8: Copy build output to docs/<version>/
echo "--- Copying to docs/$VERSION/ ---"
OUTPUT_DIR="$REPO_DIR/docs/$VERSION"
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"
cp -r build/* "$OUTPUT_DIR/"

echo "=== Done building $VERSION ==="
echo "Output: docs/$VERSION/"
du -sh "$OUTPUT_DIR"
