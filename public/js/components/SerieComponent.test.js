/* eslint-disable no-new */
import SerieComponent from "./SerieComponent.js";

describe("Given a SerieComponent component", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });
  describe("When it's instantiated with 'The Soprano'", () => {
    test("Then it should render and h4 element with 'The Soprano' text inside", () => {
      const name = "The Soprano";
      new SerieComponent(container, { name });

      const result = container.querySelector("h4").textContent;
      const expectedResult = "The Soprano";

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it's instantiated with 'The Soprano' name and the picture of the serie", () => {
    test("Then it should render a li element with the image of the indicated url", () => {
      const imageUrl =
        "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
      const name = "The Soprano";
      new SerieComponent(container, { name, picture: imageUrl });
      const image = container.querySelector("li img");

      expect(image.src).toBe(imageUrl);
    });
  });
});
