import './index.css'

export const createHeaderNavbar = ({ navItems, showMenu }) => {

  const html = `
  <nav class="ui-top-nav ${showMenu ? 'ui-top-nav--open' : 'ui-top-nav--close'}">
    <button class="ui-top-nav__button">
      Menu
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

  return div.firstElementChild
}
