import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './Avatars.css'

export const createAvatar = ({
  size = 'medium',
  imgURL,
  primaryText,
  secondaryText,
  status = 'none',
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
    <div class="ui-avatar ${avatarSize} ${avatarStatus} ${status === 'edit' ? 'ui-avatar--edit' : ''}">
      <img src="${imgURL}" class="ui-avatar__img">
      <span class="ui-avatar__camera">
        <svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="3.2" />
          <path
            d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
        </svg>
      </span>
      <input type="file" class="ui-avatar__file-input">
    </div>
    ${avatarInfoContainer}
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = avatarHTML
  const avatarElement = div.firstElementChild

  function getBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      callback({ base64: reader.result });
    };
    reader.onerror = function (error) {
      callback({ error: error });
    };
  }

  if(status === 'edit') {
    avatarElement.querySelector('input[type="file"]').addEventListener('change', (event) => {
      getBase64(event.target.files[0], (data) => {
        if (!data.error) {
          avatarElement.querySelector('.ui-avatar__img').setAttribute('src', data.base64);
        } else {
          console.log(data.error);
        }
      });
    })
  }

  return avatarElement
}