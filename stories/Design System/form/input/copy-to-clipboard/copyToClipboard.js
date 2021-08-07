import '../../../../assets/Font-Poppins/font.css'
import '../../../../assets/normalization.css'
import '../../../../assets/root.css'
import '../../form.css'
import '../simple-input/input.css'
import './copyToClipboard.css'
import setupCopyToClipboardInput from './copyToClipboard.javascript.js'


// WARNING! WARNING! Don't import this and don't use it, it's used for Storybook only
import '../../dont.use.this.css'

export const createInput = ({
  label,
  labelSize,
  value
}) => {

  const inputLabel = label ? `<label class="ui-form-item__label" for="input-unique-id-1">${label}</label>` : ''
  const inputLabelSize = labelSize ? `ui-form-item--${labelSize}-label` : ''

  const inputElement = `
  <div id="copy-to-clipboard" class="ui-form-item ${inputLabelSize} ui-form-item--copy-to-clipboard" tabindex="-1">
    ${inputLabel}
    <div class="ui-form-item__input-icon-group">
      <input class="ui-form-item__input" disabled type="text" value="${value}" id="input-unique-id-1">
      <button class="ui-form-item__copy-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14.924" viewBox="0 0 15 14.924">
          <path id="Tracé_2096" data-name="Tracé 2096"
            d="M11.612,1.818V2.824h1.581v0a1.8,1.8,0,0,1,1.278.534A1.818,1.818,0,0,1,15,4.639h0v8.467h0a1.822,1.822,0,0,1-.531,1.284,1.8,1.8,0,0,1-1.272.53v0h-8v0a1.812,1.812,0,0,1-1.8-1.812h0V12.046H1.807v0A1.812,1.812,0,0,1,0,10.23H0V1.818H0A1.823,1.823,0,0,1,.534.533,1.8,1.8,0,0,1,1.806,0V0h8V0a1.8,1.8,0,0,1,1.278.534,1.818,1.818,0,0,1,.527,1.279h0v0ZM10.241,2.824V1.815h0a.446.446,0,0,0-.438-.439v0h-8v0a.435.435,0,0,0-.307.132.441.441,0,0,0-.13.309h0V10.23h0a.446.446,0,0,0,.438.439v0H3.389V4.642h0a1.823,1.823,0,0,1,.531-1.284A1.8,1.8,0,0,1,5.2,2.827v0h5.045Zm3.387,10.282V4.639h0a.446.446,0,0,0-.438-.439v0h-8v0a.435.435,0,0,0-.307.132.441.441,0,0,0-.13.309h0v8.467h0a.446.446,0,0,0,.438.439v0h8v0a.435.435,0,0,0,.307-.132.441.441,0,0,0,.13-.309h0Z"
            fill="currentColor" fill-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = inputElement

  setupCopyToClipboardInput(div.firstElementChild)

  return div.firstElementChild
}