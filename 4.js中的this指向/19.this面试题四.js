var name = "window";
function Person(name) {
  this.name = name;
  this.obj = {
    name: "obj",
    foo1: function () {
      return function () {
        console.log(this.name);
      };
    },
    foo2: function () {
      return () => {
        console.log(this.name);
      };
    },
  };
}

var person1 = new Person("person1");
var person2 = new Person("person2");

person1.obj.foo1()(); //window 独立函数调用
person1.obj.foo1.call(person2)(); //window 独立函数调用
person1.obj.foo1().call(person2); //person2 显示绑定this

person1.obj.foo2()(); //obj 箭头函数不绑定this,this为上级作用域的this
person1.obj.foo2.call(person2)(); //person2 箭头函数不绑定this,this为上级作用域的this
person1.obj.foo2().call(person2); //obj 箭头函数不绑定this,显示绑定无效，this为上级作用域的this
