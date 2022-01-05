//获取一个对象的属性，其实实在进行[[get]]操作：
//先在当前对象上寻找属性，找到就返回对应的值；找不到就去对象的隐式原型对象[[prototype]]对象上找
//对象的隐式原型对象[[prototype]]指向其构造函数的prototype对象
foo.prototype.name = "why";
foo.prototype.age = 18;
var f = new foo();
console.log(f.name, f.age); //"why" 18

//如果需要给函数的原型对象上添加很多属性，像上面那样一个个添加太费事，
//可以直接改变函数的prototype的指向，指向一个新对象
foo.prototype = {
  name: 'why',
  age: 18
}
Object.defineProperty(foo.prototype, "constructor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: foo
})

console.log(foo.prototype)
console.log(Object.getOwnPropertyDescriptors(foo.prototype));