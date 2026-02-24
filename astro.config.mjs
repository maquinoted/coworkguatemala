import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Dominio principal sin WWW y sin diagonal al final
  site: 'https://coworkguatemala.com',
  
  // 2. Forzamos la eliminación de la diagonal al final en todas las rutas
  trailingSlash: 'never',
  
  // 3. Formato de directorio para URLs limpias en Vercel
  build: {
    format: 'directory'
  },
  
  integrations: [
    tailwind(), 
    sitemap() // Lo dejamos simple para que Astro use los valores por defecto del 'site'
  ],
});