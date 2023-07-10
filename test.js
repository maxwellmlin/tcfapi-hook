const callback = (tcData, success) => {
  console.log(tcData)
  console.log(success)
};

__tcfapi('addEventListener', 2, callback);
__tcfapi("show", 2, () => {});