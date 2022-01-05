function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Person.prototype.running = function () {
  console.log(this.name + "is running!");
};

var p1 = new Person("小名", 30, "male");
var p2 = new Person("小红", 25, "female");
var p3 = new Person("小丽", 30, "female");
console.log(p1);
console.log(p2);
console.log(p3);

//当前对象上没有running方法，会去对象的[[prototype]]隐式原型对象上去找，
//而对象的隐式原型对象正是创建对象的构造函数的prototype显示原型对象
p1.running()
p2.running()
p3.running()

/**
 * 优点：
 * 通过构造函数创建出的对象，有标注出所属类的类名
 * 如果创建100个对象，只会创建一个running函数，避免了内存浪费
 */
