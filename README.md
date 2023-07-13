# 🍪 tcfapi-hook

A chrome extension that hooks the __tcfapi function to inject custom cookie consent settings.

> **Note:** This extension uses Manifest v2 in order to synchronously execute injected code immediately. See Method 2b of this [post](https://stackoverflow.com/a/9517879/) for our methodology. Since Manifest v2 is deprecated, this extension may not work in new versions of Chrome.

## Install

1. Clone this repository
2. Go to chrome://extensions
3. Enable `Developer mode`
4. Click `Load unpacked` and select this repository

## Methodology

This extension executes `injector.js` upon `document_start` which injects a script inside the \<html> tag. This script executes before any other part of the DOM loads which ensures that `__tcfapi` is hooked before it is ever called. We define the `set` property of the `__tcfapi` to listen for and immediately wrap the `__tcfapi` whenever it is redefined.
