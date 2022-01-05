/**
 * 手写promise-实现阶段2：
 *  实现功能：
 *   7.每一个promise对象都有一个then方法，then方法执行时需要传入两个回调函数，onFulfilled,onRejected
 *      onFulfilled回调有一个参数value,onRejected回调函数有一个参数reason
 *   8.当resolve回调函数执行改变当前promise对象的状态为'fulfilled'后，会立即执行onFulfilled回调函数,并把resolve的参数value值作为参数传给onFulfilled函数
 *     当reject回调函数执行改变当前promise对象的状态为'rejected'后，会立即执行onRejected回调函数,并把reject的参数reason值作为参数传给onFulfilled函数
 *   9.then方法执行是在主线程中，如果resolve和reject方法执行也是在主线中的话，resolve和reject的执行实际早于then,
 *     那时onFulfilled和onRejected回调还没通过then传进去，在执行resolve或reject函数内部是要执行onFulfilled或onRejected函数的，那时就会报错
 *     所以，在resolve或reject函数内部对onFulfilled或onRejected函数的调用要在一个微任务中，这样then函数的执行时机就早于onFulfilled或onRejected函数的执行
 *   
 *
 */
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class HyPromise {
  constructor(executor) {
    //promise对象初始状态为'pending'
    this.status = PROMISE_STATUS_PENDING;
    this.onFulfilledFn = undefined;
    this.onRejectedFn = undefined;

    const resolve = (value) => {
      //一旦promise对象的状态被修改为'fulfilled'或'rejected',再执行resolve或reject回调函数不会再改变其状态
      if (this.status === PROMISE_STATUS_PENDING) {
        //resolve回调函数执行，会把其状态改为'fulfilled'
        this.status = PROMISE_STATUS_FULFILLED;
        console.log("resolve回调函数被执行");

        //创建一个微任务中，让onFulfilled或onRejected函数的执行时机晚于then函数的执行
        queueMicrotask(() => {
          this.onFulfilledFn(value);
        });
      }
    };
    const reject = (reason) => {
      //一旦promise对象的状态被修改为'fulfilled'或'rejected',再执行resolve或reject回调函数不会再改变其状态
      if (this.status === PROMISE_STATUS_PENDING) {
        //reject回调函数执行，会把其状态改为'rejected'
        this.status = PROMISE_STATUS_REJECTED;
        console.log("reject回调函数被执行");

        //创建一个微任务中，让onFulfilled或onRejected函数的执行时机晚于then函数的执行
        queueMicrotask(() => {
          this.onRejectedFn(reason);
        });
      }
    };
    // executor执行函数在在通过new HyPromise(executor)创建promise对象时，立即被执行
    executor(resolve, reject);
  }

  //在类的prototype原型对象上定义then方法
  then(onFulfilled, onRejected) {
    this.onFulfilledFn = onFulfilled;
    this.onRejectedFn = onRejected;
  }
}
const promise = new HyPromise((resolve, reject) => {
  resolve(111);
  reject('error msg')
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
