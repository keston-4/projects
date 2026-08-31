import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://keston-4.github.io',
  base: '/projects/',
  vite: {
    plugins: [tailwindcss()],
  },
});
