new Promise((resolve, reject) => {
  const controlledframe = document.createElement('controlledframe');
  if (!('src' in controlledframe)) {
    // Tag is undefined or generates a malformed response.
    reject('FAIL');
    return;
  }
  controlledframe.setAttribute('src', 'https://googlechromelabs.github.io/browser-fs-access/demo/');
  controlledframe.addEventListener('loadstop', resolve);
  controlledframe.addEventListener('loadabort', reject);
  document.body.appendChild(controlledframe);
});

var last_permission = "placeholder";
const frame = document.getElementsByTagName('controlledframe')[0];

frame.addEventListener('permissionrequest', function(e) {
  last_permission = e.permission;
  console.log('From permissionrequest EventListner: ' + last_permission);
  e.request.allow();
});