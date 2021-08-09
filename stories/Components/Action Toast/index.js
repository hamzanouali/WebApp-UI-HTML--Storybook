import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './index.css'

import { uiActionToast, uiRemoveActionToast, uiCloseActionToast } from './index.javascript'

export const createActionToast = ({
  position,
  headline,
  text,
  primaryText,
  secondaryText
}) => {
  window.uiCloseActionToast = uiCloseActionToast
  window.uiRemoveActionToast = uiRemoveActionToast

  const actionToastElement = `
  <button class="ui-btn ui-btn--primary-outline">Click To Open</button>
  `

  const div = document.createElement('div')
  div.innerHTML = actionToastElement

  div.firstElementChild.addEventListener('click', function() {
    uiActionToast({
      position,
      headline,
      text,
      primaryText,
      secondaryText
    }, (event, actionToast, primaryAction) => {
      if(!primaryAction) {
        uiCloseActionToast(actionToast)
      } else {
        alert('Clicked on confirm')
      }
    })
  })

  return div.firstElementChild
} 