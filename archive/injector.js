var s = document.createElement('script');
s.src = chrome.runtime.getURL('tcfapi-hook.js');
s.async = false;  // we need this to run synchronously (block page load)
document.documentElement.appendChild(s);
