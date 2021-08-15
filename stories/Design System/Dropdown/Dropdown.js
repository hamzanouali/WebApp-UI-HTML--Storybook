import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './Dropdown.css';

export const createDropdown = ({
  dropdownListData,
  showDropdown
}) => {
  const dropdownElement = `
    <ul class="${`ui-dropdown ${showDropdown ? 'ui-dropdown--open' : ''}`}">
      ${dropdownListData.map(({ text, link }, index) => {
        return `
          <li key=${index} class="ui-dropdown-item">
            <a class="ui-dropdown-link" href="${link}">
              ${text}
            </a>
          </li>
        `;
      }).join('')}
    </ul>
  `;

  const div = document.createElement('div')
  div.innerHTML = dropdownElement

  return div.firstElementChild
}