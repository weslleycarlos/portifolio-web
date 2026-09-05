import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Preserve the repository path used by GitHub Pages.
  base: '/portifolio-web/',
});
