function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

browser.menus.create({
  id: "next-link",
  title: "Re: Ctrl+E",
  documentUrlPatterns: ["<all_urls>"],
  contexts: ["link"]
}, onCreated);

browser.runtime.onInstalled.addListener(function() {
	browser.storage.sync.set({color: 'Next'}, function() {
		console.log("The color is...'Next'");
	});
});
