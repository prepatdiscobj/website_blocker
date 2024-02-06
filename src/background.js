chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (namespace === 'sync' && 'blockedWebsites' in changes) {
    const newBlockedWebsites = changes.blockedWebsites.newValue;
    const blockedWebsitesArray = newBlockedWebsites.split('\n');
    chrome.scripting.executeScript({
      target: { tabId: -1 }, // -1 targets all tabs
      function: blockWebsites,
      args: [blockedWebsitesArray]
    });
  }
});

function blockWebsites(blockedWebsites) {
  const currentURL = window.location.href;

  for (const website of blockedWebsites) {
    if (currentURL.includes(website.trim())) {
      window.location.href = chrome.runtime.getURL('blocked.html');
      break;
    }
  }
}
