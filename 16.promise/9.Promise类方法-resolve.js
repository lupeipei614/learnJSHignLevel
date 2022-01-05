//封装一个方法，可以把一个值转换为promise对象
function toPromise(val) {
  return new Promise((resolve, reject) => {
    resolve(val);
  });
}
const objPromise = toPromise({ name: "lily", age: 18 });

const promise = Promise.resolve(111);
//相当于
const promise1 = new Promise((resolve, reject) => {
  resolve(111);
});


//Promise.resolve的传参处理，遵循promise对象的resolve传参处理