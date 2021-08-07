import { createInput } from './avatarsTags';

export default {
  title: 'Design System/Form/Inputs',
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

export const avatarsTags = Template.bind({});
avatarsTags.argTypes = {
  ...avatarsTags.argTypes,
  placeholder: { control: 'text' }
}
avatarsTags.args = {
  label: 'Tags',
  labelSize: 'small',
  placeholder: 'Write tags',
  value: 'abatisse2@nih.gov',
  status: 'none',
  statusMessage: ''
};
