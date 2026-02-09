#!/usr/bin/env python3
"""行芯产品验证文档生成器（无第三方依赖）。

使用 Python 标准库直接生成 .docx (OOXML ZIP 包)，避免安装额外 npm/pip 库。
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import zipfile
from html import escape
from pathlib import Path

DEFAULT_VERSION = "v1.0.0"
DEFAULT_PRODUCT = "行芯产品"
DEFAULT_TEMPLATE = "default"
DEFAULT_OUTPUT = "."


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="生成行芯产品验证文档（.docx）")
    parser.add_argument("--user", required=True, help="测试人员姓名")
    parser.add_argument("--version", default=DEFAULT_VERSION, help="产品版本号")
    parser.add_argument("--product", default=DEFAULT_PRODUCT, help="产品名称")
    parser.add_argument("--date", default=dt.date.today().isoformat(), help="测试日期 (YYYY-MM-DD)")
    parser.add_argument("--template", default=DEFAULT_TEMPLATE, help="模板名称")
    parser.add_argument("--output", default=DEFAULT_OUTPUT, help="输出目录")
    return parser.parse_args()


def get_default_items() -> list[dict[str, str]]:
    return [
        {"function": "功能完整性测试", "points": "验证所有声明功能是否正常工作"},
        {"function": "性能测试", "points": "测试系统响应时间、吞吐量"},
        {"function": "兼容性测试", "points": "验证与主流环境的兼容性"},
        {"function": "稳定性测试", "points": "进行长时间运行测试"},
        {"function": "用户界面测试", "points": "检查UI布局、交互逻辑"},
        {"function": "数据准确性测试", "points": "验证输入输出数据的一致性"},
    ]


def load_template(template_name: str, base_dir: Path) -> list[dict[str, str]]:
    templates_path = base_dir / "references" / "templates.md"
    if not templates_path.exists():
        return get_default_items()

    content = templates_path.read_text(encoding="utf-8")

    def extract(name: str) -> list[dict[str, str]] | None:
        pattern = re.compile(
            rf"^##\s*{re.escape(name)}[^\n]*\n+```json\s*(.*?)\s*```",
            flags=re.IGNORECASE | re.MULTILINE | re.DOTALL,
        )
        match = pattern.search(content)
        if not match:
            return None
        try:
            data = json.loads(match.group(1))
            items = data.get("items", [])
            if isinstance(items, list):
                normalized: list[dict[str, str]] = []
                for item in items:
                    if not isinstance(item, dict):
                        continue
                    fn = str(item.get("function", "")).strip()
                    pts = str(item.get("points", "")).strip()
                    if fn and pts:
                        normalized.append({"function": fn, "points": pts})
                return normalized or None
        except json.JSONDecodeError:
            return None
        return None

    items = extract(template_name)
    if items:
        return items
    if template_name.lower() != DEFAULT_TEMPLATE:
        fallback = extract(DEFAULT_TEMPLATE)
        if fallback:
            return fallback

    return get_default_items()


def safe_filename(text: str) -> str:
    value = re.sub(r"[\\/:*?\"<>|\r\n\t]", "_", text).strip()
    return value or "unknown"


def run(text: str, *, font: str = "SimSun", size: int = 21, bold: bool = False, color: str | None = None) -> str:
    parts = [
        "<w:r>",
        "<w:rPr>",
        f'<w:rFonts w:ascii="{font}" w:hAnsi="{font}" w:eastAsia="{font}"/>',
        f'<w:sz w:val="{size}"/>',
        f'<w:szCs w:val="{size}"/>',
    ]
    if bold:
        parts.append("<w:b/>")
    if color:
        parts.append(f'<w:color w:val="{color}"/>')
    parts.append("</w:rPr>")
    parts.append(f'<w:t xml:space="preserve">{escape(text)}</w:t>')
    parts.append("</w:r>")
    return "".join(parts)


def paragraph(
    runs: list[str],
    *,
    align: str | None = None,
    spacing_before: int | None = None,
    spacing_after: int | None = None,
    keep_next: bool = False,
) -> str:
    ppr: list[str] = []
    if align:
        ppr.append(f'<w:jc w:val="{align}"/>')
    if spacing_before is not None or spacing_after is not None:
        before = str(spacing_before if spacing_before is not None else 0)
        after = str(spacing_after if spacing_after is not None else 0)
        ppr.append(f'<w:spacing w:before="{before}" w:after="{after}"/>')
    if keep_next:
        ppr.append("<w:keepNext/>")

    if ppr:
        return f"<w:p><w:pPr>{''.join(ppr)}</w:pPr>{''.join(runs)}</w:p>"
    return f"<w:p>{''.join(runs)}</w:p>"


def table_cell(text_value: str, width: int, *, shaded: str | None = None, align: str = "left", bold: bool = False) -> str:
    tc_pr = [
        f'<w:tcW w:w="{width}" w:type="dxa"/>',
        '<w:tcMar><w:top w:w="80" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/>'
        '<w:left w:w="120" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar>',
        '<w:vAlign w:val="center"/>',
        '<w:tcBorders>'
        '<w:top w:val="single" w:sz="8" w:color="666666"/>'
        '<w:left w:val="single" w:sz="8" w:color="666666"/>'
        '<w:bottom w:val="single" w:sz="8" w:color="666666"/>'
        '<w:right w:val="single" w:sz="8" w:color="666666"/>'
        '</w:tcBorders>',
    ]
    if shaded:
        tc_pr.append(f'<w:shd w:val="clear" w:color="auto" w:fill="{shaded}"/>')

    color = "FFFFFF" if shaded == "2E5090" else None
    font = "SimHei" if bold else "SimSun"
    return (
        "<w:tc>"
        f"<w:tcPr>{''.join(tc_pr)}</w:tcPr>"
        f"{paragraph([run(text_value, font=font, size=22 if bold else 21, bold=bold, color=color)], align=align)}"
        "</w:tc>"
    )


def table_row(cells: list[str]) -> str:
    return f"<w:tr>{''.join(cells)}</w:tr>"


def build_document_xml(
    *,
    user: str,
    version: str,
    product: str,
    date: str,
    test_items: list[dict[str, str]],
) -> str:
    ns = (
        'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"'
    )

    info_table_rows = [
        table_row(
            [
                table_cell("产品名称：", 1800, shaded="E8EEF7", bold=True),
                table_cell(product, 2880),
                table_cell("版本号：", 1800, shaded="E8EEF7", bold=True),
                table_cell(version, 2880),
            ]
        ),
        table_row(
            [
                table_cell("测试日期：", 1800, shaded="E8EEF7", bold=True),
                table_cell(date, 2880),
                table_cell("测试人员：", 1800, shaded="E8EEF7", bold=True),
                table_cell(user, 2880),
            ]
        ),
    ]

    test_table_rows = [
        table_row(
            [
                table_cell("测试功能点", 2800, shaded="2E5090", align="center", bold=True),
                table_cell("测试要点", 4560, shaded="2E5090", align="center", bold=True),
                table_cell("测试结果", 2000, shaded="2E5090", align="center", bold=True),
            ]
        )
    ]

    for index, item in enumerate(test_items):
        zebra = "F5F5F5" if index % 2 else None
        test_table_rows.append(
            table_row(
                [
                    table_cell(item["function"], 2800, shaded=zebra),
                    table_cell(item["points"], 4560, shaded=zebra),
                    table_cell("□ 通过    □ 失败    □ 待测试", 2000, shaded=zebra, align="center"),
                ]
            )
        )

    info_table = (
        '<w:tbl>'
        '<w:tblPr><w:tblW w:w="9360" w:type="dxa"/></w:tblPr>'
        '<w:tblGrid><w:gridCol w:w="1800"/><w:gridCol w:w="2880"/><w:gridCol w:w="1800"/><w:gridCol w:w="2880"/></w:tblGrid>'
        f"{''.join(info_table_rows)}"
        '</w:tbl>'
    )

    test_table = (
        '<w:tbl>'
        '<w:tblPr><w:tblW w:w="9360" w:type="dxa"/></w:tblPr>'
        '<w:tblGrid><w:gridCol w:w="2800"/><w:gridCol w:w="4560"/><w:gridCol w:w="2000"/></w:tblGrid>'
        f"{''.join(test_table_rows)}"
        '</w:tbl>'
    )

    body_nodes = [
        paragraph([run("行芯产品验证文档", font="SimHei", size=36, bold=True, color="2E5090")], align="center", spacing_after=220),
        info_table,
        paragraph([run("", size=21)], spacing_before=200, spacing_after=200),
        paragraph([run("测试项目清单", font="SimHei", size=28, bold=True)], spacing_before=160, spacing_after=140),
        test_table,
        paragraph([run("", size=21)], spacing_before=260, spacing_after=160),
        paragraph([run("备注", font="SimHei", size=28, bold=True)], spacing_before=120, spacing_after=120),
        paragraph([run("（此处可填写测试过程中的特殊情况说明、环境配置信息、问题记录等）", font="SimSun", size=21, color="999999")], spacing_after=220),
        paragraph([run("签字确认", font="SimHei", size=28, bold=True)], spacing_before=120, spacing_after=120),
        paragraph([run("测试人员签字：____________________    日期：____________________", size=22)], spacing_before=180, spacing_after=120),
        paragraph([run("审核人员签字：____________________    日期：____________________", size=22)], spacing_before=140, spacing_after=120),
    ]

    sect_pr = (
        '<w:sectPr>'
        '<w:headerReference w:type="default" r:id="rId1"/>'
        '<w:footerReference w:type="default" r:id="rId2"/>'
        '<w:pgSz w:w="11906" w:h="16838"/>'
        '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="708" w:footer="708" w:gutter="0"/>'
        '</w:sectPr>'
    )

    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<w:document {ns}>'
        f'<w:body>{"".join(body_nodes)}{sect_pr}</w:body>'
        '</w:document>'
    )


def build_header_xml() -> str:
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
        '<w:p>'
        '<w:pPr><w:jc w:val="center"/></w:pPr>'
        f'{run("行芯科技 | 产品验证文档", font="SimHei", size=20, bold=True, color="2E5090")}'
        '</w:p>'
        '<w:p><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="6" w:color="2E5090"/></w:pBdr></w:pPr><w:r><w:t/></w:r></w:p>'
        '</w:hdr>'
    )


def build_footer_xml() -> str:
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
        '<w:p>'
        '<w:pPr><w:jc w:val="center"/><w:pBdr><w:top w:val="single" w:sz="4" w:color="CCCCCC"/></w:pBdr></w:pPr>'
        f'{run("机密文件  •  第 ", size=18)}'
        '<w:fldSimple w:instr=" PAGE "><w:r><w:rPr><w:rFonts w:ascii="SimSun" w:hAnsi="SimSun" w:eastAsia="SimSun"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>'
        f'{run(" 页  •  共 ", size=18)}'
        '<w:fldSimple w:instr=" NUMPAGES "><w:r><w:rPr><w:rFonts w:ascii="SimSun" w:hAnsi="SimSun" w:eastAsia="SimSun"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>'
        f'{run(" 页", size=18)}'
        '</w:p>'
        '</w:ftr>'
    )


def build_styles_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
    <w:qFormat/>
    <w:rPr>
      <w:rFonts w:ascii="SimSun" w:hAnsi="SimSun" w:eastAsia="SimSun"/>
      <w:sz w:val="21"/>
      <w:szCs w:val="21"/>
    </w:rPr>
  </w:style>
</w:styles>
"""


