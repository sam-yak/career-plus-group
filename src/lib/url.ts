const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Build an internal link that respects `base` in astro.config.mjs.
 *
 * The site is at the domain root today, so this is currently close to a no-op.
 * It stays because it is the single place link construction happens: if the
 * site ever moves into a sub-path, this function absorbs the change and every
 * link in the project follows. A bare href="/loans" would not.
 */
export function url(path: string): string {
  if (!path.startsWith('/')) path = '/' + path;
  return (base + path) || '/';
}
