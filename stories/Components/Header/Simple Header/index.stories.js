import { createSimpleHeader } from './index';

export default {
  title: '1. Components/Header/Simple Header',
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createSimpleHeader({ label, ...args });
};

export const simpleHeader = Template.bind({});
simpleHeader.args = {
  title: 'Welcome, Ali 👋'
};
