import Component from "./Component.js";

class SerieComponent extends Component {
  name;
  creator;
  year;
  poster;

  constructor(parentElement, { name, creator, year, poster }) {
    super(parentElement, "li", "serie");
    this.name = name;
    this.creator = creator;
    this.year = year;
    this.poster = poster;
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <img
        class="serie__poster"
        src="${this.poster}"
        alt="${this.name} poster"
      />
      <h4 class="serie__title">${this.name}</h4>
      <p class="serie__info">${this.creator}(${this.year})</p>
      `;
  }
}

export default SerieComponent;
