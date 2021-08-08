import '../../../../assets/Font-Poppins/font.css'
import '../../../../assets/normalization.css'
import '../../../../assets/root.css'
import '../../form.css'
import './OnOffSwitch.css'

// WARNING! WARNING! Don't import this and don't use it, it's used for Storybook only
import '../../dont.use.this.css'

export const createSwitch = ({}) => {

  const switchElement = `
  <span class="ui-switch">
    <input class="ui-switch" type="checkbox" id="switch-unique-id-5ez81">
    <label for="switch-unique-id-5ez81"></label>
  </span>
  `

  const div = document.createElement('div')
  div.innerHTML = switchElement

  return div.firstElementChild
}
