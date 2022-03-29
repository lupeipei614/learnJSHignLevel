/**
 * ES5及之前给函数参数设置默认值的方式:
 */
function foo(m, n) {
  m = m || "aaa";
  n = n || "bbb";
  console.log(m, n);
}
//写法麻烦，阅读性差 且有bug
foo(0, ""); // aaa bbb
foo(null, NaN); // aaa bbb
//像0 ''  null  NaN 这些被转换为布尔值为false的值，作为参数传给foo，依然会取默认值

/**
 * ES6给函数参数设置默认值:
 *  至于在传入的参数为undefined时，才会使用参数的默认值
 *  函数调用时，不传参数，默认传入的参数就是undefined
 */
function bar(m = "aaa", n = "bbb") {
  console.log(m, n);
}
bar(0, ""); // 0 ''
bar(null, NaN); // null, NaN
bar(undefined, undefined); // aaa bbb
bar(); // aaa bbb

//对象参数和默认值以及解构
function printInfo({ name, age } = { name: "why", age: 18 }) {
  console.log(name, age);
}
printInfo(); //why 18
printInfo({ name: "kobe", age: 40 }); //kobe 40

//另一种写法
function printInfo1({ name = "why", age = 18 } = {}) {
  console.log(name, age);
}
printInfo1(); //why 18
printInfo1({ name: "kobe", age: 40 }); //kobe 40

//有默认值的参数最好放到最后
function baz(m = "aaa", n, z) {
  console.log(m, n, z);
}
baz(undefined, "bbb", "ccc"); //aaa bbb ccc

function baz1(n, z, m = "aaa") {
  console.log(m, n, z);
}
baz1("bbb", "ccc"); //aaa bbb ccc
