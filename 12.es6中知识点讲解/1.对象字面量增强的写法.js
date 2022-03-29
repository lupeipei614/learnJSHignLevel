const name = "why";
const age = 18;
const friend = "friend";

const obj = {
  name: name, //原先的写法
  age, //属性简写
  foo: function () {
    console.log(obj.name);
  },
  getAge() {
    //方法的简写
    return this.age;
  },
  [friend + "1"]: "lily", //计算属性
};
obj[friend + "2"] = "koby";
console.log(obj);

// {
//   name: 'why',
//   age: 18,
//   foo: [Function: foo],
//   getAge: [Function: getAge],
//   friend1: 'lily',
//   friend2: 'koby'
// }
