# Logo 文件说明

此目录用于存放页眉 Logo 图片。

## 建议规格

- **格式**: PNG（透明背景）
- **尺寸**: 200 × 50 像素（或保持 4:1 比例）
- **颜色**: 建议使用深色，与白色背景形成对比

## 当前实现

当前版本使用文字形式的页眉（"行芯科技 | 产品验证文档"），无需图片 Logo。
如需添加图片 Logo，请：

1. 将公司 Logo 文件命名为 `logo.png` 放入此目录
2. 修改 `scripts/generate.js` 中的页眉代码，使用 `ImageRun` 添加图片

## 代码示例

如需添加图片 Logo，可参考以下模式修改页眉：

```javascript
const header = new Header({
  children: [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new ImageRun({
          type: "png",
          data: fs.readFileSync(path.join(__dirname, '..', 'assets', 'logo.png')),
          transformation: { width: 150, height: 37 }
        })
      ]
    })
  ]
});
```
