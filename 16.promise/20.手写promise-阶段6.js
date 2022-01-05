/**
 * 手写promise-实现阶段3：
 *  实现功能：
 *    Promise类方法resolve方法
 *    Promise类方法reject方法
 *    Promise类方法all方法
 *        参数为一个数组，如果数组的某个元素不是promise对象，则把其转换为resolve此元素的promise对象，即使此元素重新赋值为 Promise.resolve(此元素)
 *        返回一个新的promise对象allPromise，
 *        只有参数数组中的所有promise对象的状态都变为fulfilled，allPromise的状态才变为fulfilled,
 *        allPromise对象的resolve回到的参数是按照数组中promise对象状态改变的先后顺序，存储每个promise对象的结果的数组
 *    Promise类方法allSettled方法
 *        参数为一个数组，如果数组的某个元素不是promise对象，则把其转换为resolve此元素的promise对象，即使此元素重新赋值为 Promise.resolve(此元素)
 *        返回一个新的promise对象allSettledPromise，
 *        当arr中所有的promise对象的状态都敲定后，不管是变为fulfilled还是rejected,allSettledPromise对象的状态都会变为fulfilled,执行resolved回调,
 *        resolved回调的参数为一个数组，是按照数组中promise对象状态改变的先后顺序，返回每个promise对象的结果，
 *        数组中每个元素为一个对象，这个对象有两个属性，status和value/reason
 *        status为这个promise对象的状态，value为这个对象被对象的结果，reason为被拒绝的原因
 *    Promise类方法race方法
 *        参数为一个数组，如果数组的某个元素不是promise对象，则把其转换为resolve此元素的promise对象，即使此元素重新赋值为 Promise.resolve(此元素)
 *        返回一个新的promise对象racePromise，
 *        当前promise对象的状态由数组中第一个敲定状态的promise对象决定
 *    Promise.any(arr)
 *        参数是一个数组
 *        数组的元素建议是一个promise对象，如果不是，会使用Promise.resolve把其转为promise对象
 *        any方法执行返回一个新的promise对象anyPromise,
 *        只要arr中一个的promise对象的状态变为了fulfilled，anyPromise对象的状态都会变为fulfilled,执行resolved回调,
 *        resolved回调的参数为状态首先变为fulfilled的promise对象的resolve值，
 *        如果数组中所有的promise对象最终都变为rejected,anyPromise对象的状态都会变为rejected,执行rejected回调,
 *        rejected回调的参数为一个合计错误aggregateError,可以通过aggregateError.errors获得一个存储着所有promise被拒原因的数组
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
        if (reason instanceof AggregateError) {
          //为了解决Promise类的any方法返回的promise对象状态变为rejected时，在catch中没法获取err.erros的问题
          throw new AggregateError(reason.errors);
        } else {
          throw new Error(reason);
        }
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

  static resolve(value) {
    return new HyPromise((resolve, reject) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new HyPromise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(promiseArr) {
    return new HyPromise((resolve, reject) => {
      const values = [];
      promiseArr.forEach((promise) => {
        if (!(promise instanceof HyPromise)) {
          promise = HyPromise.resolve(promise);
        }
        promise.then(
          (res) => {
            values.push(res);
            if (values.length === promiseArr.length) {
              resolve(values);
            }
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }
  static allSettled(promiseArr) {
    return new HyPromise((resolve, reject) => {
      const values = [];
      promiseArr.forEach((promise) => {
        if (!(promise instanceof HyPromise)) {
          promise = HyPromise.resolve(promise);
        }
        promise.then(
          (res) => {
            values.push({
              status: PROMISE_STATUS_FULFILLED,
              value: res,
            });
            if (values.length === promiseArr.length) {
              resolve(values);
            }
          },
          (err) => {
            values.push({
              status: PROMISE_STATUS_REJECTED,
              reason: err,
            });
            if (values.length === promiseArr.length) {
              resolve(values);
            }
          }
        );
      });
    });
  }
  static race(promiseArr) {
    return new HyPromise((resolve, reject) => {
      promiseArr.forEach((promise) => {
        if (!(promise instanceof HyPromise)) {
          promise = HyPromise.resolve(promise);
        }
        promise.then(resolve, reject);
      });
    });
  }

  static any(promiseArr) {
    return new HyPromise((resolve, reject) => {
      const reasons = [];
      promiseArr.forEach((promise) => {
        if (!(promise instanceof HyPromise)) {
          promise = HyPromise.resolve(promise);
        }
        promise.then(resolve, (err) => {
          reasons.push(err);
          if (reasons.length === promiseArr.length) {
            reject(new AggregateError(reasons));
          }
        });
      });
    });
  }
}

HyPromise.resolve(111).then((res) => {
  console.log(res);
});
HyPromise.reject(222).catch((err) => {
  console.log(err);
});

const p1 = new HyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 100);
});

const p2 = new HyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(222);
  }, 200);
});

const p3 = new HyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(333);
  }, 300);
});

const p4 = new HyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("error msg");
  }, 300);
});
const p5 = new HyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("error error");
  }, 300);
});
HyPromise.all([p2, p1, p3, "aaa", "111"])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

HyPromise.allSettled([p2, p1, p3, p4, p5, "aaa", "111"]).then((res) => {
  console.log(res);
});

HyPromise.any([p5, p4]).then(
  (res) => {
    console.log(666, res);
  },
  (err) => {
    // console.log(err instanceof AggregateError);
    console.log(555, err.errors);
  }
);

HyPromise.any([p5, p4])
  .then((res) => {
    console.log(666, res);
  })
  .catch((err) => {
    console.log(554, err.errors);
  });
