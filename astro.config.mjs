// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'lh3.googleusercontent.com' }]
  },
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      cssMinify: true
    }
  }
});