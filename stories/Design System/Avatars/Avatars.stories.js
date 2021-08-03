import { createAvatar } from './Avatars';

export default {
  title: 'Design-System/Avatars',
  argTypes: {
    size: {
      control: 'select',
      options: ['very-small', 'small', 'medium', 'large']
    },
    imgURL: { control: 'text' },
    primaryText: { control: 'text' },
    secondaryText: { control: 'text' },
    status: {
      control: 'select',
      options: ['none', 'online', 'offline', 'edit'],
    }
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createAvatar({ label, ...args });
};

export const AvatarWithInfo = Template.bind({});
AvatarWithInfo.args = {
  size: 'medium',
  imgURL: 'https://randomuser.me/api/portraits/men/43.jpg',
  status: 'none',
};
