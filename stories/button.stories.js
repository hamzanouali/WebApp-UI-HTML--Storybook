import { createButton } from './button';

export default {
  title: 'Design-System/Button',
  argTypes: {
    text: { control: 'text' },
    type: { control: 'text' },
    icon: { control: 'text' },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Add Account',
  type: 'primary',
};

export const PrimaryIconLeft = Template.bind({});
PrimaryIconLeft.args = {
  text: 'Add Account',
  type: 'primary',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"> <path fill="none" d="M0 0h19v19H0z" /> <path fill="currentColor" d="M16.083 11.333h-4.75v4.75H9.75v-4.75H5V9.75h4.75V5h1.583v4.75h4.75z" transform="translate(-1.042 -1.042)" /> </svg>`
};

export const PrimaryIconRight = Template.bind({});
PrimaryIconRight.args = {
  text: 'Add Account',
  type: 'primary',
  iconPosition: 'right',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"> <path fill="none" d="M0 0h19v19H0z" /> <path fill="currentColor" d="M16.083 11.333h-4.75v4.75H9.75v-4.75H5V9.75h4.75V5h1.583v4.75h4.75z" transform="translate(-1.042 -1.042)" /> </svg>`
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  text: 'Add Account',
  type: 'primary',
  outline: true
};

export const PrimaryOutlineIconLeft = Template.bind({});
PrimaryOutlineIconLeft.args = {
  text: 'Add Account',
  outline: true,
  type: 'primary',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"> <path fill="none" d="M0 0h19v19H0z" /> <path fill="currentColor" d="M16.083 11.333h-4.75v4.75H9.75v-4.75H5V9.75h4.75V5h1.583v4.75h4.75z" transform="translate(-1.042 -1.042)" /> </svg>`
};

export const PrimaryOutlineIconRight = Template.bind({});
PrimaryOutlineIconRight.args = {
  text: 'Add Account',
  outline: true,
  type: 'primary',
  iconPosition: 'right',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"> <path fill="none" d="M0 0h19v19H0z" /> <path fill="currentColor" d="M16.083 11.333h-4.75v4.75H9.75v-4.75H5V9.75h4.75V5h1.583v4.75h4.75z" transform="translate(-1.042 -1.042)" /> </svg>`
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Delete Account',
  type: 'danger',
};

export const DangerIconLeft = Template.bind({});
DangerIconLeft.args = {
  text: 'Delete Account',
  type: 'danger',
  iconPosition: 'left',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> </svg>`
};

export const DangerIconRight = Template.bind({});
DangerIconRight.args = {
  text: 'Delete Account',
  type: 'danger',
  iconPosition: 'right',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> </svg>`
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  text: 'Delete Account',
  type: 'danger',
  outline: true
};

export const DangerOutlineIconLeft = Template.bind({});
DangerOutlineIconLeft.args = {
  text: 'Delete Account',
  type: 'danger',
  outline: true,
  iconPosition: 'left',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> </svg>`
};

export const DangerOutlineIconRight = Template.bind({});
DangerOutlineIconRight.args = {
  text: 'Delete Account',
  type: 'danger',
  outline: true,
  iconPosition: 'right',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> </svg>`
};
