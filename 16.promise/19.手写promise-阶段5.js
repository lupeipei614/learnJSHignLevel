/**
 * 手写promise-实现阶段3：
 *  实现功能：
 *   14.如果promise的onFulfiled或onRejected回调的返回值：
 *      是一个普通值或对象，直接作为参数传给thenPromise的resolve
 *      是一个新的promise对象，thenPromise对象的状态由这个新的promise对象决定
 *      是一个实现了then方法的对象obj，then方法接收两个回调参数resolve,reject,
 *          obj的then方法会立即被执行，
 *          在then方法中执行了resolve，thenPromise对象的状态变为fulfilled,onFulfilled回调被执行，参数为then方法内部执行的resolve的参数
 *   15.实现promise对象的catch方法
 *        如果第一个promise对象的状态变为了rejected,而他的then方法执行时没传onRejected,
 *        此时then方法返回的thenPromise对象的状态也被改为rejected,thenPromise对象的onRejected回调被调用，参数为第一个promise对象被拒的原因
 *
 *        如果第一个promise对象的状态变为了fulfilled,而他的then方法执行时没传onFulfilled,
 *        此时then方法返回的thenPromise对象的状态也被改为fulfilled,thenPromise对象的onFulfilled回调被调用，参数为第一个promise对象resolve的参数
 *
 *        catch方法调用也返回一个新的promise对象
 *   16.实现promise对象的finally方法
 *        不管promise对象的状态变为fulfilled或rejected，finally传入的回调都会被执行
 *        finally没有参数
 *
 */
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    //onFulfilled或onRejected函数的返回值为一个新的promise对象
    if (result instanceof HyPromise) {
      result.then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    } else if (
      //onFulfilled或onRejected函数的返回值为一个实现了then方法的对象
      typeof result === "object" &&
      typeof result.then === "function"
    ) {
      result.then(resolve, reject);
    } else {
      ////onFulfilled或onRejected函数的返回值为一个普通值或对象
      resolve(result);
    }
  } catch (error) {
    reject(error);
  }
}
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
        // console.log("resolve回调函数被执行");

        //创建一个微任务中，让onFulfilled或onRejected函数的执行时机晚于then函数的执行
        queueMicrotask(() => {
          //解决这个bug:因为resolve和reject里改变promise对象的状态放在了微任务中，造成在new promise对象时，如果resolve和reject都调用的话，
          //resolve和reject函数中的微任务都会被添加，这是因为resolve和reject都是在主线程执行，此时promise的对象一直是pending，所以都添加到微任务中了
          if (this.status !== PROMISE_STATUS_PENDING) return;
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
        // console.log("reject回调函数被执行");

        //创建一个微任务中，让onFulfilled或onRejected函数的执行时机晚于then函数的执行
        queueMicrotask(() => {
          //解决这个bug:因为resolve和reject里改变promise对象的状态放在了微任务中，造成在new promise对象时，如果resolve和reject都调用的话，
          //resolve和reject函数中的微任务都会被添加，这是因为resolve和reject都是在主线程执行，此时promise的对象一直是pending，所以都添加到微任务中了
          if (this.status !== PROMISE_STATUS_PENDING) return;
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
    try {
      executor(resolve, reject);
    } catch (error) {
      //exector函数执行如果抛出异常，promise对象的状态变为rejected,onRejected回调会被执行，参数为此异常信息
      reject(error);
    }
  }

  //在类的prototype原型对象上定义then方法
  then(onFulfilled, onRejected) {
    //假如onFulfilled为null或undefined，给其一个默认函数
    onFulfilled =
      onFulfilled ??
      ((value) => {
        //如果第一个promise对象的状态变为了fulfilled,而他的then方法执行时没传onFulfilled,
        //此时then方法返回的thenPromise对象的状态也被改为fulfilled,thenPromise对象的onFulfilled回调被调用，参数为第一个promise对象resolve的参数
        return value;
      });
    // 假如onFulfilled为一些基本数据类型,如'', 123, true,正则表达式，{name: 'why'},报错
    if (typeof onFulfilled !== "function") {
      throw new TypeError("onFulfilled must be a function");
    }

    //假如onRejected为null或undefined，给其一个默认函数
    onRejected =
      onRejected ??
      ((reason) => {
        //实现promise对象的catch方法
        //如果第一个promise对象的状态变为了rejected,而他的then方法执行时没传onRejected,
        //此时then方法返回的thenPromise对象的状态也被改为rejected,thenPromise对象的onRejected回调被调用，参数为第一个promise对象被拒的原因
        throw new Error(reason);
      });
    // 假如onFulfilled为一些基本数据类型,如'', 123, true,正则表达式，{name: 'why'},报错
    if (typeof onRejected !== "function") {
      throw new TypeError("onRejected must be a function");
    }

    //then方法执行返回一个新的promise对象newPromise，不管上一个promise的onFulfilled还是onRejected回调函数执行，newPromise的resolve都执行，
    //执行时的参数为promise的onFulfilled或者onRejected回调函数执行的返回值，newPromise的状态都变为fulfilled,
    //除非上一个promise的onFulfilled或者onRejected回调函数执行过程中抛出异常，newPromise的reject执行时的参数为此异常信息，
    return new HyPromise((resolve, reject) => {
      //执行then时，当前对象的状态为pending,就把onFulfilled或onRejected回调添加到onFulfilledFns或onRejectedFns数组里,
      //如果状态不为pending,就执行把传入的onFulfilled或onRejected回调执行了
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push((value) => {
          execFunctionWithCatchError(onFulfilled, value, resolve, reject);
        });
        this.onRejectedFns.push((reason) => {
          execFunctionWithCatchError(onRejected, reason, resolve, reject);
        });
      } else if (this.status === PROMISE_STATUS_FULFILLED) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject);
      } else if (this.status === PROMISE_STATUS_REJECTED) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject);
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  finally(onFinally) {
    return this.then(
      (res) => {
        onFinally();
      },
      (err) => {
        onFinally();
      }
    );
  }
}
const promise = new HyPromise((resolve, reject) => {
  resolve(111);
  // reject("error msg");
  // throw new Error(" executor error");
});

// promise
//   .then(
//     (res) => {
//       console.log("res1", res);
//       return 111;
//     },
//     (err) => {
//       console.log("err1", err);
//       return "bbb";
//     }
//   )
//   .catch((err) => {
//     console.log("err2", err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

promise
  .catch((err) => {
    console.log("err1", err);
  })
  .then(
    (res) => {
      console.log("res2", res);
      return 111;
    },
    (err) => {
      console.log("err2", err);
      return "bbb";
    }
  )
  .finally(() => {
    console.log("finally");
  });
