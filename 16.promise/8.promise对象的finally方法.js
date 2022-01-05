/**
 * promise对象的finally方法
 * ES9新增的一个特性
 * 表示无论promise对象的状态变为fulfilled还是rejected,都会执行finally的回调参数
 * finally不接收参数
 */

 const promise2 = new Promise((resolve, reject) => {
  resolve(111);
});
promise2
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('promise的状态被改变了')
  });

// 111
// promise的状态被改变了