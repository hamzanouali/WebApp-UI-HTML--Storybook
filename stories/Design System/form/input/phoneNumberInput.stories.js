import { createInput } from './phoneNumberInput';

export default {
  title: 'Design System/Form/Inputs',
  argTypes: {
    placeholder: { control: 'text' },
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

export const phoneNumberInput = Template.bind({});
phoneNumberInput.args = {
  label: 'Phone Number',
  labelSize: 'small',
  placeholder: '(201) 555-0123',
  status: 'none',
  statusMessage: '',
};
