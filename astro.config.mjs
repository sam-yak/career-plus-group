import { defineConfig } from 'astro/config';

/*
 * ── Deployment targets ──────────────────────────────────────────────────
 *
 * Two places, one codebase. The only real difference is the sub-path:
 *
 *   production  careerplusgroup.org on cPanel, served from the domain root,
 *               so `base` is '/'. This is the default: an unset or unknown
 *               DEPLOY_TARGET builds the live site, never the staging one.
 *
 *   pages       sam-yak.github.io/career-plus-group, kept as a staging mirror
 *               so changes can be seen before they reach the real domain. It
 *               is served from a sub-folder, so `base` carries the repo name.
 *
 * Every internal link goes through `url()` in src/lib/url.ts, which reads
 * BASE_URL from here. That is what makes one build work in both places, and
 * it is why a bare href="/loans" is a bug: it would break on Pages.
 *
 *   npm run build                     → production
 *   DEPLOY_TARGET=pages npm run build → staging (the GitHub Action does this)
 * ────────────────────────────────────────────────────────────────────────
 */
const targets = {
  production: { site: 'https://careerplusgroup.org', base: '/' },
  pages: { site: 'https://sam-yak.github.io', base: '/career-plus-group' },
};

const target = targets[process.env.DEPLOY_TARGET] ?? targets.production;

export default defineConfig({
  site: target.site,
  base: target.base,
  trailingSlash: 'ignore',
});
