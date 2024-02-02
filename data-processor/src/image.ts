import jimp from "jimp";

const COLOR_GRAY = 0x555555ff;
const COLOR_TRANSPARENT = 0xffffff00;

export async function removeImageBackground(base64: string) {
  const imageBuffer = Buffer.from(
    base64.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  const img = await jimp.read(imageBuffer);

  img.grayscale().opacity(1);

  img.scan(0, 0, img.bitmap.width, img.bitmap.height, (x, y) => {
    if (img.getPixelColor(x, y) > COLOR_GRAY) {
      img.setPixelColor(COLOR_TRANSPARENT, x, y);
    }
  });

  return img.getBufferAsync(jimp.MIME_PNG);
}
