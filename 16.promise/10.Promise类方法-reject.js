const promise = Promise.reject({ name: "lily" });
//相当于
const promise1 = new Promise((resolve, reject) => {
  reject({ name: "lily" });
});

//下面为了解决没有捕获拒绝回调的报错
promise.catch((err) => {});
promise1.catch((err) => {});

//Promise.reject的参数不管是什么类型，都原样传给promise的rejected
const promise3 = new Promise((resolve, reject) => {
  resolve(111)
});
const promise2 = Promise.reject(promise3);
promise2
  .then((res) => {
    console.log(res); 
  })
  .catch((err) => {
    console.log(err);
  });
// Promise { 111 }  promise对象被原样输出了