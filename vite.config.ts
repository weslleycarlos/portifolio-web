import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Substitua 'nome-do-repo' pelo nome do seu repositório no GitHub.
  // Exemplo: se o link for https://github.com/weslleycarlos/portfolio, use '/portfolio/'
  // Se for https://github.com/weslleycarlos/weslleycarlos.github.io, use '/'
  base: '/nome-do-repo/', 
});