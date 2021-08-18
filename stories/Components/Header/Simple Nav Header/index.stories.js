import { createSimpleNavHeader } from './index';

export default {
  title: '1. Components/Header/Simple Nav Header',
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createSimpleNavHeader({ label, ...args });
};

export const simpleNavHeader = Template.bind({});
simpleNavHeader.args = {
  title: 'Welcome, Ali 👋',
  navItems: [
    { label: 'analytics', link: '#analytics' },
    { label: 'plans', link: '#plans' },
    { label: 'user overview', link: '#user-overview' },
    { label: 'invoices', link: '#invoices' },
    { label: 'payment details', link: '#payment-details' },
    { label: 'billing address', link: '#billing-address' },
  ],
  showMenu: false
};