import { createSelect } from './simpleSelect';

export default {
  title: 'Design System/Form/Select',
  argTypes: {
    label: { control: 'text' },
    list: { control: 'array' },
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
  statusMessage: '',
  showIcon: false,
  icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
};
