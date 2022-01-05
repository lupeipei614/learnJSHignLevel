/**
 * 手写promise-实现阶段3：
 *  实现功能：
 *   10.promise对象的then方法可以多次调用，并且多次调用传入的多个onFulfilled或onRejected函数,在resolve或reject函数调用时，都会依次调用
 *   11.假如把then方法的调用放到一个setTimeout定时器里，定时器的then方法执行时，
 *      已经对onFulfilledFns或onRejectedFns数组进行遍历，执行了里面存储的所有的onFulfilled或onRejected回调
 *      此时通过定时器里的then方法添加的onFulfilled或onRejected回调就不能被执行
 *      可以在then方法里增加一个判断，执行then时，当前对象的状态为pending,就把onFulfilled或onRejected回调添加到onFulfilledFns或onRejectedFns数组里,
 *      如果状态不为pending,就执行把传入的onFulfilled或onRejected回调执行了
 *   
 *   目前代码存在一个bug:因为resolve和reject里改变promise对象的状态放在了微任务中，造成在new promise对象时，如果resolve和reject都调用的话，
 *   resolve和reject函数中的微任务都会被添加，这是因为resolve和reject都是在主线程执行，此时promise的对象一直是pending，所以都添加到微任务中了
 */
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class HyPromise {
  constructor(executor) {
    //promise对象初始状态为'pending'
    this.status = PROMISE_STATUS_PENDING;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      //一旦promise对象的状态被修改为'fulfilled'或'rejected',再执行resolve或reject回调函数不会再改变其状态
      if (this.status === PROMISE_STATUS_PENDING) {
        this.value = value;
        console.log("resolve回调函数被执行");

        //创建一个微任务中，让onFulfilled或onRejected函数的执行时机晚于then函数的执行
        queueMicrotask(() => {
          //resolve回调函数执行，会把其状态改为'fulfilled'
          this.status = PROMISE_STATUS_FULFILLED;
          //promise对象的then方法可以多次调用，并且多次调用传入的多个onFulfilled或onRejected函数,在resolve或reject函数调用时，都会依次调用
          this.onFulfilledFns.forEach((fn) => {
            fn(value);
          });
        });
      }
    };
    const reject = (reason) => {
      //一旦promise对象的状态被修改为'fulfilled'或'rejected',再执行resolve或reject回调函数不会再改变其状态
      if (this.status === PROMISE_STATUS_PENDING) {
        this.reason = reason;
        console.log("reject回调函数被执行");

        //创建一个微任务中，让onFulfilled或onRejected函数的执行时机晚于then函数的执行
        queueMicrotask(() => {
          //reject回调函数执行，会把其状态改为'rejected'
          this.status = PROMISE_STATUS_REJECTED;
          //promise对象的then方法可以多次调用，并且多次调用传入的多个onFulfilled或onRejected函数,在resolve或reject函数调用时，都会依次调用
          this.onRejectedFns.forEach((fn) => {
            fn(reason);
          });
        });
      }
    };
    // executor执行函数在在通过new HyPromise(executor)创建promise对象时，立即被执行
    executor(resolve, reject);
  }

  //在类的prototype原型对象上定义then方法
  then(onFulfilled, onRejected) {
    //假如onFulfilled为null或undefined，给其一个默认函数
    onFulfilled = onFulfilled ?? ((value) => {});
    // 假如onFulfilled为一些基本数据类型,如'', 123, true,正则表达式，{name: 'why'},报错
    if (typeof onFulfilled !== "function") {
      throw new TypeError("onFulfilled must be a function");
    }

    //假如onRejected为null或undefined，给其一个默认函数
    onRejected = onRejected ?? ((reason) => {});
    // 假如onFulfilled为一些基本数据类型,如'', 123, true,正则表达式，{name: 'why'},报错
    if (typeof onRejected !== "function") {
      throw new TypeError("onRejected must be a function");
    }

    //执行then时，当前对象的状态为pending,就把onFulfilled或onRejected回调添加到onFulfilledFns或onRejectedFns数组里,
    //如果状态不为pending,就执行把传入的onFulfilled或onRejected回调执行了
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled);
      this.onRejectedFns.push(onRejected);
    } else if (this.status === PROMISE_STATUS_FULFILLED) {
      onFulfilled(this.value);
    } else if (this.status === PROMISE_STATUS_REJECTED) {
      onRejected(this.reason);
    }
  }
}
const promise = new HyPromise((resolve, reject) => {
  resolve(111);
  // reject("error msg");
});

promise.then(
  (res) => {
    console.log("res1", res);
  },
  (err) => {
    console.log("err1", err);
  }
);
promise.then(
  (res) => {
    console.log("res2", res);
  },
  (err) => {
    console.log("err2", err);
  }
);

setTimeout(() => {
  promise.then(
    (res) => {
      console.log("res3", res);
    },
    (err) => {
      console.log("err3", err);
    }
  );
}, 300);
