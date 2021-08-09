export function uiCloseNotification(e) {
  var customNotification
  if (e.classList && e.classList.contains('ui-notification')) {
    customNotification = e
  } else {
    customNotification = e.target.closest('.ui-notification')
  }

  customNotification.classList.add('ui-notification--close')
}

export function uiRemoveNotification(e) {
  var customNotification = e.target

  if (customNotification.classList.contains('ui-notification--close')) {
    customNotification.parentNode.remove()
  }
}

export function uiNotify(options) {
  var html = `
    <div class="ui-notification ui-notification--`+ options.type + ` ui-notification--` + options.position + `"
      onanimationend="uiRemoveNotification(event)">
      <div class="ui-notification__icon">
        <span class="ui-notification__icon__success">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
        </span>
        <span class="ui-notification__icon__warning">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" height="1em"
            width="1em" fill="currentColor">
            <g>
              <rect fill="none" height="24" width="24" />
              <path
                d="M12,3.19l7,3.11V11c0,4.52-2.98,8.69-7,9.93C7.98,19.69,5,15.52,5,11V6.3L12,3.19 M12,1L3,5v6c0,5.55,3.84,10.74,9,12 c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z" />
            </g>
          </svg>
        </span>
        <span class="ui-notification__icon__danger">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" height="1em"
            width="1em" fill="currentColor">
            <g>
              <rect fill="none" height="24" width="24" />
              <path
                d="M12,3.19l7,3.11V11c0,4.52-2.98,8.69-7,9.93C7.98,19.69,5,15.52,5,11V6.3L12,3.19 M12,1L3,5v6c0,5.55,3.84,10.74,9,12 c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z" />
            </g>
          </svg>
        </span>
      </div>
      <div class="ui-notification__content">
        <span class="ui-notification__headline">
          `+ options.headline + `
        </span>
        <span class="ui-notification__text">
          `+ options.text + `
        </span>
      </div>
      <button class="ui-notification__close" onclick="uiCloseNotification(event)">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </button>
    </div>
  `
  var div = document.createElement('div')
  div.classList.add('ui-notification-container')
  div.innerHTML = html

  document.body.appendChild(div)

  if (options.autoCloseAfter && typeof options.autoCloseAfter === "number" && options.autoCloseAfter > 0) {
    setTimeout(function () {
      uiCloseNotification(div.firstElementChild)
    }, options.autoCloseAfter);
  }
}
