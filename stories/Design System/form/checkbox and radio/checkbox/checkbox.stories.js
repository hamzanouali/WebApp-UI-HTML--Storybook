import { createCheckbox } from './checkbox';

export default {
  title: '2. Design System/Form/Checkbox And Radio',
  argTypes: {
    label: { control: 'text' }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCheckbox({ label, ...args });
};

export const checkbox = Template.bind({});
checkbox.args = {
  label: 'Remember me'
};
