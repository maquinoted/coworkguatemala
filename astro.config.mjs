import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Esta es la que busca Astro
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coworkguatemala.com',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  integrations: [tailwind(), sitemap()],
});