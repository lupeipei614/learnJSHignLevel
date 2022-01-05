class Person {
  constructor(name, age) {
    //定义的属性定义在类的实例上
    this.name = name;
    this.age = age;
  }

  //在类的prototype原型对象上添加方法,不可枚举
  eatting() {
    console.log(this.name + " is eatting");
  }
}

var p = new Person("xiaoming", 30);
p.eatting(); //xiaoming is eatting

console.log(p); //Person { name: 'xiaoming', age: 30 }
console.log(Person.prototype); //{} 定义类时，添加到类的prototype原型对象上的方法是不可枚举的
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
//   }
// }
