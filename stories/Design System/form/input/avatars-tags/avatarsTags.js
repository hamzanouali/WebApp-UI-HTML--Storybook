import '../../../../assets/Font-Poppins/font.css'
import '../../../../assets/normalization.css'
import '../../../../assets/root.css'
import '../../form.css'
import '../simple-input/input.css'
import '../text-tags/textTags.css'
import './avatarsTags.css'

import setupAvatarsTags from './avatarsTags.javascript'

// WARNING! WARNING! Don't import this and don't use it, it's used for Storybook only
import '../../dont.use.this.css'

export const createInput = ({
  label,
  labelSize,
  placeholder,
  value,
  status,
  statusMessage
}) => {

  const inputStatus = status !== 'none' ? `ui-form-item-container--${status}` : ''
  const inputStatusMessage = statusMessage && status !== 'none'  ? `<span class="ui-form-item-container__message">${statusMessage}</span>`: ''
  const inputLabel = label ? `<label class="ui-form-item__label" for="input-unique-id-1">${label}</label>` : ''
  const inputLabelSize = labelSize ? `ui-form-item--${labelSize}-label` : ''

  const inputElement = `
  <div class="ui-form-item-container ${inputStatus}">
    <div class="ui-form-item ui-form-item--tags ui-form-item--people-tags ${inputLabelSize}">
      ${inputLabel}
      <input class="ui-form-item__input" type="text" placeholder="${placeholder}"
        value="${value}">
    </div>
    ${inputStatusMessage}
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = inputElement

  const peopleList = [
    {
      "value": 1,
      "name": "Justinian Hattersley",
      "avatar": "https://i.pravatar.cc/80?img=1",
      "email": "jhattersley0@ucsd.edu"
    },
    {
      "value": 2,
      "name": "Antons Esson",
      "avatar": "https://i.pravatar.cc/80?img=2",
      "email": "aesson1@ning.com"
    },
    {
      "value": 3,
      "name": "Ardeen Batisse",
      "avatar": "https://i.pravatar.cc/80?img=3",
      "email": "abatisse2@nih.gov"
    },
    {
      "value": 4,
      "name": "Graeme Yellowley",
      "avatar": "https://i.pravatar.cc/80?img=4",
      "email": "gyellowley3@behance.net"
    },
    {
      "value": 5,
      "name": "Dido Wilford",
      "avatar": "https://i.pravatar.cc/80?img=5",
      "email": "dwilford4@jugem.jp"
    }
  ]

  setupAvatarsTags(div.firstElementChild.querySelector('.ui-form-item__input'), {
    tagTextProp: 'name', // very important since a custom template is used with this property as text. allows typing a "value" or a "name" to match input with whitelist
    enforceWhitelist: true,
    skipInvalid: true, // do not remporarily add invalid tags
    dropdown: {
      closeOnSelect: false,
      enabled: 0,
      classname: 'users-list',
      searchKeys: ['name', 'email']  // very important to set by which keys to search for suggesttions when typing
    },
    whitelist: peopleList
  })

  return div.firstElementChild
}