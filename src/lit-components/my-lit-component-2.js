import { LitElement, html } from "lit";

export class MyLitComponent2 extends LitElement {
  render() {
    return html` <h1>My Lit Component 2</h1> `;
  }
}

customElements.define("my-lit-component-2", MyLitComponent2);
