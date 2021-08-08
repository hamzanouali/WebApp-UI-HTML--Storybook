import '../../../../assets/@yaireo/tagify/dist/tagify.css'
import Tagify from '../../../../assets/@yaireo/tagify/dist/tagify.min.js'
import { createAvatar } from '../../../Avatars/Avatars'

function setupPersonSelect(inputElement, options) {
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

  usersTagify.on('focus', preventBrowserExtensions)
  usersTagify.on('keydown', preventBrowserExtensions)

  function preventBrowserExtensions(e) {
    var inputContainer = inputElement.parentNode;
    /* delete any element that doesn't belong to Tagify */
    /* some browser extensions inject elements which breaks the input functionality */
    inputContainer.querySelectorAll('.tagify > *:not(.tagify__input):not(.tagify__tag)').forEach(function (element) {
      element.remove();
    })
  }
}

export default setupPersonSelect