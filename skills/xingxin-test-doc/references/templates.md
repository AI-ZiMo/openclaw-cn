# 行芯产品验证文档 - 测试模板

本文档定义了产品验证文档的预设测试模板。

## default（通用测试模板）

```json
{
  "name": "default",
  "description": "通用产品测试模板",
  "items": [
    {
      "function": "功能完整性测试",
      "points": "验证所有声明功能是否正常工作，包括基本操作、边界条件、异常处理"
    },
    {
      "function": "性能测试",
      "points": "测试系统响应时间、吞吐量、资源占用率，确保满足性能指标要求"
    },
    {
      "function": "兼容性测试",
      "points": "验证与主流操作系统、浏览器、硬件环境的兼容性"
    },
    {
      "function": "稳定性测试",
      "points": "进行长时间运行测试（>24小时），监测系统稳定性及内存泄漏"
    },
    {
      "function": "用户界面测试",
      "points": "检查UI布局、响应式设计、交互逻辑、提示信息准确性"
    },
    {
      "function": "数据准确性测试",
      "points": "验证输入输出数据的一致性、精度、格式正确性"
    },
    {
      "function": "安全性测试",
      "points": "检查权限控制、数据加密、输入验证、防注入等安全机制"
    },
    {
      "function": "文档完整性检查",
      "points": "核对用户手册、API文档、帮助文档与实际功能的一致性"
    }
  ]
}
```

## asic（ASIC芯片验证模板）

```json
{
  "name": "asic",
  "description": "ASIC芯片设计验证模板",
  "items": [
    {
      "function": "逻辑功能验证",
      "points": "验证RTL代码与规格书功能一致性，所有功能点覆盖率达到100%"
    },
    {
      "function": "时序收敛验证",
      "points": "确认 setup/hold 时序满足目标频率要求，关键路径时序余量>10%"
    },
    {
      "function": "功耗分析验证",
      "points": "静态功耗和动态功耗符合规格要求，不同工作模式功耗测试"
    },
    {
      "function": "物理验证（DRC/LVS）",
      "points": "通过设计规则检查和版图电路一致性验证，零违规"
    },
    {
      "function": "CDC/RDC检查",
      "points": "验证跨时钟域和复位域的信号处理，无毛刺和亚稳态问题"
    },
    {
      "function": "UPF低功耗验证",
      "points": "验证电源域开关、隔离单元、保持寄存器功能正确"
    },
    {
      "function": "形式验证",
      "points": "Formal Equivalence Check 通过，RTL与网表功能等价"
    },
    {
      "function": "仿真覆盖率",
      "points": "代码覆盖率>95%，功能覆盖率>90%，断言覆盖率>85%"
    },
    {
      "function": "门级仿真",
      "points": "带SDF的门级仿真通过，时序异常处理机制验证"
    },
    {
      "function": "DFT测试",
      "points": "扫描链测试、BIST测试覆盖率满足可测试性要求"
    }
  ]
}
```

## fpga（FPGA验证模板）

```json
{
  "name": "fpga",
  "description": "FPGA原型验证模板",
  "items": [
    {
      "function": "资源利用率检查",
      "points": "LUT、FF、BRAM、DSP使用率符合预期，预留20%余量"
    },
    {
      "function": "时序收敛验证",
      "points": "WNS>0，关键路径分析，时钟约束完整性检查"
    },
    {
      "function": "IO约束验证",
      "points": "管脚分配正确，IO电平标准匹配，时序约束完整"
    },
    {
      "function": "上板功能测试",
      "points": "Bitstream下载成功，所有功能模块在硬件上工作正常"
    },
    {
      "function": "时钟系统验证",
      "points": "PLL/MMCM锁定稳定，各时钟域频率准确，时钟抖动符合要求"
    },
    {
      "function": "高速接口测试",
      "points": "SerDes、DDR、PCIe等高速接口眼图、误码率测试"
    },
    {
      "function": "热稳定性测试",
      "points": "长时间运行（>48小时），FPGA温度监测，无热失控"
    },
    {
      "function": "配置可靠性",
      "points": "上电自动配置、在线重配置、多重配置容错机制验证"
    }
  ]
}
```

## eda（EDA工具测试模板）

```json
{
  "name": "eda",
  "description": "EDA软件工具测试模板",
  "items": [
    {
      "function": "基础功能测试",
      "points": "工具启动、项目创建、文件打开保存、基本编辑功能"
    },
    {
      "function": "算法正确性验证",
      "points": "使用标准测试用例验证算法输出结果的正确性"
    },
    {
      "function": "大数据量测试",
      "points": "测试工具处理大规模设计的能力（>100万门）"
    },
    {
      "function": "多线程/并行性能",
      "points": "验证多核并行加速比，线程安全性"
    },
    {
      "function": "第三方工具集成",
      "points": "与主流EDA工具的数据交互、流程集成"
    },
    {
      "function": "脚本/TCL支持",
      "points": "批处理模式、自动化脚本执行、TCL命令完整性"
    },
    {
      "function": "报告生成功能",
      "points": "报告格式正确性、图表生成、数据导出功能"
    },
    {
      "function": "许可证管理",
      "points": "License server连接、许可证抢占/释放、多用户并发"
    },
    {
      "function": "崩溃恢复机制",
      "points": "异常退出时的数据保存、自动恢复功能"
    }
  ]
}
```

## flow（设计流程验证模板）

```json
{
  "name": "flow",
  "description": "芯片设计流程自动化验证模板",
  "items": [
    {
      "function": "流程启动检查",
      "points": "环境变量设置、依赖工具检查、输入数据完整性验证"
    },
    {
      "function": "分阶段执行",
      "points": "各设计阶段（综合/布局/布线/验证）顺序执行正确"
    },
    {
      "function": "错误处理机制",
      "points": "各阶段错误检测、告警处理、流程自动终止/重试"
    },
    {
      "function": "中间数据管理",
      "points": "检查点保存、版本控制、数据备份机制"
    },
    {
      "function": "资源调度",
      "points": "计算资源申请/释放、队列管理、优先级处理"
    },
    {
      "function": "日志记录",
      "points": "执行日志完整性、错误信息可追溯、性能统计"
    },
    {
      "function": "结果汇总",
      "points": "各阶段结果汇总、质量报告生成、邮件通知"
    },
    {
      "function": "断点续跑",
      "points": "从指定阶段恢复、增量执行、避免重复计算"
    },
    {
      "function": "多项目并发",
      "points": "多个设计项目同时运行，资源隔离，互不干扰"
    }
  ]
}
```

## 添加新模板

如需添加新模板，请按照以下格式：

1. 模板名称使用小写英文字母
2. 每个测试项必须包含 `function`（功能点）和 `points`（测试要点）
3. 测试结果列会自动填充为"待测试"
4. 在 SKILL.md 中的模板列表添加新模板名称
