//2.new绑定优先级高于隐式绑定
//案例1
var obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  },
};

var f = new obj.foo() //this -> foo {}