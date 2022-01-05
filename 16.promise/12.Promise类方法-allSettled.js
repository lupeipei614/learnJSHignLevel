/**
 * Promise.allSettled(arr)
 * 参数是一个数组
 * 数组的元素建议是一个promise对象，如果不是，会使用Promise.resolve把其转为promise对象
 * allSettled方法执行返回一个新的promise对象allSettledPromise,
 *  当arr中所有的promise对象的状态都敲定后，不管是变为fulfilled还是rejected,allSettledPromise对象的状态都会变为fulfilled,执行resolved回调,
 *  resolved回调的参数为一个数组，是按照数组中promise对象状态改变的先后顺序，返回每个promise对象的结果，
 *  数组中每个元素为一个对象，这个对象有两个属性，status和value/reason
 *  status为这个promise对象的状态，value为这个对象被对象的结果，reason为被拒绝的原因
 *
 *  allSettled执行一定返回一个状态为fulfilled的promise的对象
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

const promise = Promise.allSettled([promise2, promise1, promise3, promise4]);
promise.then((res) => {
  console.log(res);
});

// [
//   { status: 'fulfilled', value: 111 },
//   { status: 'fulfilled', value: 222 },
//   { status: 'rejected', reason: 'error msg' },
//   { status: 'rejected', reason: 'error error' }
// ]
