//1.显示绑定优先级高于隐式绑定
//案例1
var obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  },
};

obj.foo.call("call"); // this -> String{"call"}

//案例2
function foo() {
  console.log(this);
}
var obj1 = {
  name: "obj",
  foo: foo.bind("coder"),
};
obj1.foo(); // this -> String{"coder"}
