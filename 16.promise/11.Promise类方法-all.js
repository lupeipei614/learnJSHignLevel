/**
 * Promise.all(arr)
 * 参数是一个数组
 * 数组的元素建议是一个promise对象，如果不是，会使用Promise.resolve把其转为promise对象
 * all方法执行返回一个新的promise对象allPromise,
 *  当arr中所有的promise对象的状态都变为fulfilled,allPromise对象的状态才会变为fulfilled,执行resolved回调,参数为一个数组，
 *    是按照数组中promise对象状态改变的先后顺序，存储每个promise对象的结果
 *  一旦arr中有一个promise对象状态变为rejected，allPromise对象的状态就会变为rejected,执行rejected回调,参数为那个第一个被拒的对象的被拒原因
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
    resolve(333);
  }, 300);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error msg");
  }, 300);
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error error");
  }, 300);
});

const allPromise = Promise.all([promise2, promise1, promise3]);
allPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// [ 222, 111, 333 ]

const allPromise1 = Promise.all([promise1, promise4, promise5]);
allPromise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// error msg