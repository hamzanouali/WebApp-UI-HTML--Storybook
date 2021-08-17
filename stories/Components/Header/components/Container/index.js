import './index.css'

export const createHeaderContainer = ({ children }) => {
  const html = `<div class="ui-container"></div>`;

  const div = document.createElement('div')
  div.innerHTML = html

  div.firstElementChild.append(children)

  return div.firstElementChild
}
