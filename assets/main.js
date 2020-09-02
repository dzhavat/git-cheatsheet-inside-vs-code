(function() {
  const vscode = acquireVsCodeApi();
  const body = document.querySelector('body');

  body.addEventListener('click', event => {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    vscode.postMessage(event.target.nextElementSibling.textContent);
  });
}());