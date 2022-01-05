//封装一个函数，此函数执行返回一个目标数组的迭代器
// function createArrayIterator(arr) {
//   let index = 0;
//   return {
//     next() {
//       if (index < arr.length) {
//         return { done: false, value: arr[index++] };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// }

//创建一个生成器函数，函数执行返回一个目标数组的生成器
function* createArrayIterator(arr) {
  //方法一：
  // for (const item of arr) {
  //   yield item;
  // }

  //方法二：
  // 在生成器函数中使用yield* 后面跟可迭代对象相当于上面代码
  yield* arr;
}

const names = ["lily", "koby"];
const namesIterator = createArrayIterator(names);
console.log(namesIterator.next()); // { done: false, value: 'lily' }
console.log(namesIterator.next()); // { done: false, value: 'koby' }
console.log(namesIterator.next()); // { done: true, value: undefined }

//创建一个函数，这个函数可以迭代一个范围内的数字
// function createRangeIterator(start, end) {
//   let index = start;
//   return {
//     next() {
//       if (index < end) {
//         return { done: false, value: index++ };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// }

//上面可以简写如下
function* createRangeIterator(start, end) {
  let index = start;
  while (index < end) {
    yield index++;
  }
}
const rangeIterate = createRangeIterator(10, 15);
console.log(rangeIterate.next());
console.log(rangeIterate.next());
console.log(rangeIterate.next());
console.log(rangeIterate.next());
console.log(rangeIterate.next());
console.log(rangeIterate.next());

//重写自定义类
class Classroom {
  constructor(name, address, students) {
    this.name = name;
    this.address = address;
    this.students = students;
  }

  add(stu) {
    this.students.push(stu);
  }

  [Symbol.iterator] = function* () {
    yield* this.students;
  };
}
