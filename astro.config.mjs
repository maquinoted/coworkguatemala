import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Definimos la URL base sin WWW
  site: 'https://coworkguatemala.com',
  
  // 2. Forzamos a que NO existan diagonales al final
  trailingSlash: 'never',
  
  // 3. Aseguramos que los enlaces internos se generen correctamente
  build: {
    format: 'file' 
  },
  
  integrations: [tailwind(), sitemap()],
});