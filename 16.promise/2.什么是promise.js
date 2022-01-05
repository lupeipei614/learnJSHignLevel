/**
 * Promise是一个类，可以翻译成承诺、许诺、期约
 * 通过new Promise(exector)创建Promise对象时，我们需要传入一个executor回调函数
 *  这个函数会在创建Promise对象时被立即执行
 *  执行executor函数时，需要给其传两个回调函数，第一个为resolve函数，第二个为reject函数
 *  resolve和reject函数都可以接受一个参数
 * promise对象有一个then方法，执行then方法需要传入两个回调函数,fulfilled函数和rejected函数
 * 在executor函数内部，
 *  如果执行了resolve回调函数，则通过then方法传入的fulfilled函数会被执行，resolve执行时传递的参数会作为参数，传给fulfilled函数
 *  如果执行了reject函数，则通过then方法传入的rejected函数会被执行，reject执行时传递的参数会作为参数，传给rejected函数
 * 可以多次执行promise对象的then函数，注册多个fulfilled和rejected函数
 *  通过执行promise对象的then函数，注册的多个fulfilled和rejected函数，在resolve或reject函数被调用时，所有的fulfilled或rejected函数都会被调用
 */

// 下面是简写Promise类的基本使用的实现过程，用HyPromise这个自定义类表现
class HyPromise {
  constructor(executor) {
    this.fulfilledFns = [];
    this.rejectedFns = [];
    //创建对象时，executor函数会被立即执行,并需要传入resolve,reject两个回调函数
    const resolve = function (res) {
      // resolve函数执行，会立马执行通过执行then方法，传入的fulfilled函数
      this.fulfilledFns.forEach((fn) => {
        // resolve执行时，接收的参数，会作为通过执行then方法传入的fulfilled函数的参数传入
        fn(res);
      });
    };
    const reject = function (err) {
      // reject函数执行，会立马执行通过执行then方法，传入的rejected函数
      this.rejectedFns.forEach((fn) => {
        // reject执行时，接收的参数，会作为通过执行then方法传入的rejected函数的参数传入
        fn(err);
      });
    };
    executor(resolve, reject);
  }

  //给 HyPromise.prototype对象上添加一个then方法, 可以被所有的HyPromise对象调用
  // then方法接受两个回调函数
  then(fulfilled, rejected) {
    //把通过执行then传入的回调存起来，以便resolve和reject回调函数执行的时候调用
    this.fulfilledFns.push(fulfilled);
    this.rejectedFns.push(rejected);
  }
}

// 创建一个Promise对象
const promise = new Promise((resolve, reject) => {
  // 模拟异步请求
  setTimeout(() => {
    //请求成功
    resolve("请求结果");
    //请求失败
    // reject('失败原因')
  }, 3000);
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

// 可以多次执行promise对象的then函数，注册多个fulfilled和rejected函数
promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
