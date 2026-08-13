// 카카오톡·SNS 공유용 OG 이미지 (로고를 적당한 크기로 중앙 배치)
import sharp from "sharp";

const LOGO = "public/logo.png";
const OUT = "public/og-image.png";
const WIDTH = 1200;
const HEIGHT = 630;
const BG = { r: 13, g: 47, b: 58, alpha: 1 }; // #0D2F3A
const LOGO_MAX_WIDTH = Math.round(WIDTH * 0.42);

const logo = await sharp(LOGO)
  .resize({ width: LOGO_MAX_WIDTH, withoutEnlargement: true })
  .toBuffer();

const { width: lw, height: lh } = await sharp(logo).metadata();
const left = Math.round((WIDTH - lw) / 2);
const top = Math.round((HEIGHT - lh) / 2);

await sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 4,
    background: BG,
  },
})
  .composite([{ input: logo, left, top }])
  .png()
  .toFile(OUT);

console.log(`og-image -> ${OUT} (${WIDTH}x${HEIGHT}, logo ${lw}x${lh})`);
