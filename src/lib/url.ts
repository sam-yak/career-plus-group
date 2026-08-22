const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Build an internal link that survives the GitHub Pages sub-path. */
export function url(path: string): string {
  if (!path.startsWith('/')) path = '/' + path;
  return (base + path) || '/';
}
