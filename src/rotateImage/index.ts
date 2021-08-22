/* eslint-disable no-param-reassign */

export const rotateImage = (image: number[][]): number[][] => {
  const size = image.length;

  for (let y = 0; y < size / 2; y += 1) {
    for (let x = 0; x < (size - 1) / 2; x += 1) {
      const pos1 = { x, y };
      const pos2 = { x: size - y - 1, y: x };
      const pos3 = { x: size - x - 1, y: size - y - 1 };
      const pos4 = { x: y, y: size - x - 1 };

      const carry = image[pos1.y][pos1.x];

      image[pos1.y][pos1.x] = image[pos4.y][pos4.x];
      image[pos4.y][pos4.x] = image[pos3.y][pos3.x];
      image[pos3.y][pos3.x] = image[pos2.y][pos2.x];
      image[pos2.y][pos2.x] = carry;
    }
  }

  return image;
};
