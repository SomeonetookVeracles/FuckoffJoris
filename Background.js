// background
function getRandonDelay() {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1) *60 * 1000;
}

function injectPopup(tabId) {
    browser.tabs.executeScript(tabId, { file: "content.js" });
}

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.active) {
        constdelay = getRandomDelay();
        setTimeout(() => injectPopup(tabId), delay);
    }
});

browser.runtime.onMessage.addListener((message, sender) => {
    if (message.closeTab && sender.tab) {
        browser.tabs.remove(sender.tab.id);
    }
});

// I fucking hate JS, this took like an hour to figure out