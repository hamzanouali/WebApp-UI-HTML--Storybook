import { createSelect } from './simpleSelect';

export default {
  title: 'Design System/Form/Select',
  argTypes: {
    label: { control: 'text' },
    labelSize: {
      control: 'radio',
      options: ['small', 'normal']
    },
    status: {
      control: 'radio',
      options: ['none', 'error', 'warning', 'success']
    },
    statusMessage: { control: 'text' }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createSelect({ label, ...args });
};

export const simpleSelect = Template.bind({});
simpleSelect.argTypes = {
  list: { control: 'array' },
  ...simpleSelect.argTypes,
  placeholder: { control: 'text' },
  showIcon: { control: 'boolean' },
  icon: { control: 'text' }
}
simpleSelect.args = {
  label: 'Select Country',
  labelSize: 'small',
  placeholder: 'All Countries',
  list: ['Algeria', 'Qatar', 'Mali'],
  status: 'none',
  statusMessage: 'Field required',
  showIcon: true,
  icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>`
};
