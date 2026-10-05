import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  adapter: vercel({ webAnalytics: { enabled: true } }),
  vite: { plugins: [tailwindcss()] },
});
