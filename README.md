# POSTE — only you have the key

Single-screen encrypted-mailbox interaction: an open/close video keyed to a button, with features and footer. Built for the Scroll Sites marketplace, iframe-ready.

- `npm run dev` / `npm run build` → `dist/` (`BASE=/repo-name/` for GitHub Pages)

## Live URLs
- Vercel (primary): https://poste-scroll-site.vercel.app
- GitHub Pages (mirror): https://husnainkhushid.github.io/poste-scroll-site/

Both deploy on push to `main`. Vercel uses the Vite preset with no config; the Pages workflow sets `BASE`.

## For the coding agent
Section resources live in the marketplace workspace under `02-sections/poste/`. Section ids: `01-hero` (`data-section` attributes). The page posts `{ source:'scroll-site', type:'sections'|'section' }` to a parent frame and accepts `{ type:'scrollTo', id }`.
