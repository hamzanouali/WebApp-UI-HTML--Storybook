import { createInput } from './Input';

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

export const simpleInput = Template.bind({});
simpleInput.argTypes = {
  ...simpleInput.argTypes,
  placeholder: { control: 'text' },
  showIcon: { control: 'boolean' },
  icon: { control: 'text' }
}
simpleInput.args = {
  label: 'Email',
  labelSize: 'small',
  placeholder: 'hamza@frontendor.com',
  status: 'none',
  statusMessage: '',
  showIcon: false,
  icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>`
};
