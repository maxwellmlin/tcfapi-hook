// For Manifest v3
// var s = document.createElement('script');
// s.src = chrome.runtime.getURL('tcfapi-hook.js');
// s.async = false;  // we need this to run synchronously (block page load)
// document.documentElement).appendChild(s);

function injectScript(func) {
    var actualCode = "(" + func + ")();";
    var script = document.createElement("script");
    script.textContent = actualCode;
    document.documentElement.appendChild(script);
    // script.remove();
}

injectScript(function () {
    function get_tcf_wrapper(__tcfapi) {
        return function (command, version, callback, parameter) {
            if (command === "addEventListener") {
                console.log("'addEventListener' hooked");

                // Modify the callback to change the tcData before it is passed to the original callback
                const modifiedCallback = (tcData, success) => {
                    if (success && tcData.gdprApplies) {
                        tcData.tcString =
                            "CPusOQAPusOQAACAKAENDICgAAAAAAAAAAqIAAAAAAAA.YAAAAAAAAAAA";

                        objects = [
                            tcData.purpose.consents,
                            tcData.purpose.legitimateInterests,
                            tcData.vendor.consents,
                            tcData.vendor.legitimateInterests,
                            tcData.specialFeatureOptins,
                            tcData.publisher.consents,
                            tcData.publisher.legitimateInterests,
                        ];
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

    // Set listener for when the __tcfapi function is set
    Object.defineProperty(window, "__tcfapi", {
        configurable: true,
        
        set: function setter(val) {
            val = get_tcf_wrapper(val);
            
            Object.defineProperty(this, "__tcfapi", {
                get: function () {
                    return val;
                },
                set: setter,
            });
        },
    });

    // Log the HTML of the page so that we know the script has been injected before the page loads
    console.log(document.documentElement.outerHTML);
});
