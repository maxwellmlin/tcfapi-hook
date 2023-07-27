// Copy and paste this into the console on a page with a CMP to test __tcfapi

const callback = (tcData, success) => {
  console.log(tcData)
  console.log(success)
};

__tcfapi('addEventListener', 2, callback);