import { Component } from "./core/heropy.js";
import TheHeader from "./components/TheHeader.js";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader();
    const routerView = document.createElement("router-view");

    this.el.append(theHeader.el, routerView);
  }
}
