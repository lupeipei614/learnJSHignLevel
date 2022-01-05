/**
 * Promise.any(arr)
 * 参数是一个数组
 * 数组的元素建议是一个promise对象，如果不是，会使用Promise.resolve把其转为promise对象
 * any方法执行返回一个新的promise对象anyPromise,
 *  只要arr中一个的promise对象的状态变为了fulfilled，anyPromise对象的状态都会变为fulfilled,执行resolved回调,
 *  resolved回调的参数为状态首先变为fulfilled的promise对象的resolve值，
 *  如果数组中所有的promise对象最终都变为rejected,anyPromise对象的状态都会变为rejected,执行rejected回调,
 *  rejected回调的参数为一个合计错误aggregateError,可以通过aggregateError.errors获得一个存储着所有promise被拒原因的数组
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 100);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222);
  }, 200);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error msg");
  }, 300);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error error");
  }, 400);
});

const promise = Promise.any([promise1, promise2, promise3, promise4]);
promise
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });

//res 111

const promise11 = Promise.any([promise3, promise4]);
promise11
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
    console.log('err', err.errors)
  });

  // err [AggregateError: All promises were rejected]
  // err [ 'error msg', 'error error' ]
