/**
 * 函数的length属性：
 *  为函数的形参的个数
 *  如果某个参数有默认值，此参数及其后的参数，不计算在length中
 */
function sum(m, n) {
  return m + n;
}
console.log(sum.length); //2

function mul(x, y, z) {
  return x * y * z;
}
console.log(mul.length); //3

function foo(x, y, z = 1) {}
console.log(foo.length); //2 如果某个参数有默认值，此参数及其后的参数，不计算在length中

function bar(x, y, z = 1, a, b, c) {}
console.log(bar.length); //2 如果某个参数有默认值，此参数及其后的参数，不计算在length中
