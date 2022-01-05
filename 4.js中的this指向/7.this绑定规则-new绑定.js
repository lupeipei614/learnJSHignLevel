//通过new 执行函数构造器的时候，会创建一个新对象，
//并把函数构造器执行时创建的执行上下文中的this绑定为这个新对象
//如果函数构造器没有返回值，会默认返回这个新对象
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var why = new Person("why", 18);
console.log(why.name, why.age);
var kobe = new Person("kobe", 40);
console.log(kobe.name, kobe.age);
