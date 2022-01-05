//当一个函数被new操作符调用的时候，这个函数就是构造函数
/**
 * new操作符调用的作用
 * 1.在内存中创建一个新的对象（空对象）
 * 2.这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性的值
 * 3.构造函数内部的this，会指向创建出来的新对象
 * 4.执行构造函数内部的代码（函数体代码）
 * 5.如果构造函数没有返回非空对象，则返回创建出来的这个新对象
 */
function person() {}

const p = new person();
// console.log(p);

//补充
//1.当构造函数创建对象的时候，不需要传参，可以省略小括号
const p1 = new person();
console.log(p1);

//2.获取构造函数创建出来的对象所属类的类名
console.log(p1.__proto__.constructor.name);

//3.为了区分构造函数和普通函数的区别，一般情况下，构造函数的名字会大写
function Fish() {}
const fish = new Fish();
