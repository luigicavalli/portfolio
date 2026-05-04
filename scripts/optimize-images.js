import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assets    = resolve(__dirname, '../src/assets');

const images = [
  { input: `${assets}/hero.png`, output: `${assets}/hero.webp`, quality: 80 },
];

for (const { input, output, quality } of images) {
  const result = await sharp(input).webp({ quality }).toFile(output);
  console.log(`✓ ${output.split('/').at(-1)} — ${(result.size / 1024).toFixed(1)} KB`);
}
