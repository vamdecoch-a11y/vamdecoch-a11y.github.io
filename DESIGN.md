# DESIGN.md — vamdeco.ch (sito nuovo)

## Colori
- Sfondo pagina: #0a0a0a (--color-ink)
- Testo: #fafaf8 (--color-carta), gerarchie con /80 /70 /65 /50 /40
- Brand: #F58327 (--color-brand), hover #d96f15 (--color-brand-dark). UNICO arancione ammesso.
- Superfici: card-scura = bg white/4% + bordo white/10%; superficie #141414
- Sezione accento: bg-brand pieno con card bg-ink/90 (una per pagina, "Perché VAM Deco")
- WhatsApp: #25D366 (solo per i bottoni WhatsApp)

## Tipografia
- Unbounded 200-900 self-hosted (/fonts/unbounded-*.woff2), default su tutto (body e display)
- H1 pagina: text-3xl→5xl bold tracking-tight; sezioni: text-2xl→4xl bold
- Scritte giganti: parola-gigante (12.5vw, white 6%), Parli/amo! (9.5vw due righe), footer-titano (gradient bianco→brand)
- Body: text-sm/base, leading-relaxed, max ~65-75ch

## Componenti e effetti standard (riusare, non reinventare)
- data-reveal / data-reveal-stagger: comparsa allo scroll (html.js gate, prefers-reduced-motion rispettato)
- Marquee (nastro orizzontale), ParoleScroll (parole che si accendono), CardStack (galleria a pila trascinabile)
- Testimonianze (scroller verticale che rallenta all'hover) + parola-gigante dietro
- Processo: numero-fase + fase-linea che si accendono nella fascia centrale viewport
- Typewriter ciclico (scrive/cancella frasi) + FormContatti (mailto in anteprima, backend VPS al go-live)
- FAQ: faq-card con faq-bottone quadrato arancione, glow all'hover, risposta animata via grid-rows
- Footer cinematografico a tendina (desktop; statico mobile) con aurora, griglia, nastro top full-width, bottoni magnetici
- Bottoni: btn-anim (lift + ombra arancione); pillola-vetro SOLO nel footer cinema

## Regole
- Un solo H1 per pagina. JSON-LD FAQPage dove ci sono FAQ; LocalBusiness in arrivo sitewide.
- Immagini: /public/img/<pagina>/, alt descrittivi sempre, loading lazy sotto la piega.
- Niente Google Fonts remoto. Niente librerie animazione esterne: vanilla JS + CSS.
