//父类：封装公有的属性和 方法
function Person() {
  this.name = "why";
  this.age = 18;
}
Person.prototype.running = function () {
  console.log(this.name + "is running");
};
Person.prototype.eatting = function () {
  console.log(this.name + "is eatting");
};

//子类：封装特有的属性和方法
function Student() {
  this.num = 21;
}

//为了让父类Person.prototype原型对象成为子类Student实例对象的原型链上的一员，
//需要让子类Student的prototype原型对象指向父类Person的实例
var p = new Person();
Student.prototype = p;

Student.prototype.studing = function () {
  console.log(this.name + "is studing");
};

//子类的实例
var stu = new Student();
console.log(stu.name);
stu.eatting();

//原型链继承的弊端：
//1.打印stu对象，继承的属性是看不到的
// console.log(stu) //Person { num: 21 }  stu对象上没有name age

//2.直接修改对象的属性，是给本对象添加了一个新属性
// stu.name = 'coby'
// console.log(stu) //Person { num: 21, name: 'coby' } stu对象上多了一个name属性

//3.父类Person实例存储的属性如果值为引用类型,修改引用中的值，会相互影响，造成数据混乱

// p.friends = []
// var stu1 = new Student;
// var stu2 = new Student;
// stu1.friends.push("小红")
// console.log(stu2.friends) //['小红'] 明明是给stu1.friends添加了朋友，stu2.friends也改变了

//4.new Student()无法实现传参
//比如：想创建一个名为小名 年龄20 学号65的Student实例，无法把传给子类Student的参数传个父类Person构造函数





