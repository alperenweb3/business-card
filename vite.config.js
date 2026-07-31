import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        tr: resolve(process.cwd(), 'tr/index.html'),
        de: resolve(process.cwd(), 'de/index.html'),
      },
    },
  },
});