def build_content_types_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>
  <Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
"""


def build_package_rels_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
"""


def build_document_rels_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>
"""


def build_app_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
            xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Microsoft Office Word</Application>
  <DocSecurity>0</DocSecurity>
  <ScaleCrop>false</ScaleCrop>
  <Company>行芯科技</Company>
  <LinksUpToDate>false</LinksUpToDate>
  <SharedDoc>false</SharedDoc>
  <HyperlinksChanged>false</HyperlinksChanged>
  <AppVersion>16.0000</AppVersion>
</Properties>
"""


def build_core_xml(user: str) -> str:
    now = dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    creator = escape(user)
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
                   xmlns:dc="http://purl.org/dc/elements/1.1/"
                   xmlns:dcterms="http://purl.org/dc/terms/"
                   xmlns:dcmitype="http://purl.org/dc/dcmitype/"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>行芯产品验证文档</dc:title>
  <dc:subject>产品测试验证</dc:subject>
  <dc:creator>{creator}</dc:creator>
  <cp:keywords>验证,测试,文档</cp:keywords>
  <dc:description>自动生成的产品测试验证文档</dc:description>
  <cp:lastModifiedBy>{creator}</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">{now}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">{now}</dcterms:modified>
</cp:coreProperties>
"""


def write_docx(output_path: Path, *, user: str, version: str, product: str, date: str, items: list[dict[str, str]]) -> None:
    files: dict[str, str] = {
        "[Content_Types].xml": build_content_types_xml(),
        "_rels/.rels": build_package_rels_xml(),
        "docProps/app.xml": build_app_xml(),
        "docProps/core.xml": build_core_xml(user),
        "word/document.xml": build_document_xml(
            user=user,
            version=version,
            product=product,
            date=date,
            test_items=items,
        ),
        "word/styles.xml": build_styles_xml(),
        "word/header1.xml": build_header_xml(),
        "word/footer1.xml": build_footer_xml(),
        "word/_rels/document.xml.rels": build_document_rels_xml(),
    }

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output_path, mode="w", compression=zipfile.ZIP_DEFLATED) as zf:
        for name, content in files.items():
            zf.writestr(name, content)


def main() -> int:
    args = parse_args()
    base_dir = Path(__file__).resolve().parent.parent
    test_items = load_template(args.template, base_dir)

    output_dir = Path(args.output).resolve()
    filename = f"行芯产品验证文档-{safe_filename(args.user)}.docx"
    output_path = output_dir / filename

    write_docx(
        output_path,
        user=args.user,
        version=args.version,
        product=args.product,
        date=args.date,
        items=test_items,
    )

    print("开始生成文档...")
    print(f"  测试人员: {args.user}")
    print(f"  产品名称: {args.product}")
    print(f"  版本号: {args.version}")
    print(f"  测试日期: {args.date}")
    print(f"  测试模板: {args.template}")
    print(f"  输出目录: {output_dir}")
    print("")
    print("✅ 文档生成成功！")
    print(f"   文件名: {filename}")
    print(f"   路径: {output_path}")
    print(f"   测试项数量: {len(test_items)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
