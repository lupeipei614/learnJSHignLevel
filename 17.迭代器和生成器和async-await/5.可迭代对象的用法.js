/**
 * 可迭代对象用法：
 *  for of
 *  展开运算符...
 *  解构
 *  创建一些其他对象：作为new Set()的参数，Array.from()的参数
 */

const iterableObj = {
  values: ["lily", "koby"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.values.length) {
          return { done: false, value: this.values[index++] };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// 展开运算符
const arr = ["abc", "cde"];
const newArr = [...arr, ...iterableObj];
console.log(newArr); //[ 'abc', 'cde', 'lily', 'koby' ]

// 对象虽然不是可迭代对象，但依然可以使用展开运算符展开，
// 这是ES9(ES2018)新增的特性，内部对对象做了特殊处理，用的不是迭代器
const obj = { name: "why", age: 18 };
const newObj = { ...obj };
console.log(newObj); //{ name: 'why', age: 18 }

// 解构
const [str1, str2] = arr;
console.log(str1, str2); //abc cde
//对象的解构依然是ES9新增语法，内部对对象做了特殊处理，用的不是迭代器
const { name, age } = obj;
console.log(name, age); // why 18

// 创建一些其他对象：作为new Set()的参数，Array.from()的参数

//1.把数组转换为Set对象
const set1 = new Set(iterableObj);
const set2 = new Set(arr);

console.log(set1); // Set(2) { 'lily', 'koby' }
console.log(set2); // Set(2) { 'abc', 'cde' }

//2.把类数组arguments转换为数组
function sum(a, b) {
  const args = Array.from(arguments);
  console.log(args); // [ 1, 2 ]
  return a + b;
}

sum(1, 2);

// Promise.all和Promise.race的参数为一个可迭代对象
Promise.all(iterableObj).then((res) => {
  console.log(res); // [ 'lily', 'koby' ]
});
