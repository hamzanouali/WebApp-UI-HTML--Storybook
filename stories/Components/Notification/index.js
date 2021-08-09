import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './index.css'

import { uiNotify, uiRemoveNotification, uiCloseNotification } from './index.javascript'

export const createNotification = ({
  type,
  position,
  headline,
  text
}) => {
  window.uiCloseNotification = uiCloseNotification
  window.uiRemoveNotification = uiRemoveNotification

  const notificationElement = `
  <button class="ui-btn ui-btn--primary-outline">Click To Open</button>
  `

  const div = document.createElement('div')
  div.innerHTML = notificationElement

  div.firstElementChild.addEventListener('click', function() {
    uiNotify({
      type,
      position,
      headline,
      text
    })
  })

  return div.firstElementChild
} 