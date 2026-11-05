// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind 4 se integra como plugin de Vite. No usamos adaptador de servidor:
// Astro mantiene la salida estática por defecto, adecuada para esta landing.
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
