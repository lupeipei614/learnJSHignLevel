/**
 * Object.prototype.isPrototypeOf()
 * isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。
 */

const obj = {
  name: '小名',
  age: 30
}
const p = Object.create(obj)
console.log(obj.isPrototypeOf(p)) //true obj出现在了对象p的原型链上


function Student(num) {
  this.num = num;
}
const stu = new Student('小李')
console.log(Student.prototype.isPrototypeOf(stu)) //true Student.prototype出现在stu的原型链上
console.log(stu instanceof Student) //true Student.prototype出现在stu的原型链上