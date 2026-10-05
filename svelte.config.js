import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),   // prerenders every page to static files for GitHub Pages
        // Custom domain (or username.github.io) → base stays empty.
        // Project pages (user.github.io/repo) → set base to '/repo' in production:
        // paths: { base: process.env.NODE_ENV === 'production' ? '/your-repo' : '' },
    },
};

export default config;
