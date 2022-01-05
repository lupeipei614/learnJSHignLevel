function foo() {
  //foo编译阶段：AO {n: undefined}  父级作用域：GO {n:100, foo:0x100}
  console.log(n) //undefined
  var n = 200
  console.log(n) //200
}
var n = 100
foo()