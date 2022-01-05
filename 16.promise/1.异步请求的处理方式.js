//在promise出现之前，对异步请求的处理方式如下
function requestData(url, successCallback, failureCallback) {
  // 模拟异步请求
  setTimeout(() => {
    if (url === "coderwhy") {
      //请求成功
      const names = ["lily", "koby"];
      successCallback(names);
    } else {
      const errMsg = "请求失败";
      failureCallback(errMsg);
    }
  }, 2000);
}

requestData(
  "coderwhy",
  (res) => {
    console.log("请求成功的结果是", res);
  },
  (err) => {
    console.log("请求失败的结果是", err);
  }
);
