var nums = [10, 5, 12, 45, 6];
/**
 * 数组的reduce方法：对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
 * arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 */
//reduce
//第一个参数为回调函数
//第二遍参数为初始值initValue
//如果不设置第二个参数，初始值，迭代从索引1开始，preReturn为数组索引为0的值
nums.reduce((preReturn, curItem) => {
  console.log(curItem);
  return preReturn + curItem;
});
//如果设置第二个参数，初始值，迭代从索引0开始，preReturn为initValue
nums.reduce((preReturn, curItem) => {
  console.log(curItem);
  return preReturn + curItem;
}, 0);
