//在浏览器环境下，
//独立函数调用，函数内部的this会默认被绑定为window
//跟函数的调用位置无关

//案例1
function foo1() {
  console.log(this); //window
}
function foo2() {
  console.log(this); //window
  foo1();
}
function foo3() {
  console.log(this); //window
  foo2();
}
foo3();

//案例2
var obj = {
  name: "why",
  foo: function () {
    console.log(this);
  },
};
var bar = obj.foo;
bar(); //window

//案例3
function foo() {
  console.log(this);
}
var obj1 = {
  name: "why",
  foo: foo,
};
var bar1 = obj.foo;
bar1(); //window

//案例4
function foo4() {
  return function baz() {
    console.log(this);
  };
}
var baz = foo4();
baz(); //window
