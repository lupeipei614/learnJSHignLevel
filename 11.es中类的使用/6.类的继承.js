class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//子类如果实现了继承，在子类构造函数中访问this或return之前必须通过super调用父类构造函数
class Student extends Person {
  constructor(name, age, address) {
    super(name, age);
    this.address = address;
  }
}

var stu = new Student('小名', 30, '北京') 
console.log(stu) //Student { name: '小名', age: 30, address: '北京' }
console.log(stu.__proto__)//Person {} 输出结果为一个对象，属于Person类
//因为stu.__proto__为Student.prototype,
//而Student.prototype为一个对象，此对象的__proto__原型对象为Person.prototype 
//所以Student.prototype为Person类的一个实例对象，即stu.__proto__为一个Person类的一个实例对象
//stu的[[prototype]]原型对象为Person的实例，为[[prototype]]原型对象为Person.prototype原型对象的对象
console.log(stu.__proto__.__proto__ === Person.prototype) //true
