const html = String.raw;
const template = document.createElement("template");

template.innerHTML = html`
  <style>
    * {
      background-color: blue;
    }
  </style>
`;

function concat(...templates) {
  const result = document.createElement("template");
  const clones = templates.map(template =>
    document.importNode(template.content, true)
  );
  result.content.append(...clones);
  return result;
}

function BackgroundColorMixin(Base) {
  class BackgroundColor extends Base {
    get template() {
      return concat(super.template, template);
    }
  }

  return BackgroundColor;
}

export { BackgroundColorMixin };
