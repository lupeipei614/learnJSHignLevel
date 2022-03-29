//配置模块及其路径
require.config({
  baseUrl: "./src", //默认为当前文件所在目录
  paths: {
    foo: "./modules/foo",
    bar: "./modules/bar",
  },
});

//使用模块
require(["foo", "bar"], function (foo) {
  console.log(foo.name, foo.age);
});
