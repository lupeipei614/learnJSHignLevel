/**
 * promise对象有三种状态:
 * 待定(pending):初始状态，即没有被兑现，也没有被拒绝
 * 已兑现(fulfilled): 意味着操作成功完成
 * 已拒绝(rejected):意味着操作失败
 *
 * executor函数中的resolve回调被执行，会把promise对象的状态敲定为fulfilled已兑现状态
 * executor函数中的reject回调被执行，会把promise对象的状态敲定为rejected已拒绝状态
 *
 * 执行then方法中的resolved或rejected函数被执行时，promise对象的状态已经被修改了
 *
 * promise对象的状态一旦敲定，就不会被再次修改，即使在executor函数中再调用reject或resolve回到函数，也相当于没有执行
 * exector函数中resolve或reject函数执行，promise对象的状态被敲定，并不会影响下面的代码执行
 *
 */

// 创建一个Promise对象
const promise = new Promise((resolve, reject) => {
  // 此时promise对象的状态为pending

  // 模拟异步请求
  setTimeout(() => {
    //请求成功:resolve函数的执行，把promise对象的状态修改为fulfilled
    resolve("请求结果");

    resolve(
      "promise对象的状态一旦被敲定，并不能再被修改，再次执行resolve或reject函数，什么效果都没有"
    );

    console.log(
      "执行resolve函数，promise对象的状态被敲定，并不影响下面代码的执行"
    );
    //请求失败:reject函数的执行，把promise对象的状态修改为rejected
    // reject('失败原因')
  }, 3000);
});

promise.then(
  (res) => {
    // 此时，promise对象的状态已经改为fulfilled
    console.log(res);
  },
  (err) => {
    // 此时，promise对象的状态已经改为rejected
    console.log(err);
  }
);
