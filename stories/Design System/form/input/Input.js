import '../../../assets/Font-Poppins/font.css'
import '../../../assets/normalization.css'
import '../../../assets/root.css'
import '../form.css'
import './input.css'

export const createInput = ({
  label,
  labelSize,
  placeholder,
  showIcon,
  icon,
  status,
  statusMessage
}) => {

  const inputStatus = status !== 'none' ? `ui-form-item-container--${status}` : ''
  const inputStatusMessage = statusMessage ? `<span class="ui-form-item-container__message">${statusMessage}</span>`: ''
  const inputLabel = label ? `<label class="ui-form-item__label" for="input-unique-id-1">${label}</label>` : ''
  const inputLabelSize = labelSize ? `ui-form-item--${labelSize}-label` : ''

  const inputElement = `
  <div class="ui-form-item-container ${inputStatus}">
    <div class="ui-form-item ${inputLabelSize}">
      ${inputLabel}
      ${(() => {
        if(icon && showIcon) {
          return `
          <div class="ui-form-item__input-icon-group">
            <input class="ui-form-item__input" type="text" placeholder="${placeholder}" id="input-unique-id-1">
            <span class="ui-form-item__icon">
              ${icon}
            </span>
          </div>
          `
        } else {
          return `<input class="ui-form-item__input" type="text" placeholder="${placeholder}" id="input-unique-id-1">`
        }
      })()}
    </div>
    ${inputStatusMessage}
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = inputElement

  return div.firstElementChild
}