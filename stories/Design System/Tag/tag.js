import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './tag.css'

export const createTag = ({
  text,
  outlined
}) => {

  const tagOutline = outlined ? `ui-tag--outline` : ``

  const tagElement = `
  <span class="ui-tag ${tagOutline}">
    ${text}
  </span>
  `

  const div = document.createElement('div')
  div.innerHTML = tagElement

  return div.firstElementChild
}