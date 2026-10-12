// Generează site-ul static în ./dist. Fără dependențe: `node build.mjs`.
//
// Variabile de mediu opționale:
//   BASE_PATH – calea la care e publicat site-ul (ex. „/agapecenter/” pe GitHub Pages,
//               „/” pe un domeniu propriu). Folosită doar de pagina 404.
//   SITE_URL  – adresa completă a site-ului, pentru link-urile Open Graph.

import { cp, mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'src');
const dist = join(root, 'dist');
// Construim într-un director temporar și îl mutăm la final, ca dist/ să fie mereu complet.
const out = join(root, `.dist-tmp-${process.pid}`);

const { therapists } = await import('./src/data/therapists.mjs');
const { renderHome } = await import('./src/templates/home.mjs');
const { renderTherapist } = await import('./src/templates/therapist.mjs');
const { renderNotFound } = await import('./src/templates/notfound.mjs');

let basePath = process.env.BASE_PATH || '/';
if (!basePath.endsWith('/')) basePath += '/';

await rm(out, { recursive: true, force: true });
await mkdir(join(out, 'assets/css'), { recursive: true });
await mkdir(join(out, 'assets/js'), { recursive: true });

await cp(join(src, 'assets'), join(out, 'assets'), { recursive: true });
await cp(join(src, 'js'), join(out, 'assets/js'), { recursive: true });

const css = (await readFile(join(src, 'css/lenis.css'), 'utf8')) + '\n' + (await readFile(join(src, 'css/styles.css'), 'utf8'));
await writeFile(join(out, 'assets/css/styles.css'), css);

const js = await readFile(join(src, 'js/main.js'), 'utf8');
const assetsVersion = createHash('sha1').update(css).update(js).digest('hex').slice(0, 8);

const write = async (path, html) => {
  await mkdir(dirname(join(out, path)), { recursive: true });
  await writeFile(join(out, path), html);
};

await write('index.html', renderHome({ assetsVersion }));
for (const t of therapists) await write(`${t.slug}/index.html`, renderTherapist(t, { assetsVersion }));
await write('404.html', renderNotFound({ assetsVersion, basePath }));
await writeFile(join(out, '.nojekyll'), '');
await writeFile(join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n');

await rm(dist, { recursive: true, force: true });
await rename(out, dist);

console.log(`✓ Site generat în dist/ (${therapists.length + 2} pagini, assets v${assetsVersion})`);
