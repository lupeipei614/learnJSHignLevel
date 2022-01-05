//2.new绑定优先级高于显式绑定
//案例1
function foo() {
  console.log(this);
}

var bar = foo.bind("aaa");
var obj = new bar(); //this -> foo {}
