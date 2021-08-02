import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './Avatars.css'

export const createAvatar = ({
  size = 'medium',
  imgURL,
  primaryText,
  secondaryText,
  status
}) => {
  const avatarSize = size ? `ui-avatar--${size}` : ``
  const avatarStatus = status && status !== 'none' ? `ui-avatar--${status}` : ``

  let avatarInfoContainer = ''

  if(primaryText && !secondaryText) {
    avatarInfoContainer = `
    <div class="ui-avatar-info__text-container">
      <span class="ui-avatar-info__primary-text">${primaryText}</span>
    </div>`
  } else if(!primaryText && secondaryText) {
    avatarInfoContainer = `
    <div class="ui-avatar-info__text-container">
      <span class="ui-avatar-info__secondary-text">${secondaryText}</span>
    </div>`
  } else if(primaryText && secondaryText) {
    avatarInfoContainer = `
    <div class="ui-avatar-info__text-container">
      <span class="ui-avatar-info__primary-text">${primaryText}</span>
      <span class="ui-avatar-info__secondary-text">${secondaryText}</span>
    </div>`
  }


  const avatarHTML = `
  <div class="ui-avatar-info">
    <div class="ui-avatar ${avatarSize} ${avatarStatus}">
      <img src="${imgURL}" class="ui-avatar__img">
    </div>
    ${avatarInfoContainer}
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = avatarHTML

  return div.firstElementChild
}