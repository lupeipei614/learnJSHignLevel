const name = "why";
const age = 18;
const height = 1.88;

//导出方式一：
module.exports = {
  name,
  age,
  height,
};

//导出方式二：
// exports.name = name;
// exports.age = age;
// exports.height = height;

//原理：在源码中进行了如下操作
// module.exports = {}
// exports = modules.exports

//也就是说，默认modules.exports和exports指向同一个引用地址，
//但是实际上require(x)方法导出的时候，是找到匹配x的文件，导出当前文件中的modules.exports对象
//源码如下:
// function require(id) {
//   return modules.exports;
// }
