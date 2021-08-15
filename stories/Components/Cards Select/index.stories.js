import { createCardsSelect } from './index';

export default {
  title: '1. Components/Cards Select',
  argTypes: {},
  decorators: [(story) => {
    const html = `
    <div style="background: #f3f5f7; padding: 15px;">
      <div style="max-width: 854px; margin: 100px auto;">${story().outerHTML}</div>
    </div>
    `
    const div = document.createElement('div')
    div.innerHTML = html

    return div.firstElementChild
  }],
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCardsSelect({ label, ...args });
};

export const CardsSelect = Template.bind({});
CardsSelect.args = {};
