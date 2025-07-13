# Okayjs

> Okayjs is a very okay JavaScript toolkit.

这是一个基于 Vite 构建的工具包，支持 ES/CJS/UMD/IIFE 模块化、多种发布方式，以及自动化文档、测试与发布流程。

## Okayjs 工具包项目目录结构（支持模块化、CDN、自动文档生成、自动发布、自动测试）

```text
okayjs/
├── .github/
│   └── workflows/
│       ├── publish.yml         // 自动发布 npm 包
│       └── docs-deploy.yml     // 自动部署文档到 GitHub Pages
├── src/
│   ├── index.ts                // 工具包主入口
│   └── utils/
│       ├── index.ts            // 工具模块集中导出口
│       ├── /array              // array工具模块
│       ├── /number             // number工具模块
│       ├── /string             // string工具模块
│       └── /type               // 常用类型工具模块
├── test/                       // 测试用例目录
│   ├── array.test.ts           // array 模块测试
│   └── string.test.ts          // string 模块测试
├── dist/                       // 构建输出目录
├── docs/                       // 文档输出目录（gh-pages）
├── package.json
├── tsconfig.json
├── vite.config.ts
├── ...若干项目配置文件
└── README.md
```

## 快速开始

```bash
pnpm install
pnpm build:dist
pnpm build:docs
pnpm test
```

## CDN 引入

```html
<script src="https://unpkg.com/@lshch/okayjs/dist/okayjs.iife.js"></script>
<script>
  console.log(Okayjs.stringIs('okayjs'));
  console.log(Okayjs.stringIsNumber('007'));
  console.log(Okayjs.arrayIs([2]));
</script>
```

## 自动化流程

- **Node 引擎**：强制 `>=22` 版本以利用新特性和性能优化。
- **测试验证**：Vitest 全局模式+Node 环境校验工具函数。
- **版本发布**：Git Tag 触发 npm 发布。
- **文档生产**：Typedoc 使用 CLI 生产注释文档。
- **文档部署**：Push 到 `main` 自动推送至 GitHub Pages。

## docs文档网站中英文对照

```json
{
  "On This Page": "本页内容",
  "Modules": "模块",
  "Functions": "函数",
  "Enumeration members": "枚举值",
  "References": "引用",
  "Variables": "变量",
  "Accessors": "访问器",
  "Type parameters": "类型参数",
  "Constructors": "构造函数",
  "Index": "索引",
  "Returns": "返回值",
  "Hierarchy": "继承结构",
  "Implemented by": "被实现",
  "Implements": "实现",
  "Inherited from": "继承自",
  "Overrides": "覆盖",
  "Defined in": "定义于"
}
```
