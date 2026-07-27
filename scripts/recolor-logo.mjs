// 로고 배경을 브랜드 Deep Teal(#124252)과 통일
import sharp from "sharp";

const SRC = process.argv[2] ?? "public/logo.png";
const OUT = process.argv[3] ?? "public/logo.png";

const BRAND = { r: 13, g: 47, b: 58 }; // #0D2F3A

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;

  // 밝은 영역(로고 텍스트·심볼)은 유지, 어두운 배경만 브랜드색으로 교체
  if (lum < 145) {
    data[i] = BRAND.r;
    data[i + 1] = BRAND.g;
    data[i + 2] = BRAND.b;
    data[i + 3] = 255;
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(OUT);

console.log(`recolored logo -> ${OUT} (${info.width}x${info.height}) bg=#0D2F3A`);
