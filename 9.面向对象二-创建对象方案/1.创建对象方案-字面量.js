//使用字面量的方式创建三个对象
var p1 = {
  name: "小名",
  age: 30,
  sex: "male",
  running: function () {
    console.log(this.name + "is running!");
  },
};

var p2 = {
  name: "小红",
  age: 25,
  sex: "female",
  running: function () {
    console.log(this.name + "is running!");
  },
};

var p3 = {
  name: "小丽",
  age: 30,
  sex: "female",
  running: function () {
    console.log(this.name + "is running!");
  },
};
console.log(p1)
console.log(p2)
console.log(p3)

/**
 * 缺点：
 * 1.做了很多重复工作
 * 2.这样创建的对象没有标出所属的类别
 */