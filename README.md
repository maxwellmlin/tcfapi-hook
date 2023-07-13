# tcfapi-hook

A chrome extension that hooks the __tcfapi function.

> **Note:** This extension uses Manifest v2 in order to synchronously execute injected code immediately. See Method 2b of this [post](https://stackoverflow.com/a/9517879/) for our methodology. Since Manifest v2 is depracated, this extension may not work in new versions of Chrome.

## Install

1. Clone this repository
2. Go to chrome://extensions
3. Enable `developer mode`
4. Click `load unpacked` and select the downloaded repository

## Methods

This extension loads `injector.js` upon `document_start`. The current DOM is logged at this time to ensure no other scripts have loaded yet.

`injector.js` hooks the `__tcfapi` function.
