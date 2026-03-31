// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://d4chigo.github.io',
  base: '/portfolio',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});