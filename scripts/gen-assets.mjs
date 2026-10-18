// prebuild: generate binary assets dari SVG (tidak ikut push ke repo).
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = async (src, dest, w, h) => {
  mkdirSync(dirname(dest), { recursive: true });
  await sharp(src).resize(w, h).png().toFile(dest);
  console.log('gen:', dest);
};

await out(join(root, 'src/assets/favicons/favicon.svg'), join(root, 'src/assets/favicons/apple-touch-icon.png'), 180, 180);
await out(join(root, 'src/assets/favicons/favicon.svg'), join(root, 'src/assets/favicons/favicon.ico'), 64, 64);
await out(join(root, 'src/assets/images/og-infografis-cepat.svg'), join(root, 'src/assets/images/og-infografis-cepat.png'), 1200, 630);
