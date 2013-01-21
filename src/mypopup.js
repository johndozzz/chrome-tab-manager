	function getTabs() {
		chrome.windows.getCurrent({ populate: true}, function(window) {	
			var str = "";
			
			for (var i=0; i < window.tabs.length; i++) {
				str += window.tabs[i].title + "\r\n";
				str += window.tabs[i].url + "\r\n";
				str += "\r\n";
			}
			
			$('#output').text(str);
			$('#output').select();
		});
	}
	
$(function(){
	$('#gettabs').click(function() {
		getTabs();
	});
 });

