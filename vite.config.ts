import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: { '@': resolve(__dirname, 'src') }
  },
  build: {
    target: 'es2018', // 指定编译目标，确保输出兼容较旧 Node 版本或浏览器环境
    lib: {
      entry: './src/index.ts',
      name: 'Okayjs',
      fileName: f => `okayjs.${f}.js`,
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    rollupOptions: {
      output: { exports: 'named' }
    }
  },
  plugins: [dts()]
});
