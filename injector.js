/**
 * Inject a script into the <html> tag
 * See Method 2b: https://stackoverflow.com/a/9517879/1238150
 * @param {Function} func Function to inject upon document_start
 */
function inject_script (func) {
  const payload = `(${func})();`
  const script = document.createElement('script')
  script.textContent = payload
  document.documentElement.appendChild(script)
}

inject_script(() => {
  /**
   * Wrap the __tcfapi function to intercept the tcData before it is passed to the callback
   * @param {Function} __tcfapi The original __tcfapi function
   * @returns {Function} Wrapped __tcfapi function
   */
  function get_tcfapi_wrapper (__tcfapi) {
    return function (command, version, callback, parameter) {
      if (command === 'addEventListener') {
        console.log("__tcfapi addEventListener called.")

        // Modify the callback to change the tcData before it is passed to the original callback
        const modifiedCallback = (tcData, success) => {
            if (tcData.gdprApplies) {
                /**
                 * @todo Replace hardcoded tcString with a dynamic one
                */
               tcData.tcString = 'CPusOQAPusOQAACAKAENDICgAAAAAAAAAAqIAAAAAAAA.YAAAAAAAAAAA'

               /**
                * @todo Check if there's any other objects that need to be deleted
                */
               // skipcq: JS-0125
               objects_to_delete = [
                   tcData.purpose.consents,
                   tcData.purpose.legitimateInterests,
                   tcData.vendor.consents,
                   tcData.vendor.legitimateInterests,
                   tcData.specialFeatureOptins,
                   tcData.publisher.consents,
                   tcData.publisher.legitimateInterests
                ]
                // skipcq: JS-0125
                for (const object of objects_to_delete) {
                    Object.keys(object).forEach((key) => delete object[key])
                }
                console.log('Executing callback with modified tcData.')
          }

          callback(tcData, success)
        }
        // Call the original __tcfapi function with the modified callback
        return __tcfapi(command, version, modifiedCallback, parameter)
      } else {
        // If the command is not 'addEventListener', just call the original function
        return __tcfapi(command, version, callback, parameter)
      }
    }
  }

  // Listen for when the __tcfapi function is set
  Object.defineProperty(window, '__tcfapi', {
    configurable: true,

    set: function setter (__tcfapi) {
      __tcfapi = get_tcfapi_wrapper(__tcfapi)
      console.log('__tcfapi wrapped.')

      Object.defineProperty(this, '__tcfapi', {
        get () {
          return __tcfapi
        },
        set: setter
      })
    }
  })

  // Log the HTML of the page so that we know the script has been injected before the page loads
  console.log('DOM after injection:')
  console.log(document.documentElement.outerHTML)
})
