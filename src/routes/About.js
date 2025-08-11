import { Component } from "../core/heropy.js";
import aboutStore from "../store/about.js";

export default class About extends Component {
  render() {
    const { photo, name, email, notion, GitHub } = aboutStore.state;
    this.el.classList.add("container", "about");
    this.el.innerHTML = /* html */ `
			<div
        style="background-image : url(${photo})"
        class="photo"></div>
      <p class='name'>${name}</p>
      <p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" 
          target="_blank">
          ${email}
        </a>
      </p>
      <p><a href="${GitHub}" target="_blank">GitHub</a></p>
      <p><a href="${notion}" target="_blank">notion</a></p>
		`;
  }
}
