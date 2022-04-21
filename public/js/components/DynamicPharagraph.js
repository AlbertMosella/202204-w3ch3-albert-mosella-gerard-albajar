import Component from "./Component.js";

class DynamicPharagraph extends Component {
  series;
  constructor(parentElement, series) {
    super(parentElement, "div", "title");
    this.series = series;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <h3 class="subsection-title">Pending series</h3>
    <p class="info">You have 5 series pending to watch</p>`;
  }
}

export default DynamicPharagraph;
