/**
 * flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
 *  语法：let newArr = arr.flat([depth])
 *  depth 指定要提取嵌套数组的结构深度，默认值为 1。使用 Infinity，可展开任意深度的嵌套数组
 */
const arr1 = [1, 2, 3, [4, 5, 6]];
console.log(arr1.flat()); // [ 1, 2, 3, 4, 5, 6 ]

const arr2 = [1, 2, 3, [[[4, 5, 6]]]];
console.log(arr2.flat()); // [1, 2, 3, [[4, 5, 6]]]
console.log(arr2.flat(2)); // [1, 2, 3, [4, 5, 6]]
console.log(arr2.flat(3)); // [1, 2, 3, 4, 5, 6]
 

let arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr3.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// flat() 方法会移除数组中的空项
const arr4 = [1,2,,3,4] 
console.log(arr4) // [ 1, 2, <1 empty item>, 3, 4 ]
console.log(arr4.flat()) // [ 1, 2, 3, 4 ]