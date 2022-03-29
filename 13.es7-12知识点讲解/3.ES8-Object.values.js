/**
 * Object.values()方法
 *  返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同
 */

const obj = {
  name: "why",
  age: 18,
};
console.log(Object.values(obj)); //['why', 18]

//类数组，按照键名升序返回
const obj1 = {
  100: "why",
  2: 18,
  7: 1.88,
};
console.log(Object.values(obj1)); //[18,1.88,'why']

//只返回可枚举属性的值
const my_obj = Object.create(
  {},
  {
    getFoo: {
      //不可枚举
      value: function () {
        return this.foo;
      },
    },
  }
);
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']

//也可以处理字符串
console.log(Object.values("abc")); //[ 'a', 'b', 'c' ]


//如果传入一个数组，则把此数组返回
console.log(Object.values(['why',18])) //[ 'why', 18 ]