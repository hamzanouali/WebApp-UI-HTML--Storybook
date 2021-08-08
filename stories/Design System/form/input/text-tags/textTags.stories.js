import { createInput } from './textTags';

export default {
  title: '2. Design System/Form/Inputs',
  argTypes: {
    label: { control: 'text' },
    labelSize: {
      control: 'radio',
      options: ['small', 'normal']
    },
    status: {
      control: 'radio',
      options: ['none', 'error', 'warning', 'success']
    }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createInput({ label, ...args });
};

export const textTags = Template.bind({});
textTags.argTypes = {
  ...textTags.argTypes,
  placeholder: { control: 'text' }
}
textTags.args = {
  label: 'Tags',
  labelSize: 'small',
  placeholder: 'Write tags',
  status: 'none',
  statusMessage: ''
};
