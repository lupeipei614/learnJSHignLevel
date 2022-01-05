//请求封装
function requestData(url, successCallback, failureCallback) {
  //模拟异步请求
  setTimeout(() => {
    if (typeof url === "string") {
      successCallback(url);
    } else {
      failureCallback("参数url必须是字符串类型");
    }
  }, 3000);
}

/**
 * 需求：
 * 第一次请求：url: 'aaa',
 * 第二次请求：url: 第一次请求结果拼接上'bbb',
 * 第三次请求：url: 第二次请求结果拼接上'ccc',
 */

//第一次请求
requestData(
  "aaa",
  (res1) => {
    //第二次请求
    requestData(
      res1 + "bbb",
      (res2) => {
        //第三次请求
        requestData(
          res2 + "ccc",
          (res3) => {
            console.log("最终请求结果为", res3);
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

//执行结果：最终请求结果为 aaabbbccc
