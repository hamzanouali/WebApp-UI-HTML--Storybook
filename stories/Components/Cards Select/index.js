import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './index.css'

export const createCardsSelect = ({}) => {
  const cardsSelectElement = `
  <div class="ui-cards-select">
    <h2 class="ui-cards-select__heading">
      What sort of project would you like developed?
    </h2>
    <p class="ui-cards-select__paragraph">
      Choose what you want to create today.
    </p>
    <div class="ui-cards-select__options-container">
      <div class="ui-cards-select__option">
        <input checked name="ui-cards-select" type="radio" class="ui-cards-select__option__radio">
        <div class="ui-cards-select__radio-card">
          <h4 class="ui-cards-select__radio-heading">
            Mobile Application
          </h4>
          <p class="ui-cards-select__radio-paragraph">
            Build the full UI for your app.
          </p>
          <div class="ui-cards-select__radio-image-container">
            <img src="/images/P1.png" class="ui-cards-select__radio-image">
          </div>
          <svg class="ui-cards-select__check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
          </svg>
        </div>
      </div>
      <div class="ui-cards-select__option">
        <input name="ui-cards-select" type="radio" class="ui-cards-select__option__radio">
        <div class="ui-cards-select__radio-card">
          <h4 class="ui-cards-select__radio-heading">
            Web Application
          </h4>
          <p class="ui-cards-select__radio-paragraph">
            Build the full UI for your app.
          </p>
          <div class="ui-cards-select__radio-image-container">
            <img src="/images/P2.png" class="ui-cards-select__radio-image">
          </div>
          <svg class="ui-cards-select__check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
          </svg>
        </div>
      </div>
      <div class="ui-cards-select__option">
        <input name="ui-cards-select" type="radio" class="ui-cards-select__option__radio">
        <div class="ui-cards-select__radio-card">
          <h4 class="ui-cards-select__radio-heading">
            Landing Pages
          </h4>
          <p class="ui-cards-select__radio-paragraph">
            Build the full UI for your app.
          </p>
          <div class="ui-cards-select__radio-image-container">
            <img src="/images/P3.png" class="ui-cards-select__radio-image">
          </div>
          <svg class="ui-cards-select__check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = cardsSelectElement

  return div.firstElementChild
} 