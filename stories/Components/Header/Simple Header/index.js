import './index.css'

import { createButton } from '../../../Design System/Button/button'
import { createHeaderContainer } from '../components/Container'
import { createHeaderWrapper } from '../components/Wrapper'
import { createHeaderTitle } from '../components/Title'

/* function SimpleHeader({ title }) {
  return (
    <Wrapper>
      <Container>
        <header className="ui-simple-header">
          <Button color="primary-empty" usage="ui-simple-header__btn">
            Upgrade Plan
            <Arrow className="ui-circled-arrow" />
          </Button>
          <Title>{title}</Title>
          <p className="ui-simple-header__subheading">
            You have to keep up the pace to accomplish your goals in time.
          </p>
        </header>
      </Container>
      <Alert alertText="Your user count is at the upper limit. You should upgrade soon." />
    </Wrapper>
  );
} */

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
