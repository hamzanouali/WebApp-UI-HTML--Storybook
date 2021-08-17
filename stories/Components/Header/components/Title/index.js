import './index.css'

export const createHeaderTitle = ({ title, flexOrder }) => {
  const html = `<h1 class="${`ui-title ${flexOrder ? 'ui-flex-order' : ''}`}">${title}</h1>`;

  const div = document.createElement('div')
  div.innerHTML = html

  return div.firstElementChild
}
