import intlTelInput from '../../../../../public/assets/intl-tel-input'

function setupSelectCountry(element, options) {
  var countrySelectInput = element.querySelector('.ui-form-item__input')
  intlTelInput(countrySelectInput, options)
  var iti = window.intlTelInputGlobals.getInstance(countrySelectInput)
  countrySelectInput.value = iti.getSelectedCountryData().name
  countrySelectInput.addEventListener("focus", function () {
    countrySelectInput.blur()
  })
  countrySelectInput.addEventListener("countrychange", function () {
    countrySelectInput.value = iti.getSelectedCountryData().name
    countrySelectInput.blur()
  })
  countrySelectInput.addEventListener('open:countrydropdown', function (e) {
    document.querySelector('.iti__country-list').classList.add('ui-country-select__country-list')
  })
}

export default setupSelectCountry
