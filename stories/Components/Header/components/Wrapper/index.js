import './index.css'

export const createHeaderWrapper = ({ children }) => {
  const html = `<div class="ui-wrapper"></div>`;

  const div = document.createElement('div')
  div.innerHTML = html

  div.firstElementChild.append(children)

  return div.firstElementChild
}
