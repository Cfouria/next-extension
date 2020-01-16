window.addEventListener("keydown", function(e){
	if(e.ctrlKey && e.keyCode == 69){
		browser.storage.sync.get('color', function(data) {
			[...document.getElementsByTagName("a")].map(e=>e.textContent.includes(data.color) ? e : false).filter(e=>e).map((e,i)=>!i&&e?e.click():false)
		});
	};
});
