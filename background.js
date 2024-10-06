chrome.action.onClicked.addListener((tab) => {
    // Check if the URL is supported (e.g., not a chrome:// URL or special page)
    if (!tab.url.startsWith('chrome://') && !tab.url.startsWith('chrome-extension://') && !tab.url.startsWith('about:')) {
        console.log('Injecting content script into tab:', tab.url);
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
        }, (result) => {
            if (chrome.runtime.lastError) {
                console.error('Script injection failed:', chrome.runtime.lastError.message);
            } else {
                console.log('Content script injected successfully.');
            }
        });
    } else {
        console.warn('Unsupported page. Cannot execute the script.');
    }
});
