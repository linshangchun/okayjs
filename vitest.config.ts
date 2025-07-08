import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig({
  ...viteConfig,
  test: {
    include: ['test/**/*.test.ts'],
    globals: true,
    environment: 'node',
    reporters: 'default'
  }
});