const CSS =
	`@font-face{font-family:'FC';src:url('<url>');}*{font-family:'FC'!important;}`.replace(
		"<url>",
		chrome.runtime.getURL("obfuscate.ttf"),
	);

let inserted = false;

chrome.action.onClicked.addListener((tab) => {
	const injection = { target: { tabId: tab.id }, css: CSS };
	if (inserted) {
		chrome.scripting.removeCSS(injection);
	} else {
		chrome.scripting.insertCSS(injection);
	}
	inserted = !inserted;
});
