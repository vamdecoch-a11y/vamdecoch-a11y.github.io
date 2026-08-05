// Statistiche condivise del sito. Il numero di anni di esperienza si incrementa
// da solo: VAM Deco è nata nel 2017 e ogni anno, a dicembre, sale di uno.
// (agosto 2026 -> 8, dicembre 2026 -> 9, dicembre 2027 -> 10, e così via)
// Calcolato sia al build (valore statico qui sotto) sia lato client in Base.astro
// (data-anni-da), così si aggiorna anche senza un nuovo deploy.
export const ANNO_FONDAZIONE = 2017;

export function anniEsperienza(riferimento = new Date()): number {
  // fino a novembre incluso vale l'anno precedente, da dicembre scatta il nuovo
  const scattato = riferimento.getMonth() >= 11 ? 0 : 1;
  return riferimento.getFullYear() - ANNO_FONDAZIONE - scattato;
}
