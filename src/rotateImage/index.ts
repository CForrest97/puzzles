import { Image } from "./Image";

export const rotateImage = (image: Image): Image => {
  const size = image.length;

  const rotatedImage = Array.from({ length: size }).map(() =>
    Array.from({ length: size }).map(() => -1)
  );

  image.forEach((row, y) => {
    row.forEach((_, x) => {
      rotatedImage[x][size - y - 1] = image[y][x];
    });
  });

  return rotatedImage;
};
