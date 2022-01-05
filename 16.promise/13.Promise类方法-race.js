/**
 * Promise.race(arr)
 * 参数是一个数组
 * 数组的元素建议是一个promise对象，如果不是，会使用Promise.resolve把其转为promise对象
 * race方法执行返回一个新的promise对象racePromise,
 *  racePromise对象的状态取决于arr中第一个状态被敲定的promise对象firstPromise的状态
 *  第一个状态被敲定的promise对象firstPromise的状态变为了fulfilled，racePromise对象的状态都会变为fulfilled,执行resolved回调,
 *  resolved回调的参数为firstPromise这个对象的resolve值，
 *  第一个状态被敲定的promise对象firstPromise的状态变为了rejected，racePromise对象的状态都会变为rejected,执行rejected回调,
 *  rejected回调的参数为firstPromise这个对象的reject值，

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

const promise = Promise.race([promise1, promise2, promise3, promise4]);
promise
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });

//res 111
