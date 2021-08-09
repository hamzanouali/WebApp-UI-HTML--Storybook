import { createActionToast } from './index';

export default {
  title: '1. Components/Action Toast',
  argTypes: {
    position: {
      control: 'radio',
      options: ['top-right', 'bottom-right', 'bottom-left', 'top-left']
    },
    headline: { control: 'text' },
    text: { control: 'text' }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createActionToast({ label, ...args });
};

export const actionToast = Template.bind({});
actionToast.args = {
  position: 'top-right',
  headline: 'Backup migration',
  text: 'Configuration saved successfully!',
  primaryText: 'Got it',
  secondaryText: 'Close'
};
