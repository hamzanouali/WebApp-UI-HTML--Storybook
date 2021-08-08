import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './checkmark.css'

export const createTag = ({
  size,
  filled
}) => {

  const checkmarkSize = size ? `ui-checkmark--${size}` : ``

  const checkmarkElement = `
  <span class="ui-checkmark ${checkmarkSize} ui-checkmark--${filled}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  </span>
  `

  const div = document.createElement('div')
  div.innerHTML = checkmarkElement

  return div.firstElementChild
}