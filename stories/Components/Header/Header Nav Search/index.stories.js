import { createHeaderNavSearch } from './index';

export default {
  title: '1. Components/Header/Header Nav Search',
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHeaderNavSearch({ label, ...args });
};

export const headerNavSearch = Template.bind({});
headerNavSearch.args = {
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
