import { Component } from "../core/heropy.js";
import aboutStore from "../store/about.js";

export default class TheFooter extends Component {
  constructor(props) {
    super({
      tagName: "footer",
    });
  }

  render() {
    const { GitHub, repository } = aboutStore.state;

    this.el.innerHTML = /* html */ `
        <div>
          <a href="${repository}">GitHub Repository</a>
        </div>
        <div>
          <a href="${GitHub}">
            ${new Date().getFullYear()}
            Wooji
          </a>
        </div>
    `;
  }
}
