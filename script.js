let original__tcfapi = window.__tcfapi;


// Override the __tcfapi function
window.__tcfapi = function (command, version, callback, parameter) {
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
        original__tcfapi(command, version, modifiedCallback, parameter);
    } else {
        // If the command is not 'addEventListener', just call the original function
        original__tcfapi(command, version, callback, parameter);
    }
};
