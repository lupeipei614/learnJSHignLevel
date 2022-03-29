/**
 * ES6引入了剩余参数(res parameter)
 *  可以将不定数量的参数放入到一个数组中
 *  如果最后一个参数是以...为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组
 *  剩余参数必须放到最后一个
 */
function foo(m,n,...arg) {
  console.log(m,n,arg)
}
foo(1,2,3,4,5,6,)
// 1 2 [ 3, 4, 5, 6 ]
/**
 * 剩余参数和arguments的区别：
 *  剩余参数只包含那些没有对应形参的实参，而arguments包含了传给函数的所有实参
 *  arguments对象并不是一个真正的数组，而rest参数是一个真正的数组，可以进行数组的所有操作
 *  arguments是早期的ECMAScript中为了方便去获取所有的参数提供的一个数据结构，res参数是ES6提供的并且希望依次替代arguments的
 * 
 */
 function bar(m,n,...arg) {
  console.log(arg)
  console.log(arguments)
}
bar(1,2,3,4,5,6,)
// [ 3, 4, 5, 6 ]
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }