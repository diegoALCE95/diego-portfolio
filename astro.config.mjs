import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://diego-portfolio-ruby.vercel.app',
  cacheDir: '/tmp/vite-cache',
  vite: { cacheDir: '/tmp/vite-cache' },
});
