/* export function setupConfigCards(element) {
  element.querySelectorAll('input.ui-switch').forEach(function(switchInput) {
    const switchCard = switchInput.closest('.ui-config-cards__card')
    function updateSwitchCardInputClass() {
      if (switchInput.checked) {
        switchCard.classList.add('ui-config-cards__card--active')
      } else {
        switchCard.classList.remove('ui-config-cards__card--active')
      }
    }
    console.log('switchInput::: ', switchInput)
    switchInput.addEventListener('change', updateSwitchCardInputClass)
  })
} */

export function setupConfigCards(element) {
  document.querySelectorAll('.ui-config-cards__card input.ui-switch').forEach(function (switchInput) {
    var switchCard = switchInput.closest('.ui-config-cards__card')
    switchInput.onchange = function (event) {
      if (switchInput.checked) {
        switchCard.classList.add('ui-config-cards__card--active')
      } else {
        switchCard.classList.remove('ui-config-cards__card--active')
      }
    }
  })
}