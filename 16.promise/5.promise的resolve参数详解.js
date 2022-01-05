/**
 * promise的resolve回调函数的参数
 *  1.普通的值或对象
 *    promise对象的状态由pending修改为fulfilled
 *    此参数直接作为resolved回调的参数传入
 *  2.传入一个promise对象newPromise
 *    那么当前promise对象的状态由这个新的promise对象newPromise决定,即当前promise对象的状态移交给了这个这个新的promise对象newPromise
 *    newPromise对象的resolve执行时，传的参数，会作为当前对象的fulfilled回调的参数传入
 *    newPromise对象的reject执行时，传的参数，会作为当前对象的rejected回调的参数传入
 *  3.传入一个实现了then方法的对象obj（即这个对象实现了thenable接口）
 *    这个then方法接受两个参数，resolve,reject回调函数
 *    当前对象obj的then方法会被立即执行，promise的resolve/reject回调函数会作为then方法的参数传入
 *    在then方法内部，
 *      如果resolve被执行，当前promise对象的状态会被修改为fulfilled,传的参数，会作为当前对象的fulfilled回调的参数传入
 *      如果reject被执行，当前promise对象的状态会被修改为rejected,传的参数，会作为当前对象的rejected回调的参数传入
 *
 */

// resolve参数为一个普通的值或对象
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "why", age: 18 });
  });
});
promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
// 执行结果：{ name: 'why', age: 18 }

// resolve参数为一个新的promise对象
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  });
});
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(newPromise);
  });
});
promise1.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
// 执行结果：111

// resolve参数为一个实现了then方法的对象
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      then(resolve, reject) {
        //then方法会立即被执行
        resolve("then");
      },
    });
  });
});
promise2.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
// 执行结果：then
