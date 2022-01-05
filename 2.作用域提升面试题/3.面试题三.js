//全局执行上下文编译阶段
//VO:GO {n:undefined, foo1:0x100, foo2: 0x200}

//执行全局上下文代码
//VO:GO {n:100, foo1:0x100, foo2: 0x200}

var n = 100;
function foo1() {
  //父级作用域:GO
  //函数foo1执行上下文编译阶段
  //VO:AO {}

  //函数foo2执行上下文执行阶段
  //VO:AO {}
  console.log(n);//100
}
function foo2() {
  //父级作用域:GO
  //函数foo2执行上下文编译阶段
  //VO:AO {n: undefined}

  //函数foo2执行上下文执行阶段
  //VO:AO {n: 200}
  var n = 200;
  console.log(n); //200
  foo1();
}
foo2();
console.log(n);//100


