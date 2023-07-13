function inject_script (func) {
  const payload = '(' + func + ')();'
  const script = document.createElement('script')
  script.textContent = payload
  document.documentElement.appendChild(script)
  // script.remove();
}

inject_script(function () {
  function get_tcf_wrapper (__tcfapi) {
    function wrapper (command, version, callback, parameter) {
      if (command === 'addEventListener') {
        console.log("'addEventListener' hooked")

        // Modify the callback to change the tcData before it is passed to the original callback
        const modifiedCallback = (tcData, success) => {
          if (success && tcData.gdprApplies) {
            tcData.tcString =
              'CPusOQAPusOQAACAKAENDICgAAAAAAAAAAqIAAAAAAAA.YAAAAAAAAAAA'

            objects = [
              tcData.purpose.consents,
              tcData.purpose.legitimateInterests,
              tcData.vendor.consents,
              tcData.vendor.legitimateInterests,
              tcData.specialFeatureOptins,
              tcData.publisher.consents,
              tcData.publisher.legitimateInterests
            ]
            for (const object of objects) {
              for (const key in object) {
                object[key] = false
              }
            }
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

    return wrapper
  }

  // Set listener for when the __tcfapi function is set
  Object.defineProperty(window, '__tcfapi', {
    configurable: true,

    set: function setter (val) {
      val = get_tcf_wrapper(val)

      Object.defineProperty(this, '__tcfapi', {
        get: function () {
          return val
        },
        set: setter
      })
    }
  })

  // Log the HTML of the page so that we know the script has been injected before the page loads
  console.log(document.documentElement.outerHTML)
})
