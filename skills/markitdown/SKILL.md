---
name: MarkItDown
description: 使用 MarkItDown 将 docx/pptx/xlsx/pdf/html/图片/音频等内容转换为 Markdown，适用于离线文档读取、整理与批量转换。
homepage: https://github.com/microsoft/markitdown
metadata: {"openclaw":{"emoji":"🧾","requires":{"bins":["python3","markitdown","ffmpeg","exiftool"]}}}
---

# MarkItDown

Use this skill when the user asks to read or convert files into Markdown, especially Office and PDF files.

## Quick Start

```bash
markitdown /path/to/input.docx -o /tmp/input.md
```

## Common Commands

```bash
# DOCX/PDF/PPTX/XLSX -> Markdown
markitdown /path/to/file.pdf -o /path/to/file.md

# Read from stdin and print markdown to stdout
cat /path/to/file.pdf | markitdown

# Convert all supported files in a directory (example)
for f in /data/inbox/*; do
  out="/data/out/$(basename "$f").md"
  markitdown "$f" -o "$out"
done
```

## Practical Guidance

- Prefer `-o <output.md>` so the result is reproducible and easy to inspect.
- If conversion fails, first verify MIME/extension and retry with a local file path.
- Use this skill for text extraction and structure preservation; do not expect high-fidelity visual layout reproduction.

## Offline Notes

- Local document conversion works offline once dependencies are preinstalled.
- Features that depend on external services (for example YouTube transcript fetch or cloud OCR/DocIntel flows) are not available offline.
