// Popup script for the Chrome extension
import { initializeFacebookSDK, facebookLogin } from './auth';

document.addEventListener('DOMContentLoaded', function() {
  initializeFacebookSDK();
  const loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', facebookLogin);
  const updateUI = (details) => {
    document.getElementById('title').textContent = details.title;
    document.getElementById('description').textContent = details.description;
    document.getElementById('price').textContent = details.price;
    const imagesContainer = document.getElementById('images');
    imagesContainer.innerHTML = '';
    details.images.forEach(src => {
      let img = document.createElement('img');
      img.src = src;
      imagesContainer.appendChild(img);
    });
  };

  const onContentScriptLoaded = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "scrapeDetails"}, function(response) {
        if (response && response.result === 'success') {
          updateUI(response.data);
        }
      });
    });
  };

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "contentScriptLoaded") {
        onContentScriptLoaded();
        sendResponse({result: 'initialized'});
      }
    }
  );
});
