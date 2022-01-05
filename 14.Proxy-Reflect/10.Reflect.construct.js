/**
 * Reflect.construct(target, argArray[, newTarget])
 *  Reflect.construct() 方法的行为有点像 new 操作符 构造函数 ， 相当于运行 new target(...argArray).
 *  target
      被运行的目标构造函数
    argumentsList
      类数组，目标构造函数调用时的参数。
    newTarget 可选
      作为新创建对象的原型对象的constructor属性， 参考 new.target 操作符，默认值为target
    返回值
      以target（如果newTarget存在，则为newTarget）函数为构造函数，argumentList为其初始化参数的对象实例。
 */

function Student(name, age) {
  this.name = name;
  this.age = age;
}
function Teacher() {}
const stu = new Student("lily", 18);
console.log(stu); //Student { name: 'lily', age: 18 } 可以看到创建了一个Student类的对象
console.log(stu.__proto__ === Student.prototype); //true

//现在有一个需求，执行Student方法，但是创建出来的是Teacher类的对象
var stu1 = Object.create(Teacher.prototype); //创建一个空对象，其__proto__指向Teacher.prototype
Student.apply(stu1, ["lily", 18]);
console.log(stu1); // Teacher { name: 'lily', age: 18 }
console.log(stu1.__proto__ === Teacher.prototype); //true

//下面的方式与上面的方式等效
const stu2 = Reflect.construct(Student, ["lily", 18], Teacher);
console.log(stu2); // Teacher { name: 'lily', age: 18 }
console.log(stu2.__proto__ === Teacher.prototype); //true
