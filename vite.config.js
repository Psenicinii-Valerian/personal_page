import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In dev: served at "/". In build: served at "/personal_page/" (GitHub Pages).
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/personal_page/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
}));
