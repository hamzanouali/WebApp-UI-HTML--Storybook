import { createSelect } from './selectCountry';

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
    },
    statusMessage: { control: 'text' }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createSelect({ label, ...args });
};

export const selectCountry = Template.bind({});
selectCountry.argTypes = {
  ...selectCountry.argTypes,
}
selectCountry.args = {
  label: 'Select Country',
  labelSize: 'small',
  status: 'none',
  statusMessage: 'Field required'
};
