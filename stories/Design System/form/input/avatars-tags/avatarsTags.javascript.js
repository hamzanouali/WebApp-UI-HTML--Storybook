import '../../../../assets/@yaireo/tagify/dist/tagify.css'
import Tagify from '../../../../assets/@yaireo/tagify/dist/tagify.min.js'
import { createAvatar } from '../../../Avatars/Avatars'

function setupAvatarsTags(inputElement, options) {
  function tagTemplate(tagData) {
    return `
    <tag title="${(tagData.title)}"
      contenteditable='false'
      spellcheck='false'
      tabIndex="-1"
      class="${this.settings.classNames.tag} ${tagData.class ? tagData.class : ""}"
      ${this.getAttributes(tagData)}>
        ${createAvatar({
          size: 'very-small',
          imgURL: tagData.avatar,
          primaryText: tagData.name
        }).outerHTML}
    </tag>
    `
  }

  function suggestionItemTemplate(tagData) {
    return `
    <div ${this.getAttributes(tagData)}
      class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
      tabindex="0"
      role="option">
      ${createAvatar({
        size: 'small',
        imgURL: tagData.avatar,
        primaryText: tagData.name,
        secondaryText: tagData.email
      }).outerHTML}
    </div>
    `
  }

  // initialize Tagify on the above input node reference
  var usersTagify = new Tagify(inputElement, {
    ...options,
    templates: {
      tag: tagTemplate,
      dropdownItem: suggestionItemTemplate
    }
  })

  usersTagify.on('dropdown:show dropdown:updated', onDropdownShow)
  usersTagify.on('dropdown:select', onSelectSuggestion)
  usersTagify.on('focus', preventBrowserExtensions)
  usersTagify.on('keydown', preventBrowserExtensions)

  var addAllSuggestionsElm;

  function onDropdownShow(e) {
    var dropdownContentElm = e.detail.tagify.DOM.dropdown.content;

    if (usersTagify.suggestedListItems.length > 1) {
      addAllSuggestionsElm = getAddAllSuggestionsElm();

      // insert "addAllSuggestionsElm" as the first element in the suggestions list
      dropdownContentElm.insertBefore(addAllSuggestionsElm, dropdownContentElm.firstChild)
    }
  }

  function onSelectSuggestion(e) {
    if (e.detail.elm == addAllSuggestionsElm)
      usersTagify.dropdown.selectAll.call(usersTagify);
  }

  // create a "add all" custom suggestion element every time the dropdown changes
  function getAddAllSuggestionsElm() {
    // suggestions items should be based on "dropdownItem" template
    return usersTagify.parseTemplate('dropdownItem', [{
      class: "addAll",
      name: "Add all",
      email: usersTagify.settings.whitelist.reduce(function (remainingSuggestions, item) {
        return usersTagify.isTagDuplicate(item.value) ? remainingSuggestions : remainingSuggestions + 1
      }, 0) + " Members"
    }]
    )
  }

  function preventBrowserExtensions(e) {
    var inputContainer = inputElement.parentNode;
    /* delete any element that doesn't belong to Tagify */
    /* some browser extensions inject elements which breaks the input functionality */
    inputContainer.querySelectorAll('.tagify > *:not(.tagify__input):not(.tagify__tag)').forEach(function (element) {
      element.remove();
    })
  }
}

export default setupAvatarsTags