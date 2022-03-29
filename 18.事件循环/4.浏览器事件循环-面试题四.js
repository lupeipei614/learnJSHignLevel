Promise.resolve()
  .then(() => {
    console.log(0);
    return {
      then(resolve) {
        console.log('then立即执行')
        resolve(4)
      }
    };
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
1
then立即执行
2
4
3
5
6