
/**
 * 
 * instanceof 运算符
 * 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
 */


function Person(name, age) {
  this.name = name;
  this.age = age;
}


function Student(name, age, num) {
  // 借用父类Person构造函数
  Person.call(this, name, age);
  this.num = num;
}

Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: Student,
});

Student.prototype.studing = function () {
  console.log(this.name + "is studing");
};

//子类的实例
var stu = new Student("小红", 20, 65);
console.log(stu instanceof Student) //true Student.prototype在stu的原型链上
console.log(stu instanceof Person) //true Person.prototype在stu的原型链上