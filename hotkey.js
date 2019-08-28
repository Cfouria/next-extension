window.addEventListener("keydown", function(e){
	if(e.ctrlKey && e.keyCode == 69){
		browser.storage.sync.get('color', function(data) {
			var thisAnnoysMe = data.color;
			[...document.getElementsByTagName("a")].map(e=>e.textContent.includes(thisAnnoysMe) ? e.click() : false)
		});
	};
});
