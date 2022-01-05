class Person {
  constructor(name, age) {
    //定义的属性定义在类的实例上
    this.name = name;
    this._age = age;
  }

  //在类的prototype原型对象上添加方法,不可枚举,被类的实例调用
  eatting() {
    console.log(this.name + " is eatting");
  }

  //在类的prototype原型对象上定义访问器方法,不可枚举,被类的实例调用
  get age() {
    return this.age;
  }
  set age(newVal) {
    this._age = newVal
  }


}

var p = new Person('xiaoming', 30)
p.eatting() //xiaoming is eatting

console.log(p) //Person { name: 'xiaoming', _age: 30 }
console.log(Person.prototype) // {}
console.log(Object.getOwnPropertyDescriptors(Person.prototype)) 
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
//   age: {
//     get: [Function: get age],
//     set: [Function: set age],
//     enumerable: false,
//     configurable: true
//   }
// }