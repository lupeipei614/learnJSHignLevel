// 定义类的时候，
// 如果没有明确定义类的构造方法，会使用类的默认的构造方法
// 如果明确定义了构造方法，就使用定义的构造方法
// 一个类只有一个构造方法

class Student {}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
console.log(Student.constructor); // [Function: Function] 输出类的默认构造方法
console.log(Person.constructor); // [Function: Function]

var p = new Person("小名", 30);
var s = new Person("小红", 20);
console.log(p.name, p.age); //小名 30
console.log(s.name, s.age); //小红 20
