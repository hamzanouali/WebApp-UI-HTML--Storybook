import { createSwitch } from './formSwitch';

export default {
  title: '2. Design System/Form/Switch',
  argTypes: {
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createSwitch({ label, ...args });
};

export const formSwitch = Template.bind({});
formSwitch.argTypes = {
  ...formSwitch.argTypes,
  options: { control: 'array' }
}
formSwitch.args = {
  options: [
    {
      content: 'Male',
      value: 'male'
    },
    {
      content: 'Female',
      value: 'female'
    }
  ]
};
