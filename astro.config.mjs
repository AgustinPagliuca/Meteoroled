import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agustinpagliuca.github.io',
  base: '/Meteoroled',
  devToolbar: {
    enabled: false
  },
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true
    }
  }
});
