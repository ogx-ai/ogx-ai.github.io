#!/bin/bash
set -euo pipefail

# build-latest.sh - Build the latest Docusaurus docs from llama-stack
#
# Usage: ./build-latest.sh [--llama-stack-dir <path>] [--branch <branch>] [--output-dir <path>]

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
LLAMA_STACK_DIR=""
BRANCH="main"
OUTPUT_DIR="$REPO_DIR/docs"

while [[ $# -gt 0 ]]; do
  case $1 in
    --llama-stack-dir) LLAMA_STACK_DIR="$2"; shift 2 ;;
    --branch) BRANCH="$2"; shift 2 ;;
    --output-dir) OUTPUT_DIR="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

TEMP_DIR=$(mktemp -d)
BUILD_DIR="$TEMP_DIR/llama-stack/docs"
trap 'rm -rf "$TEMP_DIR"' EXIT

echo "=== Building latest docs (branch: $BRANCH) ==="

# Step 1: Get llama-stack source
if [ -n "$LLAMA_STACK_DIR" ] && [ -d "$LLAMA_STACK_DIR" ]; then
  echo "--- Cloning from local repo (branch: $BRANCH) ---"
  git clone --local --no-checkout "$LLAMA_STACK_DIR" "$TEMP_DIR/llama-stack"
  cd "$TEMP_DIR/llama-stack"
  git checkout "$BRANCH"
else
  echo "--- Cloning from GitHub ---"
  git clone --depth 1 --branch "$BRANCH" https://github.com/ogx-ai/llama-stack.git "$TEMP_DIR/llama-stack"
fi

cd "$BUILD_DIR"

# Step 2: Install dependencies
echo "--- Installing dependencies ---"
npm ci 2>&1 | tail -5

# Step 3: Generate API docs
echo "--- Generating API docs ---"
[ -f "static/llama-stack-spec.yaml" ] && npm run gen-api-docs stable 2>&1 | grep -E "^Successfully" || true
[ -f "static/experimental-llama-stack-spec.yaml" ] && npm run gen-api-docs experimental 2>&1 | grep -E "^Successfully" || true
[ -f "static/deprecated-llama-stack-spec.yaml" ] && npm run gen-api-docs deprecated 2>&1 | grep -E "^Successfully" || true

# Step 4: Set up versioning (archived versions dropdown)
echo "--- Setting up versioning ---"
cp "$REPO_DIR/versionsArchived.json" ./
[ -f "$REPO_DIR/docs/versions.json" ] && cp "$REPO_DIR/docs/versions.json" ./ || echo "[]" > versions.json

node - << 'NODEOF'
const fs = require('fs');
let config = fs.readFileSync('docusaurus.config.ts', 'utf8');


// Fix GitHub org to match this repo's owner
const owner = process.env.REPO_OWNER || 'ogx-ai';
config = config.replace(
  /https:\/\/github\.com\/ogx-ai\/llama-stack/g,
  `https://github.com/${owner}/llama-stack`
);

fs.writeFileSync('docusaurus.config.ts', config);
console.log('Versioning config patched');
NODEOF

# Step 5: Build
echo "--- Building ---"
NODE_OPTIONS="--max-old-space-size=8192" npm run build 2>&1 | tail -50

# Step 6: Copy output
echo "--- Copying to $OUTPUT_DIR ---"
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"
cp -r build/* "$OUTPUT_DIR/"
touch "$OUTPUT_DIR/.nojekyll"
cp "$REPO_DIR/versions.html" "$OUTPUT_DIR/versions.html"

echo "=== Done ==="
du -sh "$OUTPUT_DIR"
