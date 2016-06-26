import $ from 'jquery';
import { saveAs } from 'file-saver';

function req() {
  const filenames = window.location.href.split('/').filter(x => x);
  const filename = `${filenames[filenames.length - 1]}.txt`;
  const urls = $('article img').map((idx, img) => `${img.src}\n`).get();
  const file = new File(urls, filename, {
    type: 'text/plain;charset=utf-8'
  });
  saveAs(file);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "clicked_browser_action") {
    req();
  }
});
