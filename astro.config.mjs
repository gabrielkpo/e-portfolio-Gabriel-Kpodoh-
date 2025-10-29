// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// Removed Vercel adapter to allow static builds for GitHub Pages deployment

// https://astro.build/config
export default defineConfig({
  // Use static output for GitHub Pages (produces a static `dist/` folder)
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },

  // No adapter for static output (GitHub Pages will serve the generated `dist/`)
});