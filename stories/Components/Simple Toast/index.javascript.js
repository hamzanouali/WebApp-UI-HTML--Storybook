export function uiCloseSimpleToast(simpleToast) {
  simpleToast.classList.add('ui-simple-toast--close')
}

export function uiRemoveSimpleToast(e) {
  var simpleToast = e.target

  if (simpleToast.classList.contains('ui-simple-toast--close')) {
    simpleToast.parentNode.remove()
  }
}

export function uiSimpleToast(options, callback) {
  var html = `
  <div class="ui-simple-toast ui-simple-toast--` + options.position + `" onanimationend="uiRemoveSimpleToast(event)">
    <span class="ui-simple-toast__text">`+ options.text + `</span>
    <button class="ui-simple-toast__btn">`+ options.buttonText + `</button>
  </div>
  `
  var simpleToastContainer = document.createElement('div')
  simpleToastContainer.classList.add('ui-simple-toast-container')
  simpleToastContainer.innerHTML = html

  simpleToastContainer.querySelector('.ui-simple-toast__btn').addEventListener('click', function(event) {
    return callback(event, event.target.closest('.ui-simple-toast'))
  })

  document.body.appendChild(simpleToastContainer)

  if (options.autoCloseAfter && typeof options.autoCloseAfter === "number" && options.autoCloseAfter > 0) {
    setTimeout(function () {
      uiCloseSimpleToast(simpleToastContainer.firstElementChild)
    }, options.autoCloseAfter);
  }
}
