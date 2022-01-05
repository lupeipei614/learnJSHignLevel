//全局上下文编译阶段  VO:GO {a:undefined, foo: 0x100}
//全局上下文执行阶段 VO:GO {a: 100, foo: 0x100}
var a = 100;
function foo() {
  //父级作用域：GO
  //foo函数执行上下文编译阶段： VO:AO {a:undefined}
  //foo函数执行上下文执行阶段： VO:AO {a:undefined}
  console.log(a);//undefined
  return;
  var a = 100;
}
foo();
