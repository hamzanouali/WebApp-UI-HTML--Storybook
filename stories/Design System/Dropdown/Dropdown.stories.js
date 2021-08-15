import { createDropdown } from './Dropdown';

export default {
  title: '2. Design System/Dropdown',
  decorators: [(story) => {
    const html = `
    <div style="background: #f3f5f7; padding: 15px;">
      <div style="max-width: 854px; margin: 100px auto; position: relative;">${story().outerHTML}</div>
    </div>
    `
    const div = document.createElement('div')
    div.innerHTML = html

    return div.firstElementChild
  }]
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createDropdown({ label, ...args });
};

export const dropdown = Template.bind({});
dropdown.args = {
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
  showDropdown: true
};
