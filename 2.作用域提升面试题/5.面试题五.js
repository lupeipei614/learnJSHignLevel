//全局上下文编译阶段  VO:GO { foo: 0x100}
//全局上下文执行阶段 VO:GO {foo: 0x100, b: 100}
function foo() {
  //父级作用域GO
  //函数foo执行上下文编译阶段VO:AO {a:undefined}
  //函数foo执行上下文编译阶段VO:AO {a:100}
  var a = (b = 100); //b定义到全局对象GO中
}
foo();
console.log(a) //报错：a is not defined，下面的代码不会执行
console.log(b); //100 如果注释掉console.log(a)， 输出100
