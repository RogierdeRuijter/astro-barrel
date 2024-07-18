import { LitElement, html } from "lit";

export class MyLitComponent extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define("my-lit-component", MyLitComponent);
