/**
**异步函数执行返回一个promise对象**
**该promise对象的fulfilled回调的执行时机是：**
+ 异步函数执行中遇到return或函数执行结束, 如果没有return,默认return undefined
**异步函数返回值：**
+ 为普通值，异步函数执行返回的promise对象的状态变为fulfilled，返回值会作为fulfilled回调的参数传入
+ 为promise对象，此promise对象的状态会决定异步函数执行返回的promise对象的状态，
+ 为一个实现了then接口的对象，
  + 该对象的then方法会立即执行，
    +  then方法的resovle函数调用，异步函数执行返回的promise对象的状态变为fulfilled
    +  then方法的reject函数调用，异步函数执行返回的promise对象的状态变为rejected
 *
 *
 */

async function foo() {
  console.log("foo start");
  console.log("foo 业务代码执行");
  console.log("foo end");
}


//异步函数中没有return
// const promise = foo();
// promise.then(res => {
//   console.log(res)
// })
// foo start
// foo 业务代码执行
// foo end
// undefined

//异步函数返回一个实现了then接口的对象
async function baz() {
  console.log("baz start");
  console.log("baz 业务代码执行");
  console.log("baz end");
  return {
    then(resolve, reject) {
      resolve("then");
    },
  };
}
// const promise1 = baz();
// promise1.then((res) => {
//   console.log(res);
// });

// baz start
// baz 业务代码执行
// baz end
// then


// 异步函数返回一个promise对象
async function bar() {
  console.log("bar start");
  console.log("bar 业务代码执行");
  console.log("bar end");
  return new Promise((resolve, reject) => {
    resolve('bar')
  })
}
const promise2 = bar();
promise2.then((res) => {
  console.log(res);
});

// bar start
// bar 业务代码执行
// bar end
// bar