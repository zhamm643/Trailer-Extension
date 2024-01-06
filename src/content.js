import { scrapeListingDetails } from './scraping';

// Listener that reacts when the user clicks on the extension icon.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "scrapeDetails") {
      const details = scrapeListingDetails();
      sendResponse({ result: "success", data: details });
    }
    return true; // Keep the message channel open for asynchronous response
  }
);

// Inform the popup script that the content script has been loaded
chrome.runtime.sendMessage({action: "contentScriptLoaded"});
