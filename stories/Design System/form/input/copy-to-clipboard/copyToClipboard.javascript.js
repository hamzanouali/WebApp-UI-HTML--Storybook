import popper from '../../../../assets/@popperjs/core/dist/esm/popper'
import tippy from '../../../../assets/tippy.js/dist/tippy-bundle.umd.min.js'

function setupCopyToClipboardInput(copyToClipboardFormItemContainer, ) {
  copyToClipboardFormItemContainer.addEventListener('focus', function () {
    copyToClipboardFormItemContainer.querySelector('input').select();
    copyToClipboardFormItemContainer.querySelector('button').click();
    copyTextToClipboard(copyToClipboardFormItemContainer.querySelector('input').value);
  })

  
  tippy(copyToClipboardFormItemContainer.querySelector('button'), {
    content: 'Copied!',
    trigger: 'click',
    animation: 'perspective',
  })

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }
  
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function () {
      console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
}

export default setupCopyToClipboardInput