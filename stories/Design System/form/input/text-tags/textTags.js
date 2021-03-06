import '../../../../assets/Font-Poppins/font.css'
import '../../../../assets/normalization.css'
import '../../../../assets/root.css'
import '../../form.css'
import '../simple-input/input.css'
import './textTags.css'

import '../../../../assets/@yaireo/tagify/dist/tagify.css'
import Tagify from '../../../../assets/@yaireo/tagify/dist/tagify.min.js'

// WARNING! WARNING! Don't import this and don't use it, it's used for Storybook only
import '../../dont.use.this.css'

export const createInput = ({
  label,
  labelSize,
  placeholder,
  status,
  statusMessage
}) => {

  const inputStatus = status !== 'none' ? `ui-form-item-container--${status}` : ''
  const inputStatusMessage = statusMessage && status !== 'none'  ? `<span class="ui-form-item-container__message">${statusMessage}</span>`: ''
  const inputLabel = label ? `<label class="ui-form-item__label" for="input-unique-id-1">${label}</label>` : ''
  const inputLabelSize = labelSize ? `ui-form-item--${labelSize}-label` : ''

  const inputElement = `
  <div class="ui-form-item-container ${inputStatus}">
    <div class="ui-form-item ui-form-item--tags ${inputLabelSize}">
      ${inputLabel}
      <input class="ui-form-item__input" type="text" placeholder="${placeholder}" id="input-unique-id-1">
    </div>
    ${inputStatusMessage}
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = inputElement

  new Tagify(div.firstElementChild.querySelector('.ui-form-item__input'))

  return div.firstElementChild
}