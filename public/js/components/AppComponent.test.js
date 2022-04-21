import AppComponent from "./AppComponent";

describe("Given a AppComponent component", () => {
  describe("When it's instantiated", () => {
    test("Then it should create a div container", () => {
      const container = document.createElement("div");
      new AppComponent(container, "div", "container");

      const result = container.querySelector("div");

      expect(result).not.toBeNull();
    });
  });
  describe("When render method it's called", () => {
    test("Then it should return a html node", () => {
      const container = document.createElement("div");
      new AppComponent(container, "div", "container");

      const result = container.innerHTML;

      expect(result).not.toBeNull();
    });
  });
});
