setInterval(function() {
    chrome.tabs.sendMessage(tabId, { message: 'hello!' });
    console.log("asdf");
}, 60);