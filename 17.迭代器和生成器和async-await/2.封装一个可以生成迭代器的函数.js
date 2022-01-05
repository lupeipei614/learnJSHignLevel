/**
 * 封装一个可为数组产生迭代器的函数
 * 返回一个迭代器对象
 */
function createArrayIterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return { done: false, value: arr[index++] };
      } else {
        return { done: true, value: undefined };
      }
    },
  };
}

const names = ["lily", "koby"];
const namesIterator = createArrayIterator(names);
console.log(namesIterator.next()); // { done: false, value: 'lily' }
console.log(namesIterator.next()); // { done: false, value: 'koby' }
console.log(namesIterator.next()); // { done: true, value: undefined }

const nums = [1, 3, 4];
const numsIterator = createArrayIterator(nums);
console.log(numsIterator.next()); // { done: false, value: 1 }
console.log(numsIterator.next()); // { done: false, value: 3 }
console.log(numsIterator.next()); // { done: false, value: 4 }
console.log(numsIterator.next()); // { done: true, value: undefined }

/**
 * 创建一个无限的迭代器
 */
function createNumbersIterator() {
  let index = 0;
  return {
    next() {
      return { done: false, value: index++ };
    },
  };
}
const numbersIterator = createNumbersIterator();
console.log(numbersIterator.next()); // { done: false, value: 0 }
console.log(numbersIterator.next()); // { done: false, value: 1 }
console.log(numbersIterator.next()); // { done: false, value: 2 }
console.log(numbersIterator.next()); // { done: false, value: 3 }
