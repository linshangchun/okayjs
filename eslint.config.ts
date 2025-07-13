import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // JS + TS 基础规则
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // 针对项目中的 ts 文件配置 parser 等语言特性
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      // 可添加项目自定义规则
    }
  },
  prettier
];
