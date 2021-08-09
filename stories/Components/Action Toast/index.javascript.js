export function uiCloseActionToast(actionToast) {
  actionToast.classList.add('ui-action-toast--close')
}

export function uiRemoveActionToast(e) {
  var actionToast = e.target

  if (actionToast.classList.contains('ui-action-toast--close')) {
    actionToast.parentNode.remove()
  }
}

export function uiActionToast(options, callback) {
  var html = `
  <div class="ui-action-toast ui-action-toast--${options.position}" onanimationend="uiRemoveActionToast(event)">
    <div class="ui-action-toast__content-flex">
      <span class="ui-action-toast__headline">${options.headline}</span>
      <p class="ui-action-toast__text">${options.text}</p>
    </div>
    <div class="ui-action-toast__actions-flex">
      <button class="ui-action-toast__confirm-btn">${options.primaryText}</a>
      <button class="ui-action-toast__cancel-btn">${options.secondaryText}</button>
    </div>
  </div>
  `
  var actionToastContainer = document.createElement('div')
  actionToastContainer.classList.add('ui-action-toast-container')
  actionToastContainer.innerHTML = html

  actionToastContainer.querySelector('.ui-action-toast__confirm-btn').addEventListener('click', function(event) {
    return callback(event, event.target.closest('.ui-action-toast'), true)
  })

  actionToastContainer.querySelector('.ui-action-toast__cancel-btn').addEventListener('click', function(event) {
    return callback(event, event.target.closest('.ui-action-toast'), false)
  })

  document.body.appendChild(actionToastContainer)

  if (options.autoCloseAfter && typeof options.autoCloseAfter === "number" && options.autoCloseAfter > 0) {
    setTimeout(function () {
      uiCloseActionToast(actionToastContainer.firstElementChild)
    }, options.autoCloseAfter);
  }
}
