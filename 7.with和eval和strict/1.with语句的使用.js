/**
 * 
 * with语句会立马执行
 * with语句会形成自己的作用域，其执行上下文的AO指向其参数对象
 * with语句执行时，遇到变量，先去去参数对象中查找，找不到再去其父级作用域找
 */
function foo() {
  return function bar() {
    
    with({name: "why", age: 18}) {
      //作用域链： 其参数对象 -> AO(bar) -> AO(foo) -> GO
      console.log(name) //why
    }
  }
}

const bar = foo()
bar()

//with语句可以在任何地方执行
with({name: "kobe",age:40}) {
  console.log(name) //kobe
}