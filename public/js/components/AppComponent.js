/* eslint-disable no-new */
import Component from "./Component.js";
import DynamicPharagraph from "./DynamicPharagraph.js";
import SerieComponent from "./SerieComponent.js";

class AppComponent extends Component {
  series;
  constructor(parentElement, series) {
    super(parentElement, "div", "container");
    this.series = series;
    this.render();
    this.dynamicPharagraph();
    this.watchedSeries();
    this.dynamicPharagraph2();
    this.unWatchedSeries();
  }

  render() {
    this.element.innerHTML = `<header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
              
            </ul>
          </section>
          <h2 class="section-title-2"></h2>
          <section class="series-watched">

            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list-2">

            </ul>
          </section>
        </section>
      </main>`;
  }

  dynamicPharagraph() {
    const myTitle = document.querySelector(".section-title");
    new DynamicPharagraph(myTitle, this.series);
  }

  dynamicPharagraph2() {
    const myTitle = document.querySelector(".section-title-2");
    new DynamicPharagraph(myTitle, this.series);
  }

  unWatchedSeries() {
    const mySeries = document.querySelector(".series-list");

    this.series.forEach((serie) => {
      new SerieComponent(mySeries, { ...serie });
    });
  }

  watchedSeries() {
    const myUnwatchedSeries = document.querySelector(".series-list-2");

    this.series.forEach((serie) => {
      new SerieComponent(myUnwatchedSeries, { ...serie });
    });
  }
}

export default AppComponent;
