import { createTag } from './tag';

export default {
  title: 'Design System/Tag',
  argTypes: {
    text: { control: 'text' },
    outlined: { control: 'boolean' }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createTag({ label, ...args });
};

export const tag = Template.bind({});
tag.args = {
  text: 'This tag',
  outlined: false
};
