import { LitElement, html, css } from "lit";

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
      }
    `,
  ];

  static properties = {
    counter: { type: Number },
  };
  constructor() {
    super();
    this.counter = 0;
  }
  render() {
    return html`
      <h2>Contador</h2>
      <span>${this.counter}</span>
      <button @click=${this.increment}>Aumentar</button>
      <button @click=${this.decrement}>Disminuir</button>
    `;
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
customElements.define("eit-counter", EitCounter);
