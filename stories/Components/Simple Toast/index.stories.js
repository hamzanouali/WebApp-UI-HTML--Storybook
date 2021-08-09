import { createSimpleToast } from './index';

export default {
  title: '1. Components/Simple Toast',
  argTypes: {
    position: {
      control: 'radio',
      options: ['top-right', 'bottom-right', 'bottom-left', 'top-left']
    },
    text: { control: 'text' },
    buttonText: { control: 'text' }
  }
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createSimpleToast({ label, ...args });
};

export const simpleToast = Template.bind({});
simpleToast.args = {
  position: 'top-right',
  text: 'Configuration saved successfully!',
  buttonText: 'Undo'
};
