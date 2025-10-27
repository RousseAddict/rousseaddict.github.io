import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rousseaddict.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});