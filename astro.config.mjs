import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

const isBuild = process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: isBuild ? cloudflare({ imageService: 'passthrough' }) : undefined,

  vite: {
    plugins: [tailwindcss()]
  }
});
