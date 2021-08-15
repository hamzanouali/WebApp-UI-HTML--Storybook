import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './index.css'

import { uiSimpleToast, uiRemoveSimpleToast, uiCloseSimpleToast } from './index.javascript'

export const createSimpleToast = ({
  position,
  text,
  buttonText
}) => {
  window.uiCloseSimpleToast = uiCloseSimpleToast
  window.uiRemoveSimpleToast = uiRemoveSimpleToast

  const simpleToastElement = `
  <button class="ui-btn ui-btn--primary-outline">Click To Open</button>
  `

  const div = document.createElement('div')
  div.innerHTML = simpleToastElement

  div.firstElementChild.addEventListener('click', function() {
    uiSimpleToast({
      position,
      text,
      buttonText
    }, (event, simpleToast) => {
      uiCloseSimpleToast(simpleToast)
    })
  })

  return div.firstElementChild
} 