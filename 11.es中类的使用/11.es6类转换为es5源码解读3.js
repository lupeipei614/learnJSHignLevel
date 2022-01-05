// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   running() {
//     console.log(this.name + "is running");
//   }
// }
// class Student extends Person {
//   constructor(name, age, num) {
//     super(name, age);
//     this.num = num;
//   }
//   eatting() {
//     console.log(this.name + "is eatting");
//   }
// }

//babel转换

"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

//实现子类继承父类
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  // 子类的prototype 指向一个对象，此对象的__proto__指向父类的prototype
  // 子类的prototype添加一个constructor属性，执行子类构造函数
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  // 子类继承父类的静态属性
  if (superClass) _setPrototypeOf(subClass, superClass);
}

// 设置一个指定的对象的[[prototype]]原型对象重新指向另一个对象或null
function _setPrototypeOf(o, p) {
  // Object.setPrototypeOf(targetObje, newPrototype) 设置一个指定的对象的[[prototype]]原型对象重新指向另一个对象或null
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

//创建一个父类构造函数
function _createSuper(Derived) {
  // Derived为子类或派生类,即Student
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    //此处的this为子类构造函数中的this
    //获取子类的父类 Student.__proto__为Person
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      //NewTarget为Student
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      // arguments为传递给当前函数的参数集合，为类数组
      // 执行父类构造函数，并把其this绑定为子类构造函数中的this,把参数传入，接收父类构造函数执行返回的对象
      result = Super.apply(this, arguments);
    }
    //检验result只能为对象或undefined，否则报错，并且_createSuperInternal执行时，其中this被绑定为了子类构造函数中的this
    return _possibleConstructorReturn(this, result);
  };
}

//检验call为只能为对象或undefined，否则报错，并且检验self不为undefined
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    // void 0代表undefined
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

//检验self不为undefined，否则报错
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

//获取一个对象的[[prototype]]原型对象
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [
    {
      key: "running",
      value: function running() {
        console.log(this.name + "is running");
      },
    },
  ]);

  return Person;
})();

var Student = /*#__PURE__*/ (function (_Person) {
  //子类继承父类
  _inherits(Student, _Person);
  //通过子类获取父类构造函数
  var _super = _createSuper(Student);

  function Student(name, age, num) {
    var _this;
    //检查Student是否是通过new调用，如果作为普通函数调用则报错
    _classCallCheck(this, Student);
    //执行父类构造函数，父类构造函数中的this绑定为子类构造函数中的this,父类构造函数执行返回的对象赋值给this
    _this = _super.call(this, name, age);
    _this.num = num;
    return _this;
  }

  _createClass(Student, [
    {
      key: "eatting",
      value: function eatting() {
        console.log(this.name + "is eatting");
      },
    },
  ]);

  return Student;
})(Person);
