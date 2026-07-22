# Wu Xing Wellness — Astro + Cloudflare Pages

A content site about traditional Chinese five-element (五行) wellness, built for Western readers.
Stack: **Astro 6 (static) + Cloudflare Pages**, zero backend, SEO-ready.

## Structure
```
src/
  components/   BaseHead(JSON-LD), Header, Footer, Disclaimer, ElementCard, CloudDivider, FiveElementsDiagram
  layouts/      BaseLayout, PostLayout (Article JSON-LD)
  data/         elements.ts (五行 mapping), quizzes.ts (quiz questions)
  content/      posts/  recipes/  quizzes/   (Markdown collections)
  pages/        index, elements/[element], blog, quizzes, recipes, about, author, contact, rss.xml.js
  styles/       global.css (中国风 design system)
public/         favicon.svg, og-default.svg, robots.txt, _redirects
```

## Local dev
```bash
npm install
npm run dev        # http://localhost:4321
```

## Build & deploy (Cloudflare Pages)
```bash
npm run build      # outputs ./dist
```
- Build command: `npm run build`
- Output directory: `dist`
- Push to GitHub → connect Cloudflare Pages → auto-deploy.

## SEO / trust checklist
- [ ] Change `site` in `astro.config.mjs` to your real domain (sitemap/canonical/RSS).
- [ ] Update `SITE` in `src/consts.ts` (title, email, nav).
- [ ] Fill `src/consts.ts` author email + real About/Author/Contact copy.
- [ ] Every article already renders a YMYL disclaimer + Article JSON-LD.
- [ ] Submit `sitemap-index.xml` to Google Search Console + Bing Webmaster Tools.

## Content workflow
1. Drop a Markdown file in `src/content/posts/` (set `element`, `tags`, `pubDate`).
2. For recipes use `src/content/recipes/`; for quizzes add a Markdown entry + questions in `src/data/quizzes.ts`.
3. Rebuild → deploy.

> Note: content is educational/cultural, not medical advice. Keep the disclaimer on every page.
