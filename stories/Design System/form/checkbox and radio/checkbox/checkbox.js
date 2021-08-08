import '../../../../assets/Font-Poppins/font.css'
import '../../../../assets/normalization.css'
import '../../../../assets/root.css'
import '../../form.css'
import './checkbox.css'

// WARNING! WARNING! Don't import this and don't use it, it's used for Storybook only
import '../../dont.use.this.css'

export const createCheckbox = ({
  label
}) => {

  const checkboxElement = `
  <div class="ui-form-item ui-form-item--checkbox">
    <span class="ui-form-item__checkbox">
      <input id="unique-id-65qsd" name="remember-me" type="checkbox" class="ui-form-item__checkbox__input">
      <svg class="ui-form-item__checkbox__svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14" xml:space="preserve">
        <path d="M3,0h8c1.7,0,3,1.3,3,3v8c0,1.7-1.3,3-3,3H3c-1.7,0-3-1.3-3-3V3C0,1.3,1.3,0,3,0z" />
        <path d="M5.5,9.1L3.4,7L2.7,7.7l2.8,2.7l5.9-5.9l-0.7-0.7L5.5,9.1z" />
      </svg>
    </span>
    ${label ? `<label for="unique-id-65qsd" class="ui-form-item__label">${label}</label>` : ``}
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = checkboxElement

  return div.firstElementChild
}