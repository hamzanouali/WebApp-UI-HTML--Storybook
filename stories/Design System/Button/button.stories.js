import { createButton } from './button';

export default {
  title: 'Design System/Button',
  argTypes: {
    text: { control: 'text' },
    type: { 
      control: 'select',
      options: ['primary', 'danger']
    },
    outline: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right']
    },
    icon: { control: 'text' },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  text: 'Add Account',
  type: 'primary',
  outline: false,
  showIcon: false,
  iconPosition: 'left',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"> <path fill="none" d="M0 0h19v19H0z" /> <path fill="currentColor" d="M16.083 11.333h-4.75v4.75H9.75v-4.75H5V9.75h4.75V5h1.583v4.75h4.75z" transform="translate(-1.042 -1.042)" /> </svg>`
};
