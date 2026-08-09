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
  // 目录式构建（blog/slug/index.html），真实可访问 URL 带结尾斜杠。
  // 强制全站 URL 带斜杠，避免 Cloudflare 对无斜杠版本做 308 重定向（GSC 报 Page with redirect）。
  trailingSlash: 'always',
});
