//父类：封装公有的属性和 方法
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.running = function () {
  console.log(this.name + "is running");
};
Person.prototype.eatting = function () {
  console.log(this.name + "is eatting");
};

//子类：封装特有的属性和方法
function Student(name, age, num) {
  // 借用父类Person构造函数
  Person.call(this, name, age)
  this.num = num;
}

//为了让父类Person.prototype原型对象成为子类Student实例对象的原型链上的一员，
//直接让子类Student.prototype原型对象指向父类Person.prototype
Student.prototype = Person.prototype

Student.prototype.studing = function () {
  console.log(this.name + "is studing");
};

//子类的实例
var stu = new Student("小红", 20, 65);
console.log(stu.name);
stu.eatting();

// 直接让子类Student.prototype原型对象指向父类Person.prototype的弊端：
// 1.父类Person和子类共用同一个prototype对象，
// 所有本来想添加到子类的公用的属性和方法，都被添加到了父类Perons.prototype上，
// 任意一个使用此方式继承父类的子类，都可以通过给自己的prototype原型对象添加属性和方法的方式，
// 改变父类的prototype对象
// Student.prototype.sing = function() {} 
// Teacher.prototype.walk = function() {}
// Student.prototype.running = function() {} 
// Teacher.prototype.running= function() {}
// 对于子类Student而言，它的原型对象无缘故的多了一个walk方法
// 对于子类Teacher而言，它的原型对象无缘故的多了一个sing方法
// 并且他们任意可以修改原型对象上的已有的方法
// var p = new Person()
// 创建出的父类Person的实例对象的[[prototype]]原型对象的属性以后被其他子类改变
// 这是很糟糕的，这种方案是不可行的




