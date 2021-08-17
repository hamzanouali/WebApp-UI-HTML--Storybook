import { createHeaderWrapper } from './index';

export default {
  title: '1. Components/Header/Components/Wrapper',
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHeaderWrapper({ label, ...args });
};

export const wrapper = Template.bind({});

const children = document.createElement('button')
children.textContent = 'This is a button'

wrapper.args = {
  children
};
