import '../../../../assets/Font-Poppins/font.css'
import '../../../../assets/normalization.css'
import '../../../../assets/root.css'
import '../../form.css'
import './formSwitch.css'

// WARNING! WARNING! Don't import this and don't use it, it's used for Storybook only
import '../../dont.use.this.css'

export const createSwitch = ({
  options
}) => {

  const switchElement = `
  <div class="ui-form-item ui-form-item--switch">
    <div class="ui-form-item__radio-switch-btn-container">
      <input checked name="gender" value="${options[0].value}" type="radio" class="ui-form-item__hidden-radio">
      <button class="ui-form-item__radio-switch-btn">${options[0].content}</button>
    </div>
    <div class="ui-form-item__radio-switch-btn-container">
      <input name="gender" value="${options[1].value}" type="radio" class="ui-form-item__hidden-radio">
      <button class="ui-form-item__radio-switch-btn">${options[1].content}</button>
    </div>
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = switchElement

  return div.firstElementChild
}