//使用call/apply/bind可以显示的为函数执行上下文中的this绑定对象
function foo() {
  console.log(this);
}
var obj = {
  name: "why",
};

//foo独立调用，函数执行上下文中的this会被默认绑定为全局对象wiondow
//如果想在函数foo执行时，其创建的执行上下文中的this绑定为obj对象，但时又不想给obj对象添加foo方法
//可以使用call/apply/bind显示的把foo函数执行上下文中的this绑定为obj对象
foo.call(obj); //obj对象
foo.apply(obj); //obj对象


//foo.bind(obj)执行的结果会返回一个全新的函数，返回的函数的执行上下文的this被显示的绑定为了obj
var bar = foo.bind(obj)
bar() //obj对象
