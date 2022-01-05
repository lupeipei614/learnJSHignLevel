const co = require("co");

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

//创建生成器函数
async function getData() {
  const res1 = await requestData("aaa");
  const res2 = await requestData(res1 + "bbb");
  const res3 = await requestData(res2 + "ccc");
  console.log("执行结果：最终请求结果为", res3);
}

getData();
//执行结果：最终请求结果为 aaabbbccc
