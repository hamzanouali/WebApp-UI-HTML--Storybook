import { createTypography } from './Typography';

export default {
  title: 'Design System/Typography',
  argTypes: {},
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createTypography({ label, ...args });
};

export const Typography = Template.bind({});
