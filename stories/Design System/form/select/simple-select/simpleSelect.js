import '../../../../assets/Font-Poppins/font.css'
import '../../../../assets/normalization.css'
import '../../../../assets/root.css'
import '../../form.css'
import './simpleSelect.css'

// WARNING! WARNING! Don't import this and don't use it, it's used for Storybook only
import '../../dont.use.this.css'

export const createSelect = ({
  label,
  labelSize,
  placeholder,
  list,
  showIcon,
  icon,
  status,
  statusMessage
}) => {

  const inputStatus = status !== 'none' ? `ui-form-item-container--${status}` : ''
  const inputStatusMessage = statusMessage && status !== 'none'  ? `<span class="ui-form-item-container__message">${statusMessage}</span>`: ''
  const inputLabel = label ? `<label class="ui-form-item__label" for="input-unique-id-1">${label}</label>` : ''
  const inputLabelSize = labelSize ? `ui-form-item--${labelSize}-label` : ''

  let selectIcon = ``

  if(showIcon && icon) {
    selectIcon = `<span class="ui-form-item__icon">${icon}</span>`
  }

  const inputElement = `
  <div class="ui-form-item-container ${inputStatus}">
    <div class="ui-form-item ui-form-item--select ${inputLabelSize}">
      ${inputLabel}
      <div class="ui-form-item__select-icon-group ${showIcon && icon && (() => `ui-form-item__select-icon-group--show-icon`)()}">
        ${selectIcon}
        <select class="ui-form-item__select">
          <option disabled selected>${placeholder}</option>
          ${(() => {
            let html = ``
            list.forEach(value => {
              html += `<option value="${value}">${value}</option>`
            })

            return html
          })()}
        </select>
        <span class="ui-form-item__dropdown-icon">
          <svg width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" xml:space="preserve">
            <path
              d="M15.9,9.3L12,13.2L8.1,9.3c-0.4-0.4-1-0.4-1.4,0l0,0c-0.4,0.4-0.4,1,0,1.4l5,5c0.2,0.2,0.5,0.2,0.6,0l5-5  c0.4-0.4,0.4-1,0-1.4l0,0C16.9,8.9,16.3,8.9,15.9,9.3z" />
          </svg>
        </span>
      </div>
    </div>
    ${inputStatusMessage}
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = inputElement

  return div.firstElementChild
}