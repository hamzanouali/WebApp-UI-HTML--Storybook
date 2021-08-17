import { createHeaderContainer } from './index';

export default {
  title: '1. Components/Header/Components/Container',
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHeaderContainer({ label, ...args });
};

export const container = Template.bind({});
container.args = {
  children: 'Welcome, Ali 👋'
};
