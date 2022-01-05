/**
 * 对象的继承：让一个对象A继承另一个对象B，即让对象A的[[prototype]]原型对象指向那个要继承的对象B
 * 这样，在对象A上访问属性时，如果在当前对象上找不到，回去其[[prototype]]原型对象B上找
 */

//封装一个方法，生成一个[[prototype]]原型对象指向制定对象的对象

var prop = {
  name: "why",
  age: 18,
};

//方法一
function createObject1(proObj) {
  var obj = {};
  //设置目标对象的[[prototype]]原型对象指向某一个对象,
  //第一个参数为目标对象，第二个参数为要指向的原型对象
  Object.setPrototypeOf(obj, proObj);
  return obj;
}
var newObj1 = createObject1(prop);

//方法二
function createObject2(proObj) {
  var foo = function () {};
  //让函数的prototype原型对象指向指定的原型对象
  foo.prototype = proObj;
  return new foo();
}
var newObj2 = createObject2(prop);

//方法三
//创建一个新对象，新对象的[[prototype]]原型对象指向指定原型对象
var newObj3 = Object.create(prop);

console.log(newObj1.__proto__); //{ name: 'why', age: 18 }
console.log(newObj2.__proto__); //{ name: 'why', age: 18 }
console.log(newObj3.__proto__); //{ name: 'why', age: 18 }
