import { createRadio } from './radio';

export default {
  title: 'Design System/Form/Checkbox And Radio',
  argTypes: {
    label: { control: 'text' }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createRadio({ label, ...args });
};

export const radio = Template.bind({});
radio.args = {
  label: 'Remember me'
};
