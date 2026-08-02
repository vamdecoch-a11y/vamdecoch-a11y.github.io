// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vamdecoch-a11y.github.io',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
