//使用promise对异步请求的处理方式如下
function requestData(url) {
  return new Promise((resolve, reject) => {
    // 模拟异步请求
    setTimeout(() => {
      if (url === "coderwhy") {
        //请求成功
        const names = ["lily", "koby"];
        resolve(names);
      } else {
        const errMsg = "请求失败";
        reject(errMsg);
      }
    }, 2000);
  });
}

const promise = requestData("coderwhy");
promise.then(
  (res) => {
    console.log("请求成功的结果是", res);
  },
  (err) => {
    console.log("请求失败的结果是", err);
  }
);
