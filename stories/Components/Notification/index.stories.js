import { createNotification } from './index';

export default {
  title: '1. Components/Notification',
  argTypes: {
    type: {
      control: 'radio',
      options: ['success', 'danger', 'warning']
    },
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
  return createNotification({ label, ...args });
};

export const notification = Template.bind({});
notification.args = {
  type: 'success',
  position: 'top-right',
  headline: 'Backup migration',
  text: 'Configuration saved successfully!'
};
