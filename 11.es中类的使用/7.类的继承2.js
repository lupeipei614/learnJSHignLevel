class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name + " is running");
  }
  static createPerson() {
    console.log("创建person");
  }
}

//子类如果实现了继承，在子类构造函数中访问this或return之前必须通过super调用父类构造函数
class Student extends Person {
  constructor(name, age, address) {
    super(name, age);
    this.address = address;
  }
  //在子类的原型对象上定义running方法
  eatting() {
    console.log(this.name + " is eatting");
  }

  //在子类上定义静态方法
  static createStudent() {
    console.log("创建student");
  }
}

var stu = new Student("小名", 30, "北京");
console.log(stu); //Student { name: '小名', age: 30, address: '北京' }
stu.running(); //小名 is running
stu.eatting(); //小名 is eatting
Student.createStudent(); //创建student
Student.createPerson(); //创建person

console.log(stu.__proto__); //Person {} 为一个Person类的对象，即类Person的一个实例
console.log(Object.getOwnPropertyDescriptors(stu.__proto__));
// {
//   constructor: {
//     value: [class Student extends Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   eatting: {
//     value: [Function: eatting],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
//定义子类时，定义在子类prototype原型对象的方法，在子类的prototype对象上

console.log(stu.__proto__.__proto__); //{} 为父类Person类的prototype原型对象
console.log(stu.__proto__.__proto__ === Person.prototype); //true
console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__));
// {
//   constructor: {
//     value: [class Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   running: {
//     value: [Function: running],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }

// 定义子类时，继承的父类的prototype原型对象上的方法，依然在父类的prototype原型对象上



console.log(Student) //[class Student extends Person]
console.log(Object.getOwnPropertyDescriptors(Student))
// {
//   length: { value: 3, writable: false, enumerable: false, configurable: true },
//   prototype: {
//     value: Person {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   createStudent: {
//     value: [Function: createStudent],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   name: {
//     value: 'Student',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }
// }
console.log(Student.__proto__ === Person) //true 
// 因为子类的[[prototype]]原型对象为父类Person,所以可以通过子类Student调用父类Person上的方法