import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://minipos-kohl.vercel.app',
  integrations: [react()],
  adapter: vercel({ webAnalytics: { enabled: true } }),
  vite: { plugins: [tailwindcss()] },
});
