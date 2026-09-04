import { cp, mkdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const css = await readFile(path.join(root, 'style.css'), 'utf8');
const forbidden = new RegExp('re' + 'simplifi', 'i');
if (forbidden.test(html + css)) throw new Error('Employer name must be anonymized.');
if (/\[N\]|\[Mon\]|LINKEDIN-SLUG|TODO|PLACEHOLDER/.test(html)) throw new Error('Unfinished content.');

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
for (const [, target] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
  if (target.startsWith('#')) {
    if (!ids.has(target.slice(1))) throw new Error(`Missing anchor: ${target}`);
  } else if (!/^(https?:|mailto:)/.test(target)) {
    await stat(path.join(root, target));
  }
}

await mkdir(path.join(root, 'dist'), { recursive: true });
for (const file of ['index.html', 'style.css', 'favicon.svg', 'assets']) {
  await cp(path.join(root, file), path.join(root, 'dist', file), { recursive: true });
}
console.log('Built static site in dist/. Content and local links checked.');
