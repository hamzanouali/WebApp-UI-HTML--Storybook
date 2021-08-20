import './index.css'

export const createHeaderWrapper = ({ children }) => {
  const html = `<div class="ui-wrapper"></div>`;

  const div = document.createElement('div')
  div.innerHTML = html

  console.log(children)
  console.log(children.length)
  if(children.length) {
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      div.firstElementChild.innerHTML += element.outerHTML
    }
  } else {
    div.firstElementChild.appendChild(children)
  }

  return div.firstElementChild
}
