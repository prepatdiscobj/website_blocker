document.addEventListener('DOMContentLoaded', function () {
  const blockedWebsitesInput = document.getElementById('blocked-websites');
  const saveButton = document.getElementById('save-button');

  // Load blocked websites from sync storage
  chrome.storage.sync.get({ blockedWebsites: '' }, function (data) {
    blockedWebsitesInput.value = data.blockedWebsites;
  });

  saveButton.addEventListener('click', function () {
    const blockedWebsites = blockedWebsitesInput.value;

    // Update blocked websites in sync storage
    chrome.storage.sync.set({ blockedWebsites });
  });
});
