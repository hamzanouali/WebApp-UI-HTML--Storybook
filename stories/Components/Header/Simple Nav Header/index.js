import { createButton } from '../../../Design System/Button/button'
import { createHeaderContainer } from '../components/Container'
import { createHeaderWrapper } from '../components/Wrapper'
import { createHeaderTitle } from '../components/Title'
import { createHeaderNavbar } from '../components/Navbar'

export const createSimpleNavHeader = ({ title }) => {
  const headerTitle = createHeaderTitle({ title, flexOrder: true });
  const headerButton = createButton({
    type: 'primary',
    outline: true,
    text: 'Upgrade Plan'
  })
  const headerNavbar = createHeaderNavbar({
    navItems: [
      { label: 'analytics', link: '#analytics' },
      { label: 'plans', link: '#plans' },
      { label: 'user overview', link: '#user-overview' },
      { label: 'invoices', link: '#invoices' },
      { label: 'payment details', link: '#payment-details' },
      { label: 'billing address', link: '#billing-address' },
    ]
  })

  const html = `
  <header class="ui-long-nav">
    <div class="ui-long-nav__header">
      ${headerButton.outerHTML}
      ${headerTitle.outerHTML}
    </div>
    ${headerNavbar.outerHTML}
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
