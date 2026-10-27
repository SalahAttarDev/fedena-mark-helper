// Toolbar popup: explains where the Marks Helper panel appears.
var PAGE = '/assessments/attribute_scores';
var GRADEBOOK = '/gradebooks/exam_management';
var DEFAULT_ORIGIN = 'https://gmis.fedena.com';

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var tab = tabs[0], url;
  try { url = new URL(tab.url); } catch (e) { url = null; }
  var onFedena = url && /\.fedena\.com$/.test(url.hostname);
  var msg = document.getElementById('msg');
  var go = document.getElementById('go');

  if (onFedena && url.pathname.indexOf(PAGE) === 0) {
    msg.textContent = 'You are on a Mark Entry page. The Marks Helper panel is at the bottom right.';
    go.textContent = 'Close';
    go.onclick = function () { window.close(); };
    return;
  }
  msg.textContent = 'The panel appears on Gradebook → Manage Gradebook → (grade) → Manage Exams → Enter marks.';
  go.onclick = function () {
    chrome.tabs.update(tab.id, { url: (onFedena ? url.origin : DEFAULT_ORIGIN) + GRADEBOOK });
    window.close();
  };
});
