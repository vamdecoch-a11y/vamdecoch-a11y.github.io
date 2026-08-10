// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Dominio definitivo (go-live): sitemap e URL canonici puntano qui
  site: 'https://vamdeco.ch',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // fuori dalla sitemap: pagine di servizio non destinate a Google
      filter: (pagina) =>
        !pagina.includes('/ringraziamenti') &&
        !pagina.includes('/pannello') &&
        !pagina.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
