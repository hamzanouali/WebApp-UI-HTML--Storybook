import { createInput } from './copyToClipboard';

export default {
  title: 'Design System/Form/Inputs',
  argTypes: {
    label: { control: 'text' },
    labelSize: {
      control: 'radio',
      options: ['small', 'normal']
    }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createInput({ label, ...args });
};

export const copyToClipboard = Template.bind({});
copyToClipboard.args = {
  label: 'Invite code',
  labelSize: 'small',
  value: 'https://example.com/?t=54dsqazesdao==',
};
