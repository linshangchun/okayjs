export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'refactor', 'test', 'chore', 'pkg']]
  }
};

// 常用的提交类型含义
// feat   ✨ 新增功能。引入新特性或模块，例如新增一个工具函数、组件、API 等。
// fix    🐛 修复 bug。修正用户场景下出现的问题或逻辑错误。
// docs   📝 仅文档变更。如修改 README、注释、API 文档等，不涉及源码。
// refactor   🔧 重构代码。不改变功能和行为的代码优化，例如结构调整、重命名、性能优化。
// test   ✅ 测试相关变更。包括增加、修改、重构测试代码。
// chore  🧹 其他杂项。如构建脚本修改、依赖更新、CI 配置调整等。一般不会影响产出逻辑。
// pkg    🎒 自定义的包升级标识。

// 示例提交信息
// git commit -m "feat: 添加 stringToArray 方法"
// git commit -m "fix: 修复 stringToJson 在 null 时崩溃问题"
// git commit -m "docs: 更新 README 中的使用说明"
// git commit -m "refactor: 重构 string 模块结构，拆分系列方法"
// git commit -m "test: 增加 stringHas 测试用例"
// git commit -m "chore: 升级 vitest 到最新版本"
// git commit -m "pkg: version++"
