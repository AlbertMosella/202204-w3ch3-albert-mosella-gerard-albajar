import ComponentConstructor from "./js/components/ComponentConstructor.js";

const parentElement = document.querySelector(".container");

// eslint-disable-next-line no-new
new ComponentConstructor("div", ".hola", parentElement);
