import './index.css'

export const createHeaderSearchBar = () => {
  const html = `
  <div class="ui-search">
    <input type="text" class="ui-search__input" placeholder="Search" />
    <img class="ui-search__icon" src="/images/Search.svg" />
  </div>
  `

  const div = document.createElement('div')
  div.innerHTML = html

  const headerContainer = createHeaderContainer({ children: div.firstElementChild });

  const div2 = document.createElement('div')
  div2.innerHTML = headerContainer.outerHTML

  return div2.firstElementChild
}