var obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  },
};

var obj1 = {
  name: "why",
};
(obj1.bar = obj.foo)(); //this -> window
//obj1.bar = obj.foo返回obj.foo这个函数对象的引用地址，函数对象引用地址()调用，是独立函数调用
