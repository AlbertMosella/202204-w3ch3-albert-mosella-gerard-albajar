/* eslint-disable no-new */
import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When it's instantiated", () => {
    test("Then it should create a div container", () => {
      const container = document.createElement("div");
      new Component(container, "div", "");

      const result = container.querySelector("div");

      expect(result).not.toBeNull();
    });
  });
});
