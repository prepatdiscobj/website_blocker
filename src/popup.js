document.addEventListener('DOMContentLoaded', function () {
  const blockedWebsitesInput = document.getElementById('blocked-websites');
  const saveButton = document.getElementById('save-button');

  chrome.storage.sync.get({ blockedWebsites: '' }, function (data) {
    blockedWebsitesInput.value = data.blockedWebsites;
  });

  saveButton.addEventListener('click', function () {
    const blockedWebsites = blockedWebsitesInput.value;
    chrome.storage.sync.set({ blockedWebsites });
  });
});
