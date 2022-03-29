/**
 * flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
 * 它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
 * const newArr = arr.flatMap(item => item)
 * 相当于下面：
 * const newArr = arr.map(item => item).flat()
 *
 * 返回值：
 *  一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为1。
 */

const arr = [1, 2, [3, 4], [5, [6]]];
const newArr1 = arr.map((item) => item);
const newArr2 = arr.flatMap((item) => item);
console.log(newArr1); // [1, 2, [3, 4], [5, [6]]]
console.log(newArr2); // [1, 2, 3, 4, 5, [6]]

const arr1 = ["it's Sunny in", "", "California"];
const newArr3 = arr1.map((item) => item.split(" "));
console.log(newArr3); // [ [ "it's", 'Sunny', 'in' ], [ '' ], [ 'California' ] ]
const newArr4 = arr1.flatMap((item) => item.split(" "));
console.log(newArr4); // [ "it's", 'Sunny', 'in', '', 'California' ]

// flatMap可以用于在一个 map() 期间增加或去除一些项
//如下，想在3和4之前添加一个字符串'aaa',并且删除数字6
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const newArr5 = arr2.flatMap((item) => {
  let res = item;
  if (item === 3) {
    res = [item, "aaa"];
  }
  if (item === 6) {
    res = [];
  }
  return res;
});
console.log(newArr5); //[1, 2, 3, "aaa", 4, 5, 7];
