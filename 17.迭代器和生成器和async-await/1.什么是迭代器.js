/**
 * 1.编写一个迭代器:
 *    迭代器是一个对象
 *    迭代器实现了特定的next方法
 *      next方法是一个无参函数或有一个参数的函数，
 *      返回值为一个对象，对象有done和value两个属性
 */

const iterator = {
  next() {
    return {
      done: false,
      value: "aaa",
    };
  },
};

// 调用迭代器的next方法，返回一个对象
console.log(iterator.next()); // { done: false, value: 'aaa' }

/**
 * 迭代器可以帮助我们对某个数据结构进行遍访
 *  而上面并没有实现遍访某个数据结构
 *  我们需要实现，在调用迭代器的next方法时，可以依次访问某个数据结构中的元素
 */
const names = ["lily", "koby", "curry", "coderwhy"];
let index = 0;
const namesIterator = {
  next() {
    if (index < names.length) {
      return { done: false, value: names[index++] };
    } else {
      return { done: true }; // done为true时，value可省略
      // return {done: true, value: undefined} 返回对象的value可以为undefined
      // return {done: true, value: '默认值'} 返回对象的value可以为任意默认值
    }
  },
};

console.log(namesIterator.next()); // { done: false, value: 'lily' }
console.log(namesIterator.next()); // { done: false, value: 'koby' }
console.log(namesIterator.next()); // { done: false, value: 'curry' }
console.log(namesIterator.next()); // { done: false, value: 'coderwhy' }
console.log(namesIterator.next()); // { done: true }
console.log(namesIterator.next()); // { done: true }



