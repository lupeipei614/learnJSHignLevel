function foo() {
  throw new Error("error ....");
}
function bar() {
  try {
    foo();
  } catch (error) {
    //如果foo函数执行抛出异常，不在执行foo()下面的代码，会执行catch里的代码
  } finally {
    //不管foo函数执行是否抛出异常，都会执行finally里的代码
  }
}
function baz() {
  bar();
}
function demo() {
  baz();
}

demo();
