import Component from "./Component";

class CardComponent extends Component {
  constructor(parentElement, { name, creator, year, poster }) {
    super(parentElement, "li", "serie");
    this.seriesName = name;
    this.seriesCreator = creator;
    this.seriesYear = year;
    this.seriesPoster = poster;
    this.render();
  }

  render() {
    this.element.innerHTML = `
                <img
                  class="serie__poster"
                  src="${this.seriesPoster}"
                  alt="The Sopranos poster"
                />
                <h4 class="serie__title">${this.seriesName}</h4>
                <p class="serie__info">${this.seriesCreator}(${this.seriesYear})</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>          
  `;
  }
}

export default CardComponent;
