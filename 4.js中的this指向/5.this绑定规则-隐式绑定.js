//函数以对象的方法被调用，js引擎会在函数的执行上下文中，把当前调用此函数的对象，绑定到this上

//案例1
function foo() {
  console.log(this);
}
var obj = {
  name: "why",
  foo: foo,
};

obj.foo(); //this

//案例二
var person = {
  name: "why",
  eatting: function () {
    console.log(this);
  },
  running: function () {
    console.log(this);
  },
};
person.eatting(); //person对象
person.running(); //person对象

//案例三
function foo1() {
  console.log(this);
}
var obj1 = {
  name: "why",
  foo: foo,
};
var obj2 = {
  name: "why",
  foo: obj1.foo,
};
obj2.foo(); //obj2对象
