import { LitElement, html, css } from "lit";

export class headerComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem 2rem;
        font-size: 1.8rem;
        flex-wrap: wrap;
        position: fixed;
        background-color: black;
        color: white;
        margin: 0;
      }
      header {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
      }

      ul {
        display: flex;
        gap: 5rem;
        justify-content: flex-start;
        align-items: center;
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: white;
      }
    `,
  ];

  render() {
    return html`
      <header>
        <span>SofiDev</span>
        <nav>
          <ul>
            <li><a href="">about</a></li>
            <li><a href="">portfolio</a></li>
            <li><a href="">skills</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
customElements.define("header-component", headerComponent);
