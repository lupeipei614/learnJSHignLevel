function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.running = function () {
    console.log(this.name + "is running!");
  };
}

var p1 = new Person("小名", 30, "male");
var p2 = new Person("小红", 25, "female");
var p3 = new Person("小丽", 30, "female");
console.log(p1);
console.log(p2);
console.log(p3);


/**
 * 优点：
 * 通过构造函数创建出的对象，有标注出所属类的类名
 * 
 * 缺点：
 * 每创建一个对象，都需要在堆内存中开辟一块新内存，存储创建的running函数对象
 * 如果创建100个对象，就创建了100running函数，就需要100个这样的堆内存来存储100个这样的running函数对象，浪费内存
 */