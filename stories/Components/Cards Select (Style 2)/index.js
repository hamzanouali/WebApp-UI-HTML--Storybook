import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './index.css'

export const createCardsSelect = ({}) => {
  const cardsSelectElement = `
  <div class="ui-cards-select-2">
    <div class="ui-cards-select-2__component-head">
      <h2 class="ui-cards-select-2__heading">
        Who can manage the projects?
      </h2>
      <p class="ui-cards-select-2__paragraph">
        Don’t panic, you can also customize this permissions in the settings.
      </p>
    </div>
    <div class="ui-cards-select-2__options-container">
      <div class="ui-cards-select-2__option">
        <input checked name="ui-cards-select-2" type="radio" class="ui-cards-select-2__option__radio">
        <div class="ui-cards-select-2__radio-card">
          <h4 class="ui-cards-select-2__radio-heading">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
              fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
            </svg>
            <span>
              Everyone
            </span>
          </h4>
          <p class="ui-cards-select-2__radio-paragraph">
            All users can view the projects, but guests can’t access the projects.
          </p>
        </div>
      </div>
      <div class="ui-cards-select-2__option">
        <input name="ui-cards-select-2" type="radio" class="ui-cards-select-2__option__radio">
        <div class="ui-cards-select-2__radio-card">
          <h4 class="ui-cards-select-2__radio-heading">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
              fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12v-1.42zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48z" />
            </svg>
            <span>
              Only Admin’s
            </span>
          </h4>
          <p class="ui-cards-select-2__radio-paragraph">
            Only admin’s can manage or edit everything related to the projects.
          </p>
        </div>
      </div>
      <div class="ui-cards-select-2__option">
        <input name="ui-cards-select-2" type="radio" class="ui-cards-select-2__option__radio">
        <div class="ui-cards-select-2__radio-card">
          <h4 class="ui-cards-select-2__radio-heading">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
              viewBox="0 0 24 24" width="24px" fill="currentColor">
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g />
                <g>
                  <path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z" />
                  <path
                    d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76 C14.09,11.9,14.53,12,15,12z" />
                  <path
                    d="M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z" />
                  <path
                    d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z M15,18H3l0-0.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2V18z" />
                </g>
              </g>
            </svg>
            <span>
              Specific People
            </span>
          </h4>
          <p class="ui-cards-select-2__radio-paragraph">
            Only some specific people can able to see and manage the projects.
          </p>
        </div>
      </div>
    </div>
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = cardsSelectElement

  return div.firstElementChild
} 