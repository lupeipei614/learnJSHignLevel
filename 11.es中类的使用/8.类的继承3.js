class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name + ' is running')
  }
  eatting() {
    console.log(this.name + ' is eatting')
  }
  static createPerson() {
    console.log('第一步')
  }
}

//子类如果实现了继承，在子类构造函数中访问this或return之前必须通过super调用父类构造函数
class Student extends Person {
  constructor(name, age, address) {
    super(name, age);
    this.address = address;
  }

  //子类对父类方法的重写
  eatting() {
    console.log('今天吃的很饱')
  }
  //在子类的原型对象上定义running方法
  running() {
    //通过super调用父类的原型对象，从父类的原型对象上获取running方法，
    //此方法执行时。方法内容的this被绑定为当前作用域的this
    super.running()
    console.log(this.name + ' run fastest')
  }

  //在子类上定义静态方法
  static createPerson() {
    //通过super获取父类，调用父类上的静态方法
    super.createPerson()
    console.log('第二步')
  }
}

var stu = new Student('小名', 30, '北京') 
console.log(stu) //Student { name: '小名', age: 30, address: '北京' }
stu.running() 
//小名 is running
//小名 run fastest

Student.createPerson()
// 第一步
// 第二步