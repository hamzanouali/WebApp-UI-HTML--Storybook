import { createSelect } from './selectPerson';

export default {
  title: '2. Design System/Form/Select',
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
  return createSelect({ label, ...args });
};

export const selectPerson = Template.bind({});
selectPerson.argTypes = {
  ...selectPerson.argTypes,
  placeholder: { control: 'text' }
}
selectPerson.args = {
  label: 'Invite User',
  labelSize: 'small',
  placeholder: 'Search by name and email',
  value: '',
  status: 'none',
  statusMessage: ''
};
