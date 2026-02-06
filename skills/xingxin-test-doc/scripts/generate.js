#!/usr/bin/env node
/**
 * 行芯产品验证文档生成器
 * 用法: node generate.js --user "张三" [--version v1.0] [--product "产品名"] [--date YYYY-MM-DD] [--template default] [--output ./dir]
 */

const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, BorderStyle, WidthType, ShadingType,
        Header, Footer, PageNumber, HeadingLevel, ImageRun } = require('docx');
const fs = require('fs');
const path = require('path');

// 解析命令行参数
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    user: null,
    version: 'v1.0.0',
    product: '行芯产品',
    date: new Date().toISOString().split('T')[0],
    template: 'default',
    output: '.'
  };

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    const value = args[i + 1];
    if (options.hasOwnProperty(key) && value) {
      options[key] = value;
    }
  }

  if (!options.user) {
    console.error('错误: 必须指定 --user 参数（测试人员姓名）');
    console.error('用法: node generate.js --user "张三" [--version v1.0] [--product "产品名"] [--date YYYY-MM-DD] [--template default]');
    process.exit(1);
  }

  return options;
}

// 加载测试模板
function loadTemplate(templateName) {
  const templatesPath = path.join(__dirname, '..', 'references', 'templates.md');
  
  if (!fs.existsSync(templatesPath)) {
    console.warn('警告: 模板文件不存在，使用默认测试项');
    return getDefaultItems();
  }

  const content = fs.readFileSync(templatesPath, 'utf-8');
  
  // 查找指定模板的 JSON 块 (匹配 ```json ... ``` 格式)
  const templatePattern = new RegExp(`## ${templateName}[\\s\\S]*?\`\`\`json([\\s\\S]*?)\`\`\``, 'i');
  const match = content.match(templatePattern);
  
  if (match) {
    try {
      const template = JSON.parse(match[1].trim());
      return template.items || getDefaultItems();
    } catch (e) {
      console.warn(`警告: 解析模板 "${templateName}" 失败，使用默认测试项`);
    }
  }
  
  // 如果指定模板不存在，尝试使用 default 模板
  if (templateName !== 'default') {
    console.warn(`警告: 模板 "${templateName}" 未找到，尝试使用 default 模板`);
    const defaultMatch = content.match(/## default[\s\S]*?```json([\s\S]*?)```/i);
    if (defaultMatch) {
      try {
        const template = JSON.parse(defaultMatch[1].trim());
        return template.items || getDefaultItems();
      } catch (e) {
        // 忽略解析错误
      }
    }
  }
  
  return getDefaultItems();
}

// 默认测试项
function getDefaultItems() {
  return [
    { function: '功能完整性测试', points: '验证所有声明功能是否正常工作' },
    { function: '性能测试', points: '测试系统响应时间、吞吐量' },
    { function: '兼容性测试', points: '验证与主流环境的兼容性' },
    { function: '稳定性测试', points: '进行长时间运行测试' },
    { function: '用户界面测试', points: '检查UI布局、交互逻辑' },
    { function: '数据准确性测试', points: '验证输入输出数据的一致性' }
  ];
}

// 创建文档
async function createDocument(options) {
  const { user, version, product, date, template, output } = options;
  
  // 加载测试项
  const testItems = loadTemplate(template);
  
  // 定义边框样式
  const border = { style: BorderStyle.SINGLE, size: 1, color: "666666" };
  const borders = { top: border, bottom: border, left: border, right: border };
  
  // 列宽配置（总宽度 9360 DXA = 6.5 英寸，适合A4页面）
  const colWidths = [2800, 4560, 2000];
  
  // 创建表格行
  const tableRows = [
    // 表头
    new TableRow({
      children: [
        new TableCell({
          borders,
          width: { size: colWidths[0], type: WidthType.DXA },
          shading: { fill: "2E5090", type: ShadingType.CLEAR },
          verticalAlign: "center",
          margins: { top: 100, bottom: 100, left: 120, right: 120 },
          children: [new Paragraph({ 
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "测试功能点", bold: true, color: "FFFFFF", font: "SimHei", size: 22 })] 
          })]
        }),
        new TableCell({
          borders,
          width: { size: colWidths[1], type: WidthType.DXA },
          shading: { fill: "2E5090", type: ShadingType.CLEAR },
          verticalAlign: "center",
          margins: { top: 100, bottom: 100, left: 120, right: 120 },
          children: [new Paragraph({ 
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "测试要点", bold: true, color: "FFFFFF", font: "SimHei", size: 22 })] 
          })]
        }),
        new TableCell({
          borders,
          width: { size: colWidths[2], type: WidthType.DXA },
          shading: { fill: "2E5090", type: ShadingType.CLEAR },
          verticalAlign: "center",
          margins: { top: 100, bottom: 100, left: 120, right: 120 },
          children: [new Paragraph({ 
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "测试结果", bold: true, color: "FFFFFF", font: "SimHei", size: 22 })] 
          })]
        })
      ]
    })
  ];
  
  // 添加测试项行
  testItems.forEach((item, index) => {
    const isEven = index % 2 === 0;
    tableRows.push(
      new TableRow({
        children: [
          new TableCell({
            borders,
            width: { size: colWidths[0], type: WidthType.DXA },
            shading: isEven ? undefined : { fill: "F5F5F5", type: ShadingType.CLEAR },
            verticalAlign: "center",
            margins: { top: 80, bottom: 80, left: 120, right: 120 },
            children: [new Paragraph({ 
              children: [new TextRun({ text: item.function, font: "SimSun", size: 21 })] 
            })]
          }),
          new TableCell({
            borders,
            width: { size: colWidths[1], type: WidthType.DXA },
            shading: isEven ? undefined : { fill: "F5F5F5", type: ShadingType.CLEAR },
            verticalAlign: "center",
            margins: { top: 80, bottom: 80, left: 120, right: 120 },
            children: [new Paragraph({ 
              children: [new TextRun({ text: item.points, font: "SimSun", size: 21 })] 
            })]
          }),
          new TableCell({
            borders,
            width: { size: colWidths[2], type: WidthType.DXA },
            shading: isEven ? undefined : { fill: "F5F5F5", type: ShadingType.CLEAR },
            verticalAlign: "center",
            margins: { top: 80, bottom: 80, left: 120, right: 120 },
            children: [new Paragraph({ 
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: "□ 通过    □ 失败    □ 待测试", font: "SimSun", size: 20 })] 
            })]
          })
        ]
      })
    );
  });
  
  // 读取 logo 图片
  const logoPath = path.join(__dirname, '..', 'assets', 'logo.png');
  let logoImageRun = null;
  if (fs.existsSync(logoPath)) {
    const logoBuffer = fs.readFileSync(logoPath);
    // 将图片转为 base64
    const logoBase64 = logoBuffer.toString('base64');
    logoImageRun = new ImageRun({
      data: logoBuffer,
      transformation: { width: 80, height: 80 },
      type: "png"
    });
  }

  // 创建页眉
  const header = new Header({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [
          // logo 图片
          ...(logoImageRun ? [logoImageRun] : []),
          new TextRun({ text: "   行芯科技 | 产品验证文档", bold: true, font: "SimHei", size: 20, color: "2E5090" })
        ]
      }),
      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E5090" } },
        children: [new TextRun("")]
      })
    ]
  });
  
  // 创建页脚
  const footer = new Footer({
    children: [
      new Paragraph({
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" } },
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "机密文件  •  第 ", font: "SimSun", size: 18 }),
          new TextRun({ children: [PageNumber.CURRENT], font: "SimSun", size: 18 }),
          new TextRun({ text: " 页  •  共 ", font: "SimSun", size: 18 }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "SimSun", size: 18 }),
          new TextRun({ text: " 页", font: "SimSun", size: 18 })
        ]
      })
    ]
  });
  
  // 创建文档
  const doc = new Document({
    styles: {
      default: { 
        document: { 
          run: { font: "SimSun", size: 24 }
        } 
      },
      paragraphStyles: [
        { 
          id: "Heading1", 
          name: "Heading 1", 
          basedOn: "Normal", 
          next: "Normal", 
          quickFormat: true,
          run: { size: 36, bold: true, font: "SimHei", color: "2E5090" },
          paragraph: { spacing: { before: 400, after: 300 }, alignment: AlignmentType.CENTER }
        },
        { 
          id: "Heading2", 
          name: "Heading 2", 
          basedOn: "Normal", 
          next: "Normal", 
          quickFormat: true,
          run: { size: 26, bold: true, font: "SimHei" },
          paragraph: { spacing: { before: 300, after: 200 } }
        }
      ]
    },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1800, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      headers: { default: header },
      footers: { default: footer },
      children: [
        // 文档标题
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("行芯产品验证文档")]
        }),
        
        // 文档信息表格
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2340, 4680, 2340],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: "E8EEF7", type: ShadingType.CLEAR },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: "产品名称：", bold: true, font: "SimHei", size: 21 })] })]
                }),
                new TableCell({
                  borders,
                  width: { size: 4680, type: WidthType.DXA },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: product, font: "SimSun", size: 21 })] })]
                }),
                new TableCell({
                  borders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: "E8EEF7", type: ShadingType.CLEAR },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: "版本号：", bold: true, font: "SimHei", size: 21 })] })]
                })
              ]
            }),
            new TableRow({
              children: [
                new TableCell({
                  borders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: "E8EEF7", type: ShadingType.CLEAR },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: "测试日期：", bold: true, font: "SimHei", size: 21 })] })]
                }),
                new TableCell({
                  borders,
                  width: { size: 4680, type: WidthType.DXA },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: date, font: "SimSun", size: 21 })] })]
                }),
                new TableCell({
                  borders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: "E8EEF7", type: ShadingType.CLEAR },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: version, font: "SimSun", size: 21 })] })]
                })
              ]
            }),
            new TableRow({
              children: [
                new TableCell({
                  borders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: "E8EEF7", type: ShadingType.CLEAR },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: "测试人员：", bold: true, font: "SimHei", size: 21 })] })]
                }),
                new TableCell({
                  borders,
                  width: { size: 4680, type: WidthType.DXA },
                  columnSpan: 2,
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: user, font: "SimSun", size: 21 })] })]
                })
              ]
            })
          ]
        }),
        
        // 空行
        new Paragraph({ spacing: { before: 200, after: 200 }, children: [new TextRun("")] }),
        
        // 二级标题
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun("测试项目清单")]
        }),
        
        // 测试表格
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: colWidths,
          rows: tableRows
        }),
        
        // 空行
        new Paragraph({ spacing: { before: 300, after: 200 }, children: [new TextRun("")] }),
        
        // 备注
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun("备注")]
        }),
        new Paragraph({
          spacing: { before: 100, after: 100 },
          children: [new TextRun({ text: "（此处可填写测试过程中的特殊情况说明、环境配置信息、问题记录等）", font: "SimSun", size: 21, color: "999999" })]
        }),
        new Paragraph({ spacing: { before: 400, after: 100 }, children: [new TextRun("")] }),
        
        // 签字区域
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun("签字确认")]
        }),
        new Paragraph({ spacing: { before: 200, after: 100 }, children: [new TextRun("")] }),
        new Paragraph({
          spacing: { before: 100, after: 100 },
          children: [
            new TextRun({ text: "测试人员签字：____________________    日期：____________________", font: "SimSun", size: 22 })
          ]
        }),
        new Paragraph({ spacing: { before: 200, after: 100 }, children: [new TextRun("")] }),
        new Paragraph({
          spacing: { before: 100, after: 100 },
          children: [
            new TextRun({ text: "审核人员签字：____________________    日期：____________________", font: "SimSun", size: 22 })
          ]
        })
      ]
    }]
  });
  
  // 生成文件名
  const filename = `行芯产品验证文档-${user}.docx`;
  const outputPath = path.resolve(output, filename);
  
  // 确保输出目录存在
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // 生成文档
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  
  return { filename, path: outputPath, itemCount: testItems.length };
}

// 主函数
async function main() {
  try {
    const options = parseArgs();
    console.log('开始生成文档...');
    console.log(`  测试人员: ${options.user}`);
    console.log(`  产品名称: ${options.product}`);
    console.log(`  版本号: ${options.version}`);
    console.log(`  测试日期: ${options.date}`);
    console.log(`  测试模板: ${options.template}`);
    console.log(`  输出目录: ${options.output}`);
    console.log('');
    
    const result = await createDocument(options);
    
    console.log('✅ 文档生成成功！');
    console.log(`   文件名: ${result.filename}`);
    console.log(`   路径: ${result.path}`);
    console.log(`   测试项数量: ${result.itemCount}`);
  } catch (error) {
    console.error('❌ 生成失败:', error.message);
    process.exit(1);
  }
}

main();
