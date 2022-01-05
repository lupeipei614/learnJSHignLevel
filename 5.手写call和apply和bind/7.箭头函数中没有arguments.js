var foo = () => {
  //父级作用域GO
  //当前箭头函数中没有arguments,回去父级作用域中查找
  //在浏览器环境下，全局作用域中没有arguments,会报错
  //在node环境下，全局当前文件全局作用域下有arguments
  console.log(arguments);
};
foo();

function bar() {
  return () => {
    console.log(arguments);
  };
}
var baz = bar(1, 2);
baz();
