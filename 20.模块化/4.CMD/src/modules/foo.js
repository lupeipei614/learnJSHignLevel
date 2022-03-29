//定义模块
define(function (require, exports, module) {
  //导入bar模块
  const bar = require("./bar");
  console.log(bar.name, bar.age);
});
