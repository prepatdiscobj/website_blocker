chrome.storage.sync.get(['blockedWebsites'], function (data) {
  const blockedWebsites = data.blockedWebsites.split('\n');

  if (blockedWebsites.length > 0) {
    const currentURL = window.location.href;

    for (const website of blockedWebsites) {
      if (currentURL.includes(website.trim())) {
        // Redirect to the blocked.html page and exit the loop
        window.location.href = chrome.runtime.getURL('blocked.html');
        break;
      }
    }
  }
});
