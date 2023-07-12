// Use for manifest v3

function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
  }

console.log("Waiting for `__tcfapi` to be set...");

function get_tcf_wrapper(__tcfapi) {
    return function (command, version, callback, parameter) {
        if (command === "addEventListener") {
            console.log("'addEventListener' hooked")

            // Modify the callback to change the tcData before it is passed to the original callback
            const modifiedCallback = (tcData, success) => {
                if (success && tcData.gdprApplies) {
                    tcData.tcString = "CPusOQAPusOQAACAKAENDICgAAAAAAAAAAqIAAAAAAAA.YAAAAAAAAAAA"

                    objects = [
                        tcData.purpose.consents,
                        tcData.purpose.legitimateInterests,
                        tcData.vendor.consents,
                        tcData.vendor.legitimateInterests,
                        tcData.specialFeatureOptins,
                        tcData.publisher.consents,
                        tcData.publisher.legitimateInterests,
                    ]
                    for (let object of objects) {
                        for (let key in object) {
                            object[key] = false;
                        }
                    }
                }

                callback(tcData, success);
            };
            // Call the original __tcfapi function with the modified callback
            return __tcfapi(command, version, modifiedCallback, parameter);
        } else {
            // If the command is not 'addEventListener', just call the original function
            return __tcfapi(command, version, callback, parameter);
        }
    };
}

Object.defineProperty(window, '__tcfapi', {
    configurable: true,

    set: function setter(val) {
        val = get_tcf_wrapper(val);

        Object.defineProperty(this, '__tcfapi', {
            get: function() { return val; },
            set: setter,
        });
    }
});

console.log(document.getElementsByTagName('html')[0].innerHTML) ;