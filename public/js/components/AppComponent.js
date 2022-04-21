/* eslint-disable no-new */
import Component from "./Component.js";
import SerieComponent from "./SerieComponent.js";

class AppComponent extends Component {
  series;
  constructor(parentElement, series) {
    super(parentElement, "div", "container");
    this.series = series;
    this.render();
    this.showMySerie();
  }

  render() {
    this.element.innerHTML = `<header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
              
            </ul>
          </section>
          <section class="series-watched">
            
          </section>
        </section>
      </main>`;
  }

  showMySerie() {
    const mySeries = document.querySelector(".series-list");

    this.series.forEach((serie) => {
      new SerieComponent(mySeries, { ...serie });
    });
  }
}

export default AppComponent;
