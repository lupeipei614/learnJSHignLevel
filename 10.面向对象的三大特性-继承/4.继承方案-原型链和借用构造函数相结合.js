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
console.log(Student.prototype)
console.log(Object.getOwnPropertyDescriptors(Student.prototype))
//为了让父类Person.prototype原型对象成为子类Student实例对象的原型链上的一员，
//需要让子类Student的prototype原型对象指向父类Person的实例
var p = new Person();
Student.prototype = p;

Student.prototype.studing = function () {
  console.log(this.name + "is studing");
};

//子类的实例
var stu = new Student("小红", 20, 65);
console.log(stu.name);
stu.eatting();

//原型链和借用构造函数相结合继承的弊端：
//1.没创建一个子类Student的实例，父类构造函数都会被调用一次


//2.作为子类Student的prototype原型对象，父类Person的实例的p对象上，有多余的name, age 属性，值都为undefined
// console.log(p)
// Person {
//   name: undefined,
//   age: undefined,
//   studing: [Function (anonymous)]
// }



//3.Student.prototype原型对象重新指向之前和之后对象上包含的属性不一样
//重定向后的原型对象上少了constructor属性,多了无用的name, age 属性
//重定向之后的原型对象被console.log输出有显示对象的类型为父类Person


console.log(Student.prototype) 
console.log(Object.getOwnPropertyDescriptors(Student.prototype))

//重新指向之前的原型对象上的属性
//{}
// {
//   constructor: {
//     value: [Function: Student],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   studing: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

//重定向之后的原型对象上的属性

// Person {
//   name: undefined,
//   age: undefined,
//   studing: [Function (anonymous)]
// }
// {
//   name: {
//     value: undefined,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: {
//     value: undefined,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   studing: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }