import { createSwitch } from './OnOffSwitch';

export default {
  title: '2. Design System/Form/Switch',
  argTypes: {}
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createSwitch({ label, ...args });
};

export const OnOffSwitch = Template.bind({});

