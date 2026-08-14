// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Dominio definitivo (go-live): sitemap e URL canonici puntano qui
  site: 'https://vamdeco.ch',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Redirect di vecchi URL (Framer) verso le pagine nuove, per non perdere posizioni su Google.
  // Elenco ricavato dal confronto tra l'archivio del vecchio sito e il sito nuovo.
  // In output statico Astro genera una pagina che rimanda automaticamente alla destinazione.
  redirects: {
    '/home': '/',
    '/packaging': '/adesivi-e-etichette',
    // 12 vecchie pagine "categoria" dell'abbigliamento -> pagina abbigliamento unica
    '/categoria-servizi/abbigliamento-personalizzato-t-shirt': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-polo': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-felpe': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-felpe-pile': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-felpa-zip': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-giacche-softshell': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-gilet-softshell': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-ricamo': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-stampa-dtf': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-uniformi-aziendali': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-eventi': '/abbigliamento-personalizzato-ticino',
    '/categoria-servizi/abbigliamento-personalizzato-addio-celibato-nubilato': '/abbigliamento-personalizzato-ticino',
  },
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
