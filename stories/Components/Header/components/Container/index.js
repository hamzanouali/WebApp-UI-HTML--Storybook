import './index.css'

export const createHeaderContainer = ({ children }) => {
  const html = `<div class="ui-container"></div>`;

  const div = document.createElement('div')
  div.innerHTML = html

  if(children.length) {
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if(!element.nodeName.includes('text')) div.firstElementChild.append(element)
    }
  } else {
    div.firstElementChild.append(children)
  }

  return div.firstElementChild
}
