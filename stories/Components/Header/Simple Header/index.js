import './index.css'

import { createButton } from '../../../Design System/Button/button'
import { createHeaderContainer } from '../components/Container'
import { createHeaderWrapper } from '../components/Wrapper'
import { createHeaderTitle } from '../components/Title'

export const createSimpleHeader = ({ title }) => {
  const headerTitle = createHeaderTitle({ title });
  const headerButton = createButton({
    type: 'primary',
    outline: true,
    text: 'Upgrade Plan'
  })

  const html = `
  <header class="ui-simple-header">
    ${headerButton.outerHTML}
    ${headerTitle.outerHTML}
    <p class="ui-simple-header__subheading">
      You have to keep up the pace to accomplish your goals in time.
    </p>
  </header>
  `;

  const div = document.createElement('div')
  div.innerHTML = html

  const headerContainer = createHeaderContainer({ children: div.firstElementChild });
  const headerWrapper = createHeaderWrapper({ children: headerContainer });

  const div2 = document.createElement('div')
  div2.innerHTML = headerWrapper.outerHTML

  return div2.firstElementChild
}
