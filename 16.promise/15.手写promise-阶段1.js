/**
 * 手写promise-实现阶段1：
 *  实现功能：
 *    1.在通过new HyPromise(executor)创建promise对象时，executor执行函数立即被调用
 *    2.executor函数有两个参数，resolve和reject，这两个参数都是回调函数
 *    3.promise有一个状态，可以取值'pending','fulfilled','rejected',
 *    4.promise对象初始状态为'pending',resolve回调函数执行，会把其状态改为'fulfilled',reject回调函数执行，会把其状态改为'rejected'
 *    5.一旦promise对象的状态被修改为'fulfilled'或'rejected',再执行resolve或reject回调函数不会再改变其状态，即没有任何效果
 *    6.resolve回调函数执行时，接收一个参数value,reject回调函数执行时，接收一个参数reason
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

    const resolve = (value) => {
      //一旦promise对象的状态被修改为'fulfilled'或'rejected',再执行resolve或reject回调函数不会再改变其状态
      if (this.status === PROMISE_STATUS_PENDING) {
        //resolve回调函数执行，会把其状态改为'fulfilled'
        this.status = PROMISE_STATUS_FULFILLED;
        console.log("resolve回调函数被执行");
      }
    };
    const reject = (reason) => {
      //一旦promise对象的状态被修改为'fulfilled'或'rejected',再执行resolve或reject回调函数不会再改变其状态
      if (this.status === PROMISE_STATUS_PENDING) {
        //reject回调函数执行，会把其状态改为'rejected'
        this.status = PROMISE_STATUS_REJECTED;
        console.log("reject回调函数被执行");
      }
    };
    // executor执行函数在在通过new HyPromise(executor)创建promise对象时，立即被执行
    executor(resolve, reject);
  }
}
const promise = new HyPromise((resolve, reject) => {
  resolve(111);
  //reject('error msg')
});

