export function uiCloseActionToast(e) {
  var actionToast
  if (e.classList && e.classList.contains('ui-action-toast')) {
    actionToast = e
  } else {
    actionToast = e.target.closest('.ui-action-toast')
  }

  actionToast.classList.add('ui-action-toast--close')
}

export function uiRemoveActionToast(e) {
  var actionToast = e.target

  if (actionToast.classList.contains('ui-action-toast--close')) {
    actionToast.parentNode.remove()
  }
}

export function uiActionToast(options) {
  var html = `
  <div class="ui-action-toast ui-action-toast--${options.position}" onanimationend="uiRemoveActionToast(event)">
    <div class="ui-action-toast__content-flex">
      <span class="ui-action-toast__headline">${options.headline}</span>
      <p class="ui-action-toast__text">${options.text}</p>
    </div>
    <div class="ui-action-toast__actions-flex">
      <a href="https://frontendor.com" target="_blank" class="ui-action-toast__confirm-btn">${options.primaryText}</a>
      <button onclick="uiCloseActionToast(event)" class="ui-action-toast__cancel-btn">${options.secondaryText}</button>
    </div>
  </div>
  `
  var div = document.createElement('div')
  div.classList.add('ui-action-toast-container')
  div.innerHTML = html

  document.body.appendChild(div)

  if (options.autoCloseAfter && typeof options.autoCloseAfter === "number" && options.autoCloseAfter > 0) {
    setTimeout(function () {
      uiCloseActionToast(div.firstElementChild)
    }, options.autoCloseAfter);
  }
}
