/**
 * promise对象的then方法：
 *  同一个promise对象可以多次调用then方法，
 *    resovle回调执行时，会把所有通过then方法传入的resolved回调函数都执行
 *    reject回调执行时，会把所有通过then方法传入的rejected回调函数都执行
 *
 * promise对象的then方法执行会返回一个新的promise对象thenPromise
 *  此promise对象thenPromise的状态由resolved或rejected回调函数的执行决定
 *
 * 当resolved函数return 一个普通的值或对象时，thenPromise对象resolve这个普通的值或对象
 * 当resolved函数return 一个新的promise对象时，thenPromise对象的状态由这个新的promise对象决定
 * 当resolved函数return 一个实现then方法的对象时，这个对象的then方法会立马执行，
 *  then方法内执行了resolve，thenPromise对象resolve这个resolve函数执行时传入的参数
 *  then方法内执行了reject，thenPromise对象reject这个reject函数执行时传入的参数
 */

// 下面是简写Promise类的基本使用的实现过程，用HyPromise这个自定义类表现
class HyPromise {
  constructor(executor) {
    this.fulfilledFns = [];
    this.rejectedFns = [];
    this.promiseStatus = "pending";
    //创建对象时，executor函数会被立即执行,并需要传入resolve,reject两个回调函数
    const resolve = (res) => {
      //1.res是普通的值或对象
      //2.res是一个promise对象
      //3.res是一个实现了then方法的对象
      queueMicrotask(() => {
        this.promiseStatus = "fulfilled";
        // resolve函数执行，会立马执行通过执行then方法，传入的fulfilled函数
        this.fulfilledFns.forEach((fn) => {
          // resolve执行时，接收的参数，会作为通过执行then方法传入的fulfilled函数的参数传入
          //2.res是一个promise对象
          if (res instanceof HyPromise) {
            
            res.then(
              (res) => {
                console.log('promise', res)
                fn(res);
              },
              (err) => {}
            );
          } else if (res instanceof Object && typeof res.then === "function") {
            res.then(
              (res) => {
                fn(res);
              },
              (err) => {}
            );
          } else {
            // console.log('普通类型或对象类型',res)
            fn(res);
          }
        });
      });
    };
    const reject = (err) => {
      queueMicrotask(() => {
        this.promiseStatus = "rejected";
        // reject函数执行，会立马执行通过执行then方法，传入的rejected函数
        this.rejectedFns.forEach((fn) => {
          // reject执行时，接收的参数，会作为通过执行then方法传入的rejected函数的参数传入
          fn(err);
        });
      });
    };
    executor(resolve, reject);
  }

  //给 HyPromise.prototype对象上添加一个then方法, 可以被所有的HyPromise对象调用
  // then方法接受两个回调函数
  then(fulfilled, rejected) {
    let fulfilledRes;
    //把通过执行then传入的回调存起来，以便resolve和reject回调函数执行的时候调用
    this.fulfilledFns.push((res) => {
      //获取fulfilled函数执行的结果
      fulfilledRes = fulfilled(res);
      // console.log('res', res)
    });
    this.rejectedFns.push(rejected);

    //then方法执行会返回一个新的promise对象
    return new HyPromise((resolve, reject) => {
      setTimeout(() => {
        // fulfilled函数执行的结果被作为参数传给返回的新promise对象的resolve函数
        resolve(fulfilledRes);
      }, 100);
    });
  }
}

// debugger;
const promise = new HyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "why", age: 18 });
  });
});

//promise.then方法执行返回一个promise对象
//resolved函数执行染回一个普通的值或对象，这个值会作为thenPromise对象的resolve函数的参数传进去
const thenPromise = promise.then(
  (res) => {
    return "aaa";
  },
  (err) => {}
);

thenPromise.then(
  (res) => {
    console.log(res);
  },
  (err) => {}
);

//执行结果：aaa

//resolved函数执行染回一个新的promise对象newPromise，这个值会作为thenPromise对象的resolve函数的参数传进去
//thenPromise对象的状态由这个新对象newPromise决定
const newPromise = new HyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "why", age: 18 });
  });
});
const thenPromise1 = promise.then(
  (res) => {
    return newPromise;
  },
  (err) => {}
);

thenPromise1.then(
  (res) => {
    console.log(res);
  },
  (err) => {}
);

//执行结果：{ name: "why", age: 18 }

//resolved函数执行返回一个实现了then方法的对象，这个对象的then方法会立即被执行，
//then方法中执行了resolve，则thenPromise对象的状态变为fulfilled,
//then方法中执行了reject，则thenPromise对象的状态变为rejected,

const thenPromise2 = promise.then(
  (res) => {
    return {
      then(resolve, reject) {
        resolve("then");
      },
    };
  },
  (err) => {}
);

thenPromise2.then(
  (res) => {
    console.log(res);
  },
  (err) => {}
);

//执行结果：then


