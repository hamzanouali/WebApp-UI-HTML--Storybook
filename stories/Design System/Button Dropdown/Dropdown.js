import '../../assets/Font-Poppins/font.css'
import '../../assets/normalization.css'
import '../../assets/root.css'
import './Dropdown.css';

import { createButton }  from '../Button/button'
import { createDropdown } from '../Dropdown/Dropdown'

import popper from '../../assets/@popperjs/core/dist/esm/popper'
import tippy from '../../assets/tippy.js/dist/tippy-bundle.umd.min.js'
import '../../assets/tippy.js/dist/tippy.css'

export const createBtnDropdown = ({
  dropdownListData,
  showDropdown,
  text,
  type,
  outline,
  showIcon,
  iconPosition,
  icon,
  trigger,
  placement,
  hideOnClick,
  interactive,
  offset,
}) => {
  
  const btn = createButton({
    text,
    type,
    outline,
    showIcon,
    iconPosition,
    icon
  })

  const dropdown = createDropdown({
    dropdownListData,
    showDropdown
  })

  const dropdownContainer = `<div class="ui-dropdown-container">${btn.outerHTML}${dropdown.outerHTML}</div>` 

  const div = document.createElement('div')
  div.innerHTML = dropdownContainer

  tippy(div.querySelector('button'), {
    trigger,
    placement,
    hideOnClick,
    interactive,
    offset,
    content: div.querySelector('.ui-dropdown'),
    arrow: false,
    role: 'dropdown',
    appendTo: div.firstElementChild,
  })

  return div.firstElementChild
}