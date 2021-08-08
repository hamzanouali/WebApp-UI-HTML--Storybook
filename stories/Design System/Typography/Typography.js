import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './Typography.css'

export const createTypography = ({}) => {

  const typographyElement = `
  <div>
    <br>
    <h1 class="ui-h1">Example Heading 01</h1>
    <br>
    <h2 class="ui-h2">Example Heading 02</h2>
    <br>
    <h3 class="ui-h3">Example Heading 03 - 04 - 05 - 06</h3>
    <br>
    <p class="ui-paragraph" style="max-width: 400px">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore
      magna aliquyam erat, sed diam voluptua.
    </p>
    <br>
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = typographyElement

  return div.firstElementChild
}