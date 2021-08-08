import '../../../../assets/Font-Poppins/font.css'
import '../../../../assets/normalization.css'
import '../../../../assets/root.css'
import '../../form.css'
import './radio.css'

// WARNING! WARNING! Don't import this and don't use it, it's used for Storybook only
import '../../dont.use.this.css'

export const createRadio = ({
  label
}) => {

  const radioElement = `
  <div class="ui-form-item ui-form-item--radio">
    <span class="ui-form-item__radio">
      <input id="unique-id-65qsd" type="radio" class="ui-form-item__radio__input">
      <svg class="ui-form-item__radio__svg" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 14 14" xml:space="preserve">
        <circle cx="7" cy="7" r="7" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    </span>
    ${label ? `<label for="unique-id-65qsd" class="ui-form-item__label">${label}</label>` : ``}
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = radioElement

  return div.firstElementChild
}