import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'apps/web/src'),
    },
  },
  test: {
    exclude: ['e2e/**', '**/node_modules/**', '**/dist/**'],
  },
});
