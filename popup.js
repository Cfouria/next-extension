let uname = document.getElementById('uname');
let changeColor = document.getElementById('changeColor');

browser.storage.sync.get('color', function(data) {
	uname.setAttribute('value', data.color);
});

changeColor.onclick = function() {
	browser.storage.sync.set({color: uname.value}, function() {
		console.log("The color is..."+uname.value);
	});
	browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
		browser.tabs.executeScript(
			tabs[0].id,
			{code: 'var thisAnnoysMe = "' +uname.value+ '"' }
		);
	});
};

uname.addEventListener("keydown", function(e){
        if(e.keyCode == 13){
		browser.storage.sync.set({color: uname.value}, function() {
	                console.log("The color is..."+uname.value);
	        });
	        browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
	                browser.tabs.executeScript(
	                        tabs[0].id,
	                        {code: 'var thisAnnoysMe = "' +uname.value+ '"' }
	                );
	        });
        };
});
