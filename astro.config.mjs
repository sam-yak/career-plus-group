import { defineConfig } from 'astro/config';

// ── Deployment configuration ────────────────────────────────────────────
// GitHub Pages project site:  https://<username>.github.io/career-plus-group
//   site: 'https://<username>.github.io',  base: '/career-plus-group'
//
// Later, on the real domain (careerplusgroup.in):
//   site: 'https://careerplusgroup.in',    base: '/'
// ────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/career-plus-group',
  trailingSlash: 'ignore',
});
