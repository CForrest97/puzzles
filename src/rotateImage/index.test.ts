import { rotateImage } from ".";

describe("rotateImage", () => {
  test("rotate an empty image", () => {
    const image: number[][] = [];

    const rotatedImage = rotateImage(image);

    expect(rotatedImage).toEqual([]);
  });

  test("rotate an image of size 1", () => {
    const image = [[1]];

    const rotatedImage = rotateImage(image);

    expect(rotatedImage).toEqual([[1]]);
  });

  test("rotate an image of size 2", () => {
    const image = [
      [1, 2],
      [3, 4],
    ];

    const rotatedImage = rotateImage(image);

    expect(rotatedImage).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  test("rotate an image of size 3", () => {
    const image = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const rotatedImage = rotateImage(image);

    expect(rotatedImage).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });
});
