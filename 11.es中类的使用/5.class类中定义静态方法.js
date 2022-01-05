class Person {
  constructor(name, age) {
    //定义的属性定义在类的实例上
    this.name = name;
    this.age = age;
  }

  //在类的prototype原型对象上添加方法,不可枚举,被类的实例调用
  eatting() {
    console.log(this.name + " is eatting");
  }

  //在类上添加静态方法，不可枚举，被类本身调用
  static createPerson() {
    return new Person("甲", 30);
  }
}

var p = new Person("xiaoming", 30);
p.eatting(); //xiaoming is eatting

console.log(p); //Person { name: 'xiaoming', age: 30 }
console.log(Object.getOwnPropertyDescriptors(Person.prototype));
// {
//   constructor: {
//     value: [class Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   eatting: {
//     value: [Function: eatting],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
// }
console.log(Person); //[class Person]
console.log(Object.getOwnPropertyDescriptors(Person));
// {
//   length: { value: 2, writable: false, enumerable: false, configurable: true },
//   prototype: {
//     value: {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   createPerson: {
//     value: [Function: createPerson],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   name: {
//     value: 'Person',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }
// }
console.log(Person.createPerson()); //Person { name: '甲', age: 30 }
