#!/usr/bin/env python3
"""Inline !!raw-loader! imports in versioned docs.

Usage: python3 inline-raw-loader.py <versioned_docs_dir> <ogx-repo-root>

Example: python3 inline-raw-loader.py versioned_docs/version-v0.4.1 /tmp/ogx
"""

import re
import os
import sys
import glob


def escape_for_mdx(text):
    """Escape MDX-incompatible syntax in imported content."""
    lines = text.split("\n")
    result = []
    in_code_fence = False

    for line in lines:
        stripped = line.strip()

        # Track code fences
        if stripped.startswith("```") or stripped.startswith("~~~"):
            in_code_fence = not in_code_fence
            result.append(line)
            continue

        if in_code_fence:
            result.append(line)
            continue

        # Convert <URL> autolinks to [URL](URL) format
        line = re.sub(r"<(https?://[^>]+)>", r"[\1](\1)", line)

        # Escape { and } outside inline code spans
        parts = re.split(r"(`[^`]+`)", line)
        escaped_parts = []
        for part in parts:
            if part.startswith("`") and part.endswith("`"):
                escaped_parts.append(part)
            else:
                part = re.sub(r"(?<!\\)(?<!\{)\{(?!\{)", r"\\{", part)
                part = re.sub(r"(?<!\\)(?<!\})\}(?!\})", r"\\}", part)
                escaped_parts.append(part)
        line = "".join(escaped_parts)

        result.append(line)

    return "\n".join(result)


def inline_raw_loader(versioned_dir, repo_root):
    if not os.path.isdir(versioned_dir):
        print(f"No dir: {versioned_dir}")
        return

    for mdx_path in glob.glob(f"{versioned_dir}/**/*.mdx", recursive=True):
        with open(mdx_path, "r") as f:
            content = f.read()

        if "!!raw-loader!" not in content:
            continue

        print(f"Processing: {mdx_path}")

        pattern = r"import\s+(\w+)\s+from\s+'!!raw-loader!([^']+)';\s*\n"
        imports = re.findall(pattern, content)

        if not imports:
            continue

        for var_name, file_ref in imports:
            # Build candidate paths to resolve the referenced file
            candidates = []
            if "../" in file_ref:
                parts = file_ref.split("/")
                remaining = "/".join(p for p in parts if p != "..")
                candidates.append(os.path.join(repo_root, remaining))
            candidates.append(os.path.join(repo_root, os.path.basename(file_ref)))
            candidates.append(
                os.path.normpath(os.path.join(os.path.dirname(mdx_path), file_ref))
            )

            imported_content = None
            for candidate in candidates:
                if os.path.exists(candidate):
                    with open(candidate, "r") as f:
                        imported_content = f.read()
                    print(f"  Resolved {file_ref} -> {candidate}")
                    break

            if imported_content is None:
                print(f"  WARNING: Could not resolve {file_ref}")
                continue

            # Remove the raw-loader import line
            content = re.sub(
                r"import\s+" + var_name + r"\s+from\s+'!!raw-loader![^']+';[ \t]*\n",
                "",
                content,
            )

            # Remove ReactMarkdown import
            content = re.sub(
                r"import\s+ReactMarkdown\s+from\s+'react-markdown';[ \t]*\n",
                "",
                content,
            )

            # Convert RST-style admonitions to Docusaurus format
            imported_content = re.sub(r"```\{note\}", ":::note", imported_content)
            imported_content = re.sub(r"```\{caution\}", ":::caution", imported_content)
            imported_content = re.sub(r"```\{tip\}", ":::tip", imported_content)
            imported_content = re.sub(r"```\{warning\}", ":::warning", imported_content)
            imported_content = re.sub(
                r"(:::(?:note|caution|tip|warning)\n(?:(?!```).)*?\n)```",
                r"\1:::",
                imported_content,
                flags=re.DOTALL,
            )

            # Fix relative links that point to repo files
            imported_content = imported_content.replace(
                "](tests/README.md)",
                "](https://github.com/ogx-ai/ogx/blob/main/tests/README.md)",
            )
            imported_content = imported_content.replace(
                "](./RELEASE_PROCESS.md)",
                "](https://github.com/ogx-ai/ogx/blob/main/RELEASE_PROCESS.md)",
            )
            imported_content = imported_content.replace(
                "](README.md)", "](https://github.com/ogx-ai/ogx#community)"
            )
            imported_content = imported_content.replace(
                "](llama_stack/",
                "](https://github.com/ogx-ai/ogx/blob/main/llama_stack/",
            )

            # Escape MDX-incompatible syntax in imported content
            imported_content = escape_for_mdx(imported_content)

            # Replace <ReactMarkdown>{VarName}</ReactMarkdown> with inlined content
            content = re.sub(
                r"<ReactMarkdown>\{" + var_name + r"\}</ReactMarkdown>",
                imported_content,
                content,
            )

        with open(mdx_path, "w") as f:
            f.write(content)
        print("  Inlined successfully")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    inline_raw_loader(sys.argv[1], sys.argv[2])
