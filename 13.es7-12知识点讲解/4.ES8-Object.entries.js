/**
 * Object.entries()方法
 *  返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致
 */

const obj = {
  name: "why",
  age: 18,
};
const entries = Object.entries(obj);
console.log(entries); //[ [ 'name', 'why' ], [ 'age', 18 ] ]

//遍历对象的方法一：
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
// name: why
// age: 18

//方法二：
for (const key in obj) {
  console.log(key);
}
// name
// age


// 不可枚举属性不会返回
const obj1 = Object.create(
  {},
  {
    getFoo: { //此属性不可枚举
      value() {
        return this.foo;
      },
    },
  }
);
obj1.foo = 'aaa'
console.log(Object.entries(obj1)) //[ [ 'foo', 'aaa' ] ]

//也可以处理字符串
console.log(Object.entries("abc")); //[ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
//也可以处理数组
console.log(Object.entries(['why','lily'])) //[ [ '0', 'why' ], [ '1', 'lily' ] ]
