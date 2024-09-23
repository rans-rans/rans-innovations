import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  preprocess: vitePreprocess()
}
