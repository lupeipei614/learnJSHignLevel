class Person {
  //constructor为类的构造函数(构造方法)
  //类的构造函数被调用时：
  //1.在内存中创建一个新对象（空对象）var moni = {}
  //2.这个对象内部的[[prototype]]原型对象会指向类的prototype原型对象  moni.__proto__ = Person.prototype
  //3.this指向这个对象 this = moni
  //4.执行构造函数内部的代码
  //5.如果构造函数没有返回非空对象，则返回创建出来的新对象 return moni
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}


//当使用new 调用类时，会执行类的构造函数，
//调用类时传递的参数，会作为参数传给类的构造函数
var p = new Person('小名', 30)
var s = new Person('小红', 20)