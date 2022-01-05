// class Person {
//   constructor(name, age) {
//   this.name = name
//   this.age = age
//   }
//   running() {}
// }

//babel转换

"use strict";

//检查instance是否为Constructor构造函数的实例
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

//在目标对象上，定义一组属性描述符
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    //获取当前属性描述符
    var descriptor = props[i];
    //如果当前属性描述符没有设置是否可枚举，就设为不可枚举
    descriptor.enumerable = descriptor.enumerable || false;
    //设置当前属性描述符可配置
    descriptor.configurable = true;
    //如果当前属性描述符有value属性，就设置可写；如果是存取属性描述符就不需要了
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

//给构造函数的原型对象上定义一组原型对象属性，给构造函数本身定义一组静态属性
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    //检查Person构造函数是否通过new调用，如果作为普通函数调用则报错
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }
  //在Person.prototype上添加running方法
  _createClass(Person, [
    {
      key: "running",
      value: function running() {},
    },
  ]);

  return Person;
})();
