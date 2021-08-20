import './index.css'

import { createButton } from '../../../Design System/Button/button'
import { createHeaderContainer } from '../components/Container'
import { createHeaderWrapper } from '../components/Wrapper'
import { createHeaderTitle } from '../components/Title'
import { createHeaderNavbar } from '../components/Navbar'
import { createHeaderSearchBar } from '../components/Search Bar'

export const createHeaderNavSearch = ({ title, showMenu, navItems }) => {
  const headerTitle = createHeaderTitle({ title, flexOrder: true });
  const headerButton = createButton({
    type: 'primary',
    outline: true,
    text: 'Upgrade Plan'
  })
  const headerNavbar = createHeaderNavbar({
    showMenu,
    navItems
  })
  const searchBar = createHeaderSearchBar()

  const html = `
  <div class="ui-long-nav">
    <div class="ui-long-nav__header">
      ${headerButton.outerHTML}
      ${headerTitle.outerHTML}
    </div>
    ${headerNavbar.outerHTML}
  </div>
  `;

  const div = document.createElement('div')
  div.innerHTML = html

  const headerContainer = createHeaderContainer({ children: div.firstElementChild });

  const htmlInsideWrapper = `
  ${headerContainer.outerHTML}
  <hr class="ui-top-nav__divider" />
  ${searchBar.outerHTML}
  `

  const div2 = document.createElement('div')
  div2.innerHTML = htmlInsideWrapper

  const headerWrapper = createHeaderWrapper({ children: div2.childNodes });

  const div3 = document.createElement('div')
  div3.innerHTML = headerWrapper.outerHTML

  return div3.firstElementChild
}
