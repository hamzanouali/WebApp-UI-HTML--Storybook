import { createHeaderTitle } from './index';

export default {
  title: '1. Components/Header/Components/Title',
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHeaderTitle({ label, ...args });
};

export const title = Template.bind({});
title.args = {
  title: 'Welcome, Ali 👋'
};
