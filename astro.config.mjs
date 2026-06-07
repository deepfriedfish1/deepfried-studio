import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://deepfried-studio.netlify.app', // замените после деплоя
  integrations: [],
  vite: {
    assetsInclude: ['*.*/*.md'],
  },
});