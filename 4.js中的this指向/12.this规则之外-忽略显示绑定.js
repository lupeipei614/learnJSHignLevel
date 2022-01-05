function foo() {
  console.log(this);
}
foo.apply("aaa"); //this -> String {"aaa"}
foo.apply({}); //this -> {}

//apply/call/bind内部，做了判断，如果第一个参数为undefined或null, 给函数执行上下文内部的this绑定为window
foo.apply(undefined); //this -> window
foo.apply(null); //this -> window
foo.call(undefined); //this -> window
foo.call(null); //this -> window

var bar = foo.bind(null);
var baz = foo.bind(undefined);
bar(); //this -> window
baz(); //this -> window
