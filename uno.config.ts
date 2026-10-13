import { defineConfig } from 'unocss'

/**
 * Slidev merges this file with its internal UnoCSS config.
 * @see https://sli.dev/custom/config-unocss
 *
 * All breakpoints at 0px: `sm:`, `md:`, `lg:`… mean "always on".
 * The deck looks the same on mobile and desktop; Slidev only scales the canvas.
 */
export default defineConfig({
  theme: {
    breakpoints: {
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
    },
    /** Deck palette: use as `text-brand-blue`, `bg-brand-navy`, etc. (avoid `text-[#…]` in .md — Vue breaks on `[]` / `#`). */
    colors: {
      brand: {
        blue: '#3981BF',
        /** Secondary accent (replaces the original green #A0BF5E). */
        navy: '#1F4E79',
        gray: '#262626',
      },
    },
  },
  shortcuts: {
    /** Standard slide container (leaves room for the footer and logos). */
    'slide-deck-shell':
      'relative flex h-full min-h-0 flex-col pb-[6rem] pr-1 sm:pb-[6.5rem]',
    /** Slide title + accent bar. */
    'slide-title':
      'mt-0 text-xl font-bold leading-tight tracking-tight text-brand-gray sm:text-2xl',
    'slide-title-bar':
      'mt-1 h-0.5 w-20 max-w-full rounded-full bg-brand-navy',
    /** White card with colored left border (add `border-l-brand-blue` or `border-l-brand-navy`). */
    'deck-card':
      'rounded-xl border border-gray-300/60 border-l-4 bg-white/95 px-5 py-4 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm',
    'deck-card-label':
      'mb-2 border-b border-gray-200/90 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-blue',
    /** 3-column footer grid (author | title | date + page). */
    'deck-footer-grid':
      'grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,0.95fr)]',
  },
})
