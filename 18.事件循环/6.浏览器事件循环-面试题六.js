Promise.resolve()
  .then(() => {
    console.log(0);
    return new Promise(resolve => {
      console.log('promise回调立即执行')
      resolve(4)
    });
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

//执行结果：
0
promise回调立即执行
1
2
3
4
5
6