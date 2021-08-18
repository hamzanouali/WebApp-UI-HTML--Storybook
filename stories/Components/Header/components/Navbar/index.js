import './index.css'

export const createHeaderNavbar = ({ navItems, showMenu }) => {

  window.toggleMenu = showMenu

  const html = `
  <nav class="ui-top-nav ${window.toggleMenu ? 'ui-top-nav--open' : 'ui-top-nav--close'}">
    <button onclick="toggle(event)" class="ui-top-nav__button">
      Menu
      <img class="ui-top-nav__button__icon" src="${window.toggleMenu ? `/images/Close.svg` : `/images/Menu.svg`}" />
    </button>
    <ul class="ui-top-nav__list">
      ${navItems.map((navItem) => (
        `
        <li class="ui-top-nav__item">
          <a href="${navItem.link}" class="ui-top-nav__link">
            ${navItem.label}
          </a>
        </li>
        `
      )).join('')}
    </ul>
  </nav>
  `

  const div = document.createElement('div')
  div.innerHTML = html

  window.toggle = (event) => {
    toggleMenu = !toggleMenu
  
    if(!toggleMenu) {
      document.querySelector('.ui-top-nav').classList.replace('ui-top-nav--close', 'ui-top-nav--open')
    } else {
      document.querySelector('.ui-top-nav').classList.replace('ui-top-nav--open', 'ui-top-nav--close')
    }
  }

  return div.firstElementChild
}
