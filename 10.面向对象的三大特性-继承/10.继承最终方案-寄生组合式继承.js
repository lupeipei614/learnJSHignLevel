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
  Person.call(this, name, age);
  this.num = num;
}

//使用寄生组合式继承方案，让子类的prototype原型对象指向一个新对象，
//此新对象的[[prototype]]原型对象指向父类的prototype原型对象
Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: Student,
});
//静态方法的继承
Object.setPrototypeOf(Student, Person);

Student.prototype.studing = function () {
  console.log(this.name + "is studing");
};

//子类的实例
var stu = new Student("小红", 20, 65);
console.log(stu); //Student { name: '小红', age: 20, num: 65 }
console.log(Student.prototype.constructor.name); //Student
console.log(stu.name);
stu.eatting();
console.log(stu.__proto__);
//打印一个对象，它前面出现的类型应该是constructor.name