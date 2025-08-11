import { Component } from "../core/heropy.js";

export default class TheFooter extends Component {
  constructor(props) {
    super({
      tagName: "footer",
    });
  }

  render() {
    this.el.innerHTML = /* html */ `
        <div>
          <a href="https://github.com/wooji-dev/-vanillajs-movie-app">GitHub Repository</a>
        </div>
        <div>
          <a href="https://github.com/wooji-dev">
            ${new Date().getFullYear()}
            Wooji
          </a>
        </div>
    `;
  }
}
