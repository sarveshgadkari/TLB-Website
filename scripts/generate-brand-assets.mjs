import fs from 'node:fs';
import sharp from 'sharp';

const logo = 'public/logo.png';

await sharp(logo)
  .resize(512, 512, { fit: 'contain', background: { r: 7, g: 8, b: 15, alpha: 1 } })
  .png()
  .toFile('src/app/icon.png');

await sharp(logo)
  .resize(180, 180, { fit: 'contain', background: { r: 7, g: 8, b: 15, alpha: 1 } })
  .png()
  .toFile('src/app/apple-icon.png');

const ogSvg = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#07080F"/>
  <circle cx="980" cy="130" r="240" fill="#F0B429" fill-opacity="0.12"/>
  <circle cx="180" cy="520" r="200" fill="#4F9CF9" fill-opacity="0.08"/>
  <rect x="70" y="70" width="1060" height="490" rx="34" fill="#0B0D1A" stroke="rgba(255,255,255,0.10)"/>
  <text x="420" y="220" fill="#F0B429" font-size="22" font-family="Arial, Helvetica, sans-serif" letter-spacing="3.5">TLBISBIG CONSULTING GROUP</text>
  <text x="420" y="320" fill="#FFFFFF" font-size="54" font-family="Arial, Helvetica, sans-serif" font-weight="700">Building Legacies.</text>
  <text x="420" y="390" fill="#FFFFFF" font-size="54" font-family="Arial, Helvetica, sans-serif" font-weight="700">Driving Global Impact.</text>
  <text x="420" y="460" fill="#C8D3E8" font-size="22" font-family="Arial, Helvetica, sans-serif">Enterprise holdings across engineering, agriculture,</text>
  <text x="420" y="492" fill="#C8D3E8" font-size="22" font-family="Arial, Helvetica, sans-serif">technology, and strategic partnerships.</text>
</svg>`);

const logoBuf = await sharp(logo)
  .resize(260, 266, { fit: 'contain', background: { r: 11, g: 13, b: 26, alpha: 1 } })
  .png()
  .toBuffer();

await sharp(ogSvg)
  .png()
  .composite([{ input: logoBuf, left: 110, top: 182 }])
  .toFile('public/og-image.png');

await sharp('public/og-image.png').toFile('src/app/opengraph-image.png');
await sharp('public/og-image.png').toFile('src/app/twitter-image.png');

for (const file of ['public/logo-try1.png', 'public/logo-try2.png']) {
  if (fs.existsSync(file)) fs.unlinkSync(file);
}

const files = [
  'public/logo.png',
  'src/app/icon.png',
  'src/app/apple-icon.png',
  'public/og-image.png',
  'src/app/opengraph-image.png',
  'src/app/twitter-image.png',
];

for (const file of files) {
  const meta = await sharp(file).metadata();
  console.log(file, `${meta.width}x${meta.height}`, fs.statSync(file).size);
}
