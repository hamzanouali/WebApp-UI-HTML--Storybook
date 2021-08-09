import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './index.css'

import { setupConfigCards } from './index.javascript'

export const createConfigCards = ({}) => {
  const configCardsElement = `
  <div class="ui-config-cards">
    <div class="ui-config-cards__component-head">
      <h2 class="ui-config-cards__heading">
        Connected Apps
      </h2>
      <p class="ui-config-cards__paragraph">
        You can manage and customize your connecte apps in one place.
      </p>
    </div>
    <div class="ui-config-cards__items-container">
      <div class="ui-config-cards__item">
        <div class="ui-config-cards__card">
          <div class="ui-config-cards__card__head">
            <div class="ui-config-cards__card__logo-container">
              <img class="ui-config-cards__card__logo" src="../../images/Jira.svg">
            </div>
            <span class="ui-switch">
              <input type="checkbox" class="ui-switch" id="switch-normal-1">
              <label for="switch-normal-1" class="m-0"></label>
            </span>
          </div>
          <div class="ui-config-cards__card__body">
            <h4 class="ui-config-cards__card__heading">
              JIRA
            </h4>
            <p class="ui-config-cards__card__paragraph">
              The #1 software development Tool used by agile teams.
            </p>
          </div>
        </div>
      </div>
      <div class="ui-config-cards__item">
        <div class="ui-config-cards__card">
          <div class="ui-config-cards__card__head">
            <div class="ui-config-cards__card__logo-container">
              <img class="ui-config-cards__card__logo" src="../../images/airtable.svg">
            </div>
            <span class="ui-switch">
              <input type="checkbox" class="ui-switch" id="switch-normal-3">
              <label for="switch-normal-3" class="m-0"></label>
            </span>
          </div>
          <div class="ui-config-cards__card__body">
            <h4 class="ui-config-cards__card__heading">
              Airtable
            </h4>
            <p class="ui-config-cards__card__paragraph">
              Low-code platform for building collaborative apps.
            </p>
          </div>
        </div>
      </div>
      <div class="ui-config-cards__item">
        <div class="ui-config-cards__card">
          <div class="ui-config-cards__card__head">
            <div class="ui-config-cards__card__logo-container">
              <img class="ui-config-cards__card__logo" src="../../images/Dropbox.svg">
            </div>
            <span class="ui-switch">
              <input type="checkbox" class="ui-switch" id="switch-normal-2">
              <label for="switch-normal-2" class="m-0"></label>
            </span>
          </div>
          <div class="ui-config-cards__card__body">
            <h4 class="ui-config-cards__card__heading">
              Dropbox
            </h4>
            <p class="ui-config-cards__card__paragraph">
              Everything you need for work, all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = configCardsElement

  setTimeout(() => {
    setupConfigCards(div.firstElementChild)
  })

  return div.firstElementChild
} 