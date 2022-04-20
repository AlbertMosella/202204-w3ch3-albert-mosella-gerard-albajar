import ComponentConstructor from "./js/components/ComponentConstructor";

const parentElement = document.querySelector(".container");

// eslint-disable-next-line no-new
new ComponentConstructor("div", ".hola", parentElement);
