// class Person {}

//babel转换如下
"use strict";

//检验instance是否是Constructor构造函数的实例
function _classCallCheck(instance, Constructor) {
  // instanceof 运算符  用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
  if (!(instance instanceof Constructor)) {
    // 如果instance不是Constructor构造函数的实例，就报错：不能把构造函数作为一个普通函数调用
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function Person() {
  //Person为一个构造函数，如果被new调用，函数内this为Person实例；
  //如果作为普通函数调用，则this不是Person的实例
  //此函数用来检查this是否为Person的实例，不是就报错
  _classCallCheck(this, Person);
};
