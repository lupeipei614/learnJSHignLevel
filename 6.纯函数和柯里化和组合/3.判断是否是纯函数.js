//sum是纯函数
function sum(num1, num2) {
  return num1 + num2;
}

//bar不是一个纯函数，因为修改了作用域外的变量
var num = 100;
function bar() {
  num++;
}

//baz不是一个纯函数，因为修改了作用域外的对象的属性
function baz(info) {
  info.name = "curry";
}
var obj = { name: "lily" };
baz(obj);



//test是一个纯函数
//因为相同的输入，产生相同的输出，并且没有副作用
function test(info) {
  return {
    ...info,
    age: 100
  }
}
test(obj)