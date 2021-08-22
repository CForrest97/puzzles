import { rotateImage } from ".";
import { Image } from "./Image";

describe("rotateImage", () => {
  test("rotate an empty image", () => {
    const image: Image = [];

    const rotatedImage = rotateImage(image);

    expect(rotatedImage).toEqual([]);
  });

  test("rotate an image of size 1", () => {
    const image: Image = [[1]];

    const rotatedImage = rotateImage(image);

    expect(rotatedImage).toEqual([[1]]);
  });

  test("rotate an image of size 2", () => {
    const image: Image = [
      [1, 2],
      [3, 4],
    ];

    const rotatedImage = rotateImage(image);

    expect(rotatedImage).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });
});
