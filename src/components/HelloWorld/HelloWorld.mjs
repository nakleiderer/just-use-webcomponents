const html = String.raw;
const template = document.createElement("template");

template.innerHTML = html`
  <p>Hello, <slot>world</slot>!</p>
`;

class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { HelloWorld };
