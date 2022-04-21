/* eslint-disable no-new */
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
  describe("When it's instantiated", () => {
    test("Then it should render and h1 element with the text 'My Series' inside", () => {
      const container = document.createElement("div");
      new AppComponent(container, "div", "container");

      const result = container.querySelector("h1").textContent;
      const expectedResult = "My Series";

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it's instantiated", () => {
    test("Then it should render a series list ul", () => {
      const container = document.createElement("div");
      new AppComponent(container, "div", "container");

      const result = container.querySelector(".series-list");

      expect(result).not.toBeNull();
    });
  });
});
