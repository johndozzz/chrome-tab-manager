
chrome.browserAction.onClicked.addListener(function(tab) {
	alert("WindowID:" + tab.windowId);
//  chrome.tabs.executeScript(
//      null, {code:"document.body.style.background='red !important'"});
});

//chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});




var i = 0;
window.setInterval(function() {

//	alert({test:String(i)});
//  chrome.browserAction.setBadgeText({text:String(i)});
  i++;


}, 1000);

//chrome.browserAction.setBadgeText({text:"asd"});