import { createInput } from './phoneNumberInput';

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

export const phoneNumber = Template.bind({});
phoneNumber.argTypes = {
  ...phoneNumber.argTypes,
  showDialCode: { control: 'boolean' }
}
phoneNumber.args = {
  label: 'Phone Number',
  labelSize: 'small',
  showDialCode: false,
  status: 'none',
  statusMessage: '',
};
