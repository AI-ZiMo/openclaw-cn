---
name: 行芯产品验证文档
description: 生成标准化的产品测试验证文档（Word .docx格式），用于行芯团队的产品测试记录。当用户需要创建产品测试文档、测试报告、验证记录时使用。文档包含测试功能点、测试要点、测试结果三大块，支持预设测试模板、自定义用户名、版本号、日期等信息，自动生成带公司页眉页脚的专业格式文档。
---

# 行芯产品验证文档生成器

用于快速生成标准化的产品测试验证文档。

## 文档规格

- **文件名格式**: `行芯产品验证文档-[用户名].docx`
- **页面**: A4 纵向，标准页边距（2.54cm）
- **字体**: 中文使用宋体/SimSun，标题使用黑体/SimHei
- **表格**: 三列表格（测试功能点 | 测试要点 | 测试结果），测试结果列预填"待测试"

## 使用方法

### 基本用法

```bash
node scripts/generate.js --user "张三" --output ./docs/
```

### 完整参数

```bash
node scripts/generate.js \
  --user "张三" \
  --version "v1.2.0" \
  --product "芯片验证平台" \
  --date "2025-02-06" \
  --template "default" \
  --output ./docs/
```

### 参数说明

| 参数 | 必填 | 说明 |
|------|------|------|
| `--user` | 是 | 测试人员姓名，用于文件名和文档标题 |
| `--version` | 否 | 产品版本号（默认：v1.0.0） |
| `--product` | 否 | 产品名称（默认：行芯产品） |
| `--date` | 否 | 测试日期（默认：当天） |
| `--template` | 否 | 测试模板名称（见下方模板列表） |
| `--output` | 否 | 输出目录（默认：当前目录） |

## 测试模板

预设测试模板定义在 [references/templates.md](references/templates.md) 中：

- `default` - 通用测试模板（默认）
- `asic` - ASIC芯片验证模板
- `fpga` - FPGA验证模板
- `eda` - EDA工具测试模板
- `flow` - 设计流程验证模板

如需添加新模板或修改现有模板，编辑 `references/templates.md` 文件。

## 文档结构

生成的文档包含以下内容：

1. **页眉**: 行芯科技 Logo + 文档标题
2. **页脚**: 页码 + "机密文件"标识
3. **文档信息区**: 产品名称、版本、测试日期、测试人员
4. **测试表格**: 三列表格，包含预设测试项
5. **签字区**: 测试人员签字、审核人员签字、日期

## 自定义配置

### 修改页眉 Logo

替换 `assets/logo.png` 文件（建议使用 200x50 像素的 PNG 图片）

### 添加新测试模板

1. 编辑 `references/templates.md`
2. 按照现有模板格式添加新的 JSON 定义
3. 使用 `--template` 参数指定新模板名称

## 依赖

- `docx` - Node.js docx 生成库
- 项目中必须可访问 `node_modules/docx`

## 示例

生成ASIC验证文档：
```bash
node scripts/generate.js --user "李明" --template asic --version "v2.1.0"
```

生成带指定日期的文档：
```bash
node scripts/generate.js --user "王芳" --date "2025-03-15" --product "新一代EDA工具"
```
