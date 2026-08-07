// Prerender the whole site to static HTML (SSG). SvelteKit still hydrates into a
// client-routed app on top, so you get real per-page HTML AND SPA navigation.
export const prerender = true;

// GitHub Pages serves /about/index.html, not /about.html — so emit trailing-slash dirs.
export const trailingSlash = 'always';
