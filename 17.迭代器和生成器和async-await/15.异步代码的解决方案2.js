//请求封装
function requestData(url) {
  return new Promise((resolve, reject) => {
    //模拟异步请求
    setTimeout(() => {
      if (typeof url === "string") {
        resolve(url);
      } else {
        reject("参数url必须是字符串类型");
      }
    }, 3000);
  });
}

/**
 * 需求：
 * 第一次请求：url: 'aaa',
 * 第二次请求：url: 第一次请求结果拼接上'bbb',
 * 第三次请求：url: 第二次请求结果拼接上'ccc',
 */

//方式一：
//第一次请求
requestData("aaa").then((res1) => {
  //第二次请求
  requestData(res1 + "bbb").then((res2) => {
    //第三次请求
    requestData(res2 + "ccc").then((res3) => {
      console.log("最终请求结果为", res3);
    });
  });
});
//执行结果：最终请求结果为 aaabbbccc

//方式二：
requestData("aaa")
  .then((res1) => {
    //第二次请求
    return requestData(res1 + "bbb");
  })
  .then((res2) => {
    //第三次请求
    return requestData(res2 + "ccc");
  })
  .then((res3) => {
    console.log("最终请求结果为", res3);
  });

//执行结果：最终请求结果为 aaabbbccc
