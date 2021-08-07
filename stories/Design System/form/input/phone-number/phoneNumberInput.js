import '../../../../assets/Font-Poppins/font.css'
import '../../../../assets/normalization.css'
import '../../../../assets/root.css'
import '../../../../../public/assets/intl-tel-input/build/css/intlTelInput.min.css'
import intlTelInput from '../../../../../public/assets/intl-tel-input'
import '../../form.css'
import '../simple-input/input.css'
import './phoneNumberInput.css'

// WARNING! WARNING! Don't import this and don't use it, it's used for Storybook only
import '../../dont.use.this.css'


export const createInput = ({
  label,
  labelSize,
  showDialCode,
  status,
  statusMessage
}) => {
  const inputStatus = status !== 'none' ? `ui-form-item-container--${status}` : ''
  const inputStatusMessage = statusMessage && status !== 'none'  ? `<span class="ui-form-item-container__message">${statusMessage}</span>`: ''
  const inputLabel = label ? `<label class="ui-form-item__label" for="input-unique-id-1">${label}</label>` : ''
  const inputLabelSize = labelSize ? `ui-form-item--${labelSize}-label` : ''

  const inputElement = `
  <div id="unique-id-4789" class="ui-form-item-container ui-form-item--phone-number ${inputStatus}">
    <div class="ui-form-item ${inputLabelSize}">
      ${inputLabel}
      <input class="ui-form-item__input" type="tel">
    </div>
    ${inputStatusMessage}
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = inputElement

  intlTelInput(div.querySelector('.ui-form-item__input'), {
    initialCountry: "dz",
    autoPlaceholder: 'aggressive',
    separateDialCode: showDialCode,
    utilsScript: "/assets/intl-tel-input/build/js/utils.js",
  })

  return div.firstElementChild
}