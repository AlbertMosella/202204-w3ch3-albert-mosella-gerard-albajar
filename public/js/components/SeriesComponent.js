import Component from "../Component/Component.js";
import SerieComponent from "../SerieComponent/SerieComponent.js";

class SeriesComponent extends Component {
  series;

  constructor(parentElement, className, seriesFiltered, watched, series) {
    super(parentElement, "section", className);
    this.series = series;
    this.seriesFiltered = seriesFiltered;
    this.render(seriesFiltered, watched, series);
  }

  render(seriesFiltered, watched) {
    this.element.innerHTML = `
            ${
              !watched
                ? `<h3 class="subsection-title">Pending series</h3>
            <p class="info">You have ${seriesFiltered.length} series pending to watch</p>
            <ul class="series-list">
            </ul>`
                : `<h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched ${seriesFiltered.length} series</p>
            <ul class="series-list series-list--watched"></ul>`
            }
            
    `;

    const seriesPendingUnorderedList = document.querySelector(".series-list");
    const seriesWatchedUnorderedList = document.querySelector(
      ".series-list--watched"
    );

    seriesFiltered.forEach((serie) => {
      if (watched) {
        new SerieComponent(seriesWatchedUnorderedList, serie);
      }
      if (!watched) {
        new SerieComponent(seriesPendingUnorderedList, serie);
      }
    });
  }
}

export default SeriesComponent;
