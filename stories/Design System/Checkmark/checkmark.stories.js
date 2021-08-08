import { createCheckmark } from './checkmark';

export default {
  title: 'Design System/Checkmark',
  argTypes: {
    size: {
      control: 'radio',
      options: ['none', 'medium', 'large']
    },
    filled: {
      control: 'radio',
      options: ['filled', 'empty']
    }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCheckmark({ label, ...args });
};

export const checkmark = Template.bind({});
checkmark.args = {
  size: 'none',
  filled: 'filled'
};
