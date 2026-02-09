# Logo 文件说明

此目录用于存放页眉 Logo 图片。

## 建议规格

- **格式**: PNG（透明背景）
- **尺寸**: 200 × 50 像素（或保持 4:1 比例）
- **颜色**: 建议使用深色，与白色背景形成对比

## 当前实现

当前版本使用文字形式的页眉（"行芯科技 | 产品验证文档"），无需图片 Logo。
当前生成器为 `scripts/generate.py`，仅使用 Python 标准库直接写入 OOXML。

如需启用图片 Logo，请：

1. 将公司 Logo 文件命名为 `logo.png` 放入此目录
2. 修改 `scripts/generate.py` 的页眉与 `word/_rels/document.xml.rels` 生成逻辑
3. 同步补充 `[Content_Types].xml` 与 `word/media/` 资源写入逻辑

备注：当前实现不依赖 `docx` npm 包，也不需要安装额外 Python 库。
