var name = "window";
function Person(name) {
  //父级作用域GO
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
  };
  this.foo2 = () => console.log(this.name); //父级作用域为AO(Person)
  this.foo3 = function () {
    return function () {
      console.log(this.name);
    };
  };
  this.foo4 = function () {
    return () => {
      console.log(this.name);
    };
  };
}

var person1 = new Person("person1")
var person2 = new Person("person2")

person1.foo1() //person1
person1.foo1.call(person2) //person2

person1.foo2() //person1 箭头函数不绑定this, this为父级作用域中的this
person1.foo2.call(person2)//person1 箭头函数不绑定this,显示绑定this无效 this为父级作用域中的this

person1.foo3()() //window 独立函数调用 this默认被绑定为window
person1.foo3.call(person2)() //window 独立函数调用 this默认被绑定为window
person1.foo3().call(person2) //person2 显示绑定this为person2

person1.foo4()() //person1 箭头函数不绑定this, this为父级作用域中的this
person1.foo4.call(person2)()//person2 箭头函数不绑定this, this为父级作用域中的this
person1.foo4().call(person2)//person1 箭头函数不绑定this,显示绑定this无效 this为父级作用域中的this

//执行结果： person1 person2 person1 person1 window window person2 person1 person2 person1