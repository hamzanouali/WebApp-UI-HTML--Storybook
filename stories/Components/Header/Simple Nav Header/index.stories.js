import { createSimpleNavHeader } from './index';

export default {
  title: '1. Components/Header/Simple Nav Header',
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createSimpleNavHeader({ label, ...args });
};

export const simpleNavHeader = Template.bind({});
simpleNavHeader.args = {
  title: 'Welcome, Ali 👋'
};