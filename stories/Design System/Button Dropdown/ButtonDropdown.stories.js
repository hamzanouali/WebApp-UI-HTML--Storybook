import { createBtnDropdown } from './Dropdown';

export default {
  title: '2. Design System/Button Dropdown',
  /* decorators: [(story) => {
    const html = `
    <div style="background: #f3f5f7; padding: 15px;">
      <div style="max-width: 854px; margin: 100px auto; position: relative;">${story().outerHTML}</div>
    </div>
    `
    const div = document.createElement('div')
    div.innerHTML = html

    return div.firstElementChild
  }] */
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createBtnDropdown({ label, ...args });
};

export const buttonDropdown = Template.bind({});
buttonDropdown.args = {
  text: 'Add Account',
  type: 'primary',
  outline: false,
  showIcon: false,
  iconPosition: 'left',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"> <path fill="none" d="M0 0h19v19H0z" /> <path fill="currentColor" d="M16.083 11.333h-4.75v4.75H9.75v-4.75H5V9.75h4.75V5h1.583v4.75h4.75z" transform="translate(-1.042 -1.042)" /> </svg>`,
  dropdownListData: [
    {
      "text": "Archive Files",
      "link": "#!"
    },
    {
      "text": "Trash Files",
      "link": "#!"
    },
    {
      "text": "Exported Files",
      "link": "#!"
    }
  ],
  showDropdown: true,
  trigger: 'click',
  placement: 'bottom-start',
  hideOnClick: 'toggle',
  interactive: true,
  offset: [0, 0],
};
