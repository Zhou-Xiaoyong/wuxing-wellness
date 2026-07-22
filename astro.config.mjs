// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 正式域名 fiveelementsbalance.com（影响 sitemap / canonical / RSS）
export default defineConfig({
  site: 'https://fiveelementsbalance.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
  // Cloudflare Pages 静态部署：构建命令 `npm run build`，输出目录 `dist`
  output: 'static',
});
