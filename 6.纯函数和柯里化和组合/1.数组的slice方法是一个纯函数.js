/**
 * 数组的slice方法是一个纯函数
 * 对于同一个数组，调用slice方法，给其传入确定的start和end，它给我们返回确定的值
 * 不会修改原来数组
 */

var names = ["lily", "curry", "why", "kobe"];
var newNames = names.slice(0, 2);
console.log(newNames); //["lily", "curry"]
console.log(names); //["lily", "curry", "why", "kobe"]


