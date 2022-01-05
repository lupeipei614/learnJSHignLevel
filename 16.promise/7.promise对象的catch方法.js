/**
 * promise对象的rejected回调
 *  当promise的reject回调调用时，会把当前promise对象状态改为rejected,执行rejected回调，reject执行时的参数会作为rejected的参数传入
 *  当executor函数执行中抛出异常时，会把当前promise对象状态改为rejected,执行rejected回调，异常信息会作为rejected的参数传入
 */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("msg error");
  });
});

promise.then(
  (res) => {
    return "aaa";
  },
  (err) => {
    console.log(err);
  }
);

//执行结果：msg error

//当executor函数执行过程中抛出异常，当前promise的状态会变为rejected,rejected回调被调用，异常信息会作为rejected的参数传入
const promise1 = new Promise((resolve, reject) => {
  throw new Error("错误信息");
});

promise1.then(
  (res) => {
    return "aaa";
  },
  (err) => {
    console.log(err);
  }
);
// 执行结果：
// Error: 错误信息
//     at G:\03.教学视频\0.javascript-王红元\js高级\code\16.promise\7.promise对象的catch方法.js:25:9
//     at new Promise (<anonymous>)
//     at Object.<anonymous> (G:\03.教学视频\0.javascript-王红元\js高级\code\16.promise\7.promise对象的catch方法.js:24:18)

// catch方法
promise1.then(undefined, (err) => {
  console.log(err);
});

//上面代码可以简写为如下：
promise1.catch((err) => {
  console.log(err);
});

//catch的特殊性
// 1.下面代码，promise1的executor函数执行过程中抛出了异常，promise1.then方法中没有注册rejected回调函数，则执行catch的回调函数
promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// Error: 错误信息
// at G:\03.教学视频\0.javascript-王红元\js高级\code\16.promise\7.promise对象的catch方法.js:25:9
// at new Promise (<anonymous>)
// at Object.<anonymous> (G:\03.教学视频\0.javascript-王红元\js高级\code\16.promise\7.promise对象的catch方法.js:24:18)

//下面代码，promise2的状态变为了fulfilled,执行了fulfilled函数，
//fulfilled函数中返回的promise对象状态变为了rejected,则promise2.then方法返回的promise对象状态也变成了rejected,则执行catch的回调函数
const promise2 = new Promise((resolve, reject) => {
  resolve(111);
});
promise2
  .then((res) => {
    return new Promise((resolve, reject) => {
      reject("报错了");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//promise2的状态变为了fulfilled,执行了fulfilled函数，
//fulfilled函数执行过程中抛出异常,则promise2.then方法返回的promise对象状态变成了rejected,则执行catch的回调函数
const promise3 = new Promise((resolve, reject) => {
  resolve(111);
});
promise3
  .then((res) => {
    throw new Promise("fulfilled函数执行报错了");
  })
  .catch((err) => {
    console.log(err);
  });

// TypeError: Promise resolver fulfilled函数执行报错了 is not a function
//   at new Promise (<anonymous>)
//   at G:\03.教学视频\0.javascript-王红元\js高级\code\16.promise\7.promise对象的catch方法.js:86:11

//拒绝捕获问题
const promise4 = new Promise((resolve, reject) => {
  reject("报错了啊啊啊");
});
promise4.then((res) => {
  console.log(res);
});
promise4.catch((err) => {
  console.log(err);
});
// Unhandled promise rejection.关于这个报错问题，意思是没有拒绝捕获回调。应该改为下面
const promise5 = new Promise((resolve, reject) => {
  reject("报错了啊啊啊");
});
promise5
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
promise5.catch((err) => {
  console.log(err);
});
