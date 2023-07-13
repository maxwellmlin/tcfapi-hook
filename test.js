// Copy and paste this into the console on a page with a CMP to test the hook

const callback = (tcData, success) => {
  console.log(tcData)
  console.log(success)
}

__tcfapi('addEventListener', 2, callback)
