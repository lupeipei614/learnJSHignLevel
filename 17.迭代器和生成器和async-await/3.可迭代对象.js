/**
 * 可迭代对象：
 *    是一个对象
 *    有一个Symbol.iterator属性，属性值为一个函数，执行函数会返回一个迭代器
 */

// 创建一个可迭代对象
const iterableObj = {
  values: ["koby", "lily"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.values.length) {
          return { done: false, value: this.values[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};

// 调用可迭代对象的Symbol.iterator方法可获取生成器
const iterator = iterableObj[Symbol.iterator]();

//执行生成器的next方法，可以遍访某个数据结构
console.log(iterator.next()); // { done: false, value: 'koby' }
console.log(iterator.next()); // { done: false, value: 'lily' }
console.log(iterator.next()); // { done: true, value: undefined }

/**
 * for of可以遍历的东西必须必须是一个可迭代对象
 *  1.它会通过调用对象的Symbol.iterator方法获取迭代器iterator
 *  2.通过执行迭代器的next方法去访问目标容器中的元素，取到next方法返回的对象的value值，赋值给item
 *  3.当next方法返回对象的done值为true,结束遍历目标
 */

const obj = {
  name: "why",
  age: 18,
};

//for of 遍历不同对象会报错，因为普通对象不是一个可迭代对象：TypeError: obj is not iterable
// for (const item of obj) {
//   console.log(item);
// }

for (const item of iterableObj) {
  console.log(item)
}