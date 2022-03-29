//定义模块,并且在当前模块中导入foo模块，并使用foo模块中导出的变量
define(["foo"], function (foo) {
  console.log("bar.js", foo.name, foo.age);
});

//写法二:
// define(function (foo) {
//   require(["foo"], function (foo) {
//     console.log("bar.js", foo.name, foo.age);
//   });
// });
