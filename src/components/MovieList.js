import { Component } from "../core/heropy.js";
import movieStore from "../store/movie.js";
import MovieItem from "./MovieItem.js";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });

    movieStore.subscribe("loading", () => {
      this.render();
    });

    movieStore.subscribe("message", () => {
      this.render();
    });
  }

  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /* html */ `
            ${
              movieStore.state.message
                ? `<div class="message">${movieStore.state.message}</div>`
                : `<div class="movies"></div>`
            }
            <div class="the-loader hide"></div>
        `;

    const moviesEl = this.el.querySelector(".movies");
    const loaderEl = this.el.querySelector(".the-loader");

    moviesEl?.append(
      ...movieStore.state.movies.map(
        (movie) =>
          new MovieItem({
            movie,
          }).el
      )
    );

    if (movieStore.state.loading) {
      loaderEl.classList.remove("hide");
    } else {
      loaderEl.classList.add("hide");
    }
  }
}
