import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Dominio principal sin WWW y sin diagonal al final
  site: 'https://coworkguatemala.com',
  
  // 2. Forzamos la eliminación de la diagonal al final en todas las rutas
  trailingSlash: 'never',
  
  // 3. Cambiamos el formato de salida para mejor compatibilidad con el sitemap y Vercel
  build: {
    format: 'directory' // Crea carpetas limpias que Vercel sirve sin diagonal
  },
  
  integrations: [
    tailwind(), 
    sitemap({
      // Forzamos que el sitemap use la URL exacta sin diagonal
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
});