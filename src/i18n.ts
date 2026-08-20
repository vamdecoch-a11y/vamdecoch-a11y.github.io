// Dizionario multilingua dei testi dell'interfaccia (menu, form, footer, cookie,
// template servizio). Italiano = lingua di default alla radice; inglese su /en/,
// tedesco su /de/. I componenti leggono la lingua da Astro.currentLocale.

export const LOCALES = ['it', 'en', 'de'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'it';

/** Prefissa un percorso interno con la lingua (l'italiano resta senza prefisso). */
export function localePath(locale: Locale | undefined, path: string): string {
  const l = (locale ?? 'it') as Locale;
  if (l === 'it') return path;
  if (path === '/') return `/${l}`;
  return `/${l}${path}`;
}

type Dict = Record<string, string>;

const it: Dict = {
  nav_home: 'Home', nav_chisiamo: 'Chi siamo', nav_servizi: 'I nostri servizi',
  nav_recensioni: 'Recensioni', nav_blog: 'Blog', contattaci: 'Contattaci',
  art_faq: 'Domande frequenti', art_cta_t: 'Ti è venuta un\'idea?', art_cta_p: 'Preventivo gratuito in 24/48h, senza impegno.', art_wa: 'Ciao VAM Deco, ho letto un vostro articolo e vorrei informazioni.',
  cerca_sito: 'Cerca nel sito', cerca_placeholder: 'Cerca un servizio...',
  cerca_nessuno: 'Nessun risultato. Prova con "vetrine", "magliette", "pellicole"...',
  badge_recensioni: 'su 72 recensioni Google',
  cta_preventivo: 'Richiedi il tuo preventivo gratuito', cta_whatsapp: 'Scrivici su WhatsApp',
  hero_rass1: 'Richiedi il tuo preventivo gratuito in', hero_2448: '24/48h',
  hero_rass2: 'Ti rispondiamo velocemente su WhatsApp o via mail',
  lab_benefici: 'Benefici', lab_comefunziona: 'Come funziona',
  processo_titolo: 'Il nostro Processo in 4 Fasi', step: 'Step',
  perche_label: 'Perché scegliere VAM Deco', perche_titolo1: 'Semplice, veloce,', perche_titolo2: 'su misura.',
  perche_para_default: "Produzione interna a Sementina, un solo referente dall'idea alla consegna e la stessa cura sia per il singolo pezzo che per la flotta aziendale.",
  cta_preventivo2: 'Richiedi il tuo preventivo',
  stat1_l: 'progetti realizzati', stat1_d: 'per aziende e privati in tutta la Svizzera',
  stat2_l: 'per il tuo preventivo', stat2_d: 'gratuito e senza impegno, su WhatsApp o via mail',
  stat3_l: 'anni di esperienza', stat3_d: 'in decorazione e personalizzazione in Ticino',
  tw1: 'Parliamone.', tw2: 'Diamo vita alle tue idee.',
  faq_label: 'Domande frequenti', faq_titolo: 'Hai Domande? Ecco le nostre Risposte!',
  vedi_recensioni: 'Vedi le recensioni', rec_verificata: 'Recensione verificata', rec_cliente: 'Cliente VAM Deco',
  prezzi_label: 'Quanto costa', prezzi_titolo: 'Prezzi chiari, qualità inclusa', prezzi_cad: '/cad',
  parliamo_pre: 'Parli', parliamo_post: 'amo!',
  f_nome: 'Nome*', f_cognome: 'Cognome*', f_azienda: 'Azienda', f_email: 'Email*',
  f_telefono: 'Numero di telefono',
  f_messaggio: "Messaggio* (fornisci più informazioni possibili per ricevere l'offerta entro 24h)",
  f_fonte: 'Come ci hai conosciuti?*', f_seleziona: 'Seleziona una risposta*',
  f_opt_passaparola: 'Passaparola', f_opt_social: 'Altri Social',
  f_opt_ai: 'Intelligenza Artificiale (ChatGPT, Gemini, ecc.)', f_opt_altro: 'Altro',
  f_invia: 'Invia', f_invio: 'Invio in corso...', f_obbligatori: '*Campi obbligatori',
  footer_titano: 'Diamo vita alle tue idee', footer_preventivo: 'Richiedi un preventivo',
  footer_servizi: 'I nostri servizi', footer_credit: '© Progettazione e sviluppo by VAM Deco Agency Sagl',
  footer_privacy: 'Norme sulla privacy', footer_cookie: 'Impostazioni cookie', footer_su: 'Torna su ↑',
  cc_titolo: 'Rispettiamo la tua privacy',
  cc_desc: 'Usiamo i cookie per migliorare la tua esperienza e analizzare il traffico del sito. Puoi accettare tutti i cookie oppure personalizzare le tue scelte. Maggiori dettagli nelle',
  cc_privacy_link: 'norme sulla privacy',
  cc_personalizza: 'Personalizza', cc_accetta: 'Accetta tutto', cc_salva: 'Salva preferenze',
  cc_nec: 'Necessari', cc_nec_d: 'Attivi sempre. Consentono la sicurezza e le funzionalità di base del sito.',
  cc_pref: 'Preferenze', cc_pref_d: "Memorizzano le tue scelte e impostazioni per un'esperienza personalizzata.",
  cc_ana: 'Statistiche', cc_ana_d: 'Ci aiutano a capire come viene usato il sito, in forma anonima (Google Analytics).',
  cc_mkt: 'Marketing', cc_mkt_d: 'Usati per mostrarti offerte e annunci pertinenti ai tuoi interessi.',
  sv_veicoli: 'Decorazione veicoli', sv_vetrine: 'Decorazione vetrine', sv_abbigliamento: 'Abbigliamento personalizzato',
  sv_cartellonistica: 'Cartellonistica', sv_adesivi: 'Adesivi e etichette', sv_resinate: 'Etichette resinate',
  sv_pellicole: 'Pellicole satinate privacy', sv_oscuramentouv: 'Oscuramento vetrate UV',
  sv_oscuramentoauto: 'Oscuramento vetri auto', sv_stampa: 'Stampa su carta', sv_siti: 'Siti web', sv_festa: 'Personalizza la tua festa',
  lingua_it: 'Italiano', lingua_en: 'English', lingua_de: 'Deutsch',
};

const en: Dict = {
  nav_home: 'Home', nav_chisiamo: 'About us', nav_servizi: 'Our services',
  nav_recensioni: 'Reviews', nav_blog: 'Blog', contattaci: 'Contact us',
  art_faq: 'Frequently asked questions', art_cta_t: 'Got an idea?', art_cta_p: 'Free quote in 24/48h, no obligation.', art_wa: "Hi VAM Deco, I read one of your articles and I'd like some information.",
  cerca_sito: 'Search the site', cerca_placeholder: 'Search a service...',
  cerca_nessuno: 'No results. Try "signage", "t-shirts", "films"...',
  badge_recensioni: 'on 72 Google reviews',
  cta_preventivo: 'Get your free quote', cta_whatsapp: 'Message us on WhatsApp',
  hero_rass1: 'Get your free quote within', hero_2448: '24/48h',
  hero_rass2: 'We reply quickly on WhatsApp or by email',
  lab_benefici: 'Benefits', lab_comefunziona: 'How it works',
  processo_titolo: 'Our 4-Step Process', step: 'Step',
  perche_label: 'Why choose VAM Deco', perche_titolo1: 'Simple, fast,', perche_titolo2: 'tailor-made.',
  perche_para_default: 'In-house production in Sementina, a single point of contact from idea to delivery, and the same care for a single item as for an entire company fleet.',
  cta_preventivo2: 'Request your quote',
  stat1_l: 'projects completed', stat1_d: 'for businesses and individuals across Switzerland',
  stat2_l: 'for your quote', stat2_d: 'free and no obligation, on WhatsApp or by email',
  stat3_l: 'years of experience', stat3_d: 'in decoration and personalisation in Ticino',
  tw1: "Let's talk.", tw2: 'We bring your ideas to life.',
  faq_label: 'FAQ', faq_titolo: 'Got questions? Here are our answers!',
  vedi_recensioni: 'See the reviews', rec_verificata: 'Verified review', rec_cliente: 'VAM Deco customer',
  prezzi_label: 'How much it costs', prezzi_titolo: 'Clear prices, quality included', prezzi_cad: '/ea',
  parliamo_pre: "Let's ", parliamo_post: 'talk!',
  f_nome: 'First name*', f_cognome: 'Last name*', f_azienda: 'Company', f_email: 'Email*',
  f_telefono: 'Phone number',
  f_messaggio: 'Message* (give us as much detail as possible to get your quote within 24h)',
  f_fonte: 'How did you hear about us?*', f_seleziona: 'Select an answer*',
  f_opt_passaparola: 'Word of mouth', f_opt_social: 'Other social media',
  f_opt_ai: 'AI (ChatGPT, Gemini, etc.)', f_opt_altro: 'Other',
  f_invia: 'Send', f_invio: 'Sending...', f_obbligatori: '*Required fields',
  footer_titano: 'We bring your ideas to life', footer_preventivo: 'Request a quote',
  footer_servizi: 'Our services', footer_credit: '© Design and development by VAM Deco Agency Sagl',
  footer_privacy: 'Privacy policy', footer_cookie: 'Cookie settings', footer_su: 'Back to top ↑',
  cc_titolo: 'We respect your privacy',
  cc_desc: 'We use cookies to improve your experience and analyse site traffic. You can accept all cookies or customise your choices. More details in our',
  cc_privacy_link: 'privacy policy',
  cc_personalizza: 'Customise', cc_accetta: 'Accept all', cc_salva: 'Save preferences',
  cc_nec: 'Necessary', cc_nec_d: 'Always on. They enable security and the basic functions of the site.',
  cc_pref: 'Preferences', cc_pref_d: 'They remember your choices and settings for a personalised experience.',
  cc_ana: 'Statistics', cc_ana_d: 'They help us understand how the site is used, anonymously (Google Analytics).',
  cc_mkt: 'Marketing', cc_mkt_d: 'Used to show you offers and ads relevant to your interests.',
  sv_veicoli: 'Vehicle graphics', sv_vetrine: 'Window graphics', sv_abbigliamento: 'Custom clothing',
  sv_cartellonistica: 'Signage', sv_adesivi: 'Stickers and labels', sv_resinate: 'Resin doming labels',
  sv_pellicole: 'Frosted privacy films', sv_oscuramentouv: 'UV window films',
  sv_oscuramentoauto: 'Car window tinting', sv_stampa: 'Print on paper', sv_siti: 'Websites', sv_festa: 'Personalise your party',
  lingua_it: 'Italiano', lingua_en: 'English', lingua_de: 'Deutsch',
};

const de: Dict = {
  nav_home: 'Home', nav_chisiamo: 'Über uns', nav_servizi: 'Unsere Leistungen',
  nav_recensioni: 'Bewertungen', nav_blog: 'Blog', contattaci: 'Kontakt',
  art_faq: 'Häufige Fragen', art_cta_t: 'Haben Sie eine Idee?', art_cta_p: 'Kostenlose Offerte in 24/48 Std., unverbindlich.', art_wa: 'Hallo VAM Deco, ich habe einen Ihrer Artikel gelesen und hätte gerne Informationen.',
  cerca_sito: 'Website durchsuchen', cerca_placeholder: 'Leistung suchen...',
  cerca_nessuno: 'Keine Ergebnisse. Versuchen Sie "Schaufenster", "T-Shirts", "Folien"...',
  badge_recensioni: 'aus 72 Google-Bewertungen',
  cta_preventivo: 'Kostenloses Angebot anfordern', cta_whatsapp: 'Schreiben Sie uns auf WhatsApp',
  hero_rass1: 'Kostenloses Angebot innerhalb von', hero_2448: '24/48h',
  hero_rass2: 'Wir antworten schnell per WhatsApp oder E-Mail',
  lab_benefici: 'Vorteile', lab_comefunziona: 'So funktioniert es',
  processo_titolo: 'Unser Prozess in 4 Schritten', step: 'Schritt',
  perche_label: 'Warum VAM Deco', perche_titolo1: 'Einfach, schnell,', perche_titolo2: 'massgeschneidert.',
  perche_para_default: 'Produktion im eigenen Haus in Sementina, ein einziger Ansprechpartner von der Idee bis zur Lieferung und die gleiche Sorgfalt für das Einzelstück wie für die ganze Firmenflotte.',
  cta_preventivo2: 'Angebot anfordern',
  stat1_l: 'realisierte Projekte', stat1_d: 'für Firmen und Private in der ganzen Schweiz',
  stat2_l: 'für Ihr Angebot', stat2_d: 'kostenlos und unverbindlich, per WhatsApp oder E-Mail',
  stat3_l: 'Jahre Erfahrung', stat3_d: 'in Gestaltung und Personalisierung im Tessin',
  tw1: 'Sprechen wir.', tw2: 'Wir erwecken Ihre Ideen zum Leben.',
  faq_label: 'Häufige Fragen', faq_titolo: 'Fragen? Hier sind unsere Antworten!',
  vedi_recensioni: 'Bewertungen ansehen', rec_verificata: 'Verifizierte Bewertung', rec_cliente: 'VAM Deco Kunde',
  prezzi_label: 'Was es kostet', prezzi_titolo: 'Klare Preise, Qualität inklusive', prezzi_cad: '/Stk',
  parliamo_pre: 'Reden ', parliamo_post: 'wir!',
  f_nome: 'Vorname*', f_cognome: 'Nachname*', f_azienda: 'Firma', f_email: 'E-Mail*',
  f_telefono: 'Telefonnummer',
  f_messaggio: 'Nachricht* (bitte so viele Infos wie möglich für ein Angebot innert 24h)',
  f_fonte: 'Wie haben Sie uns gefunden?*', f_seleziona: 'Bitte wählen*',
  f_opt_passaparola: 'Empfehlung', f_opt_social: 'Andere Social Media',
  f_opt_ai: 'KI (ChatGPT, Gemini, usw.)', f_opt_altro: 'Anderes',
  f_invia: 'Senden', f_invio: 'Wird gesendet...', f_obbligatori: '*Pflichtfelder',
  footer_titano: 'Wir erwecken Ideen zum Leben', footer_preventivo: 'Angebot anfordern',
  footer_servizi: 'Unsere Leistungen', footer_credit: '© Konzept und Entwicklung von VAM Deco Agency Sagl',
  footer_privacy: 'Datenschutz', footer_cookie: 'Cookie-Einstellungen', footer_su: 'Nach oben ↑',
  cc_titolo: 'Wir respektieren Ihre Privatsphäre',
  cc_desc: 'Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und den Website-Verkehr zu analysieren. Sie können alle Cookies akzeptieren oder Ihre Auswahl anpassen. Mehr dazu in unserem',
  cc_privacy_link: 'Datenschutz',
  cc_personalizza: 'Anpassen', cc_accetta: 'Alle akzeptieren', cc_salva: 'Einstellungen speichern',
  cc_nec: 'Notwendig', cc_nec_d: 'Immer aktiv. Sie ermöglichen die Sicherheit und die Grundfunktionen der Website.',
  cc_pref: 'Präferenzen', cc_pref_d: 'Sie speichern Ihre Auswahl und Einstellungen für ein persönliches Erlebnis.',
  cc_ana: 'Statistik', cc_ana_d: 'Sie helfen uns anonym zu verstehen, wie die Website genutzt wird (Google Analytics).',
  cc_mkt: 'Marketing', cc_mkt_d: 'Werden verwendet, um Ihnen passende Angebote und Anzeigen zu zeigen.',
  sv_veicoli: 'Fahrzeugbeschriftung', sv_vetrine: 'Schaufenstergestaltung', sv_abbigliamento: 'Textildruck und Bekleidung',
  sv_cartellonistica: 'Beschilderung', sv_adesivi: 'Aufkleber und Etiketten', sv_resinate: 'Doming-Etiketten',
  sv_pellicole: 'Sichtschutzfolien', sv_oscuramentouv: 'UV-Fensterfolien',
  sv_oscuramentoauto: 'Autoscheiben-Tönung', sv_stampa: 'Papierdruck', sv_siti: 'Webseiten', sv_festa: 'Deine Party gestalten',
  lingua_it: 'Italiano', lingua_en: 'English', lingua_de: 'Deutsch',
};

export const ui: Record<Locale, Dict> = { it, en, de };

export function t(locale: Locale | undefined, key: string): string {
  const l = (locale ?? 'it') as Locale;
  return ui[l]?.[key] ?? ui.it[key] ?? key;
}

// Pagine che esistono in TUTTE e tre le lingue (fase 1): home, servizi, contattaci
// e le 12 pagine servizio principali. Le sottopagine città e le pagine solo-IT
// (chi-siamo, recensioni, blog, privacy...) NON sono qui: su di esse non emettiamo
// hreflang e il selettore lingua rimanda alla home EN/DE (mai un 404).
export const PAGINE_TRADOTTE = new Set<string>([
  '/', '/servizi', '/contattaci', '/chi-siamo', '/recensioni', '/articoli', '/norme-sulla-privacy',
  '/decorazione-veicoli-ticino', '/decorazione-vetrine-ticino', '/abbigliamento-personalizzato-ticino',
  '/pellicole-satinate-ticino', '/oscuramento-vetrate-uv', '/oscuramento-vetri-auto-ticino',
  '/adesivi-e-etichette', '/etichette-resinate', '/cartellonistica', '/stampa-su-carta',
  '/siti-web', '/personalizza-la-tua-festa',
]);

// Prefissi (sottopagine citta) tradotti in EN+DE: tutte le pagine dentro queste cartelle.
const PREFISSI_TRADOTTI = [
  '/articoli/',
  '/abbigliamento-personalizzato-ticino/',
  '/decorazione-veicoli-ticino/',
  '/decorazione-vetrine-ticino/',
];

// True se il percorso corrente (in qualsiasi lingua) ha le tre versioni linguistiche.
export function haTraduzioni(pathname: string): boolean {
  const pulito = pathname.replace(/index\.html$/, '').replace(/\.html$/, '') || '/';
  const base = pulito.replace(/^\/(en|de)(?=\/|$)/, '') || '/';
  return PAGINE_TRADOTTE.has(base) || PREFISSI_TRADOTTI.some((p) => base.startsWith(p));
}
