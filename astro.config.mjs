import { defineConfig } from 'astro/config';

/*
 * The site is served from the root of careerplusgroup.org on Cloudflare Pages,
 * so `base` is '/'. Cloudflare runs `npm run build` and publishes `dist/`; there
 * is no deploy step in this repo and no second target to keep in sync.
 *
 * `base` still matters. Every internal link goes through `url()` in
 * src/lib/url.ts, which reads BASE_URL from here, so moving the site into a
 * sub-path later is a one-line change rather than a find-and-replace.
 */
export default defineConfig({
  site: 'https://careerplusgroup.org',
  base: '/',
  trailingSlash: 'ignore',
});
