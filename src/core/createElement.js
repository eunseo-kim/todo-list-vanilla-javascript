/* Change Virtual DOM to REAL DOM */

export default function createElement(node) {
  const { type, props, children } = node;

  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const element = document.createElement(type);

  Object.entries(props || {})
    .filter(([, value]) => value)
    .forEach(([attribute, value]) => (
      element.setAttribute(attribute, value)
    ));

  const childElements = children.map((child) => createElement(child));

  childElements.forEach((child) => element.appendChild(child));

  return element;
}
