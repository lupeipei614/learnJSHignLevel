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
function* getData() {
  const res1 = yield requestData("aaa");
  const res2 = yield requestData(res1 + "bbb");
  const res3 = yield requestData(res2 + "ccc");
  console.log("执行结果：最终请求结果为", res3);
}

//手动执行生成器函数
const generator = getData();

//第一次请求
generator
  .next()
  .value.then((res1) => {
    // 第二次请求
    return generator.next(res1).value;
  })
  .then((res2) => {
    // 第三次请求
    return generator.next(res2).value;
  })
  .then((res3) => {
    generator.next(res3);
  });

// 执行结果：最终请求结果为 aaabbbccc

//封装一个自动执行生成器函数
function execGenerator(generatorFn) {
  const generator = generatorFn();

  function exec(res) {
    const result = generator.next(res);
    if (result.done) return result.value;
    result.value.then((res) => {
      exec(res);
    });
  }
  exec();
}

execGenerator(getData);
