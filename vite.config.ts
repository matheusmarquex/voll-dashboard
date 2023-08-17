import react from '@vitejs/plugin-react';
import { URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~/': `${new URL('src', import.meta.url).pathname}/`,
    },
  },
});
