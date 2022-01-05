/**
 * 全局执行上下文：
 * 编译阶段：
 * VO-> GO  GO {name: undefined, person1: #0x100, person2: #0x200}
 * person1: #0x100 {name: 'person1', foo1: #0x101, foo2: #0x102, foo3: # 0x103, foo4: # 0x104}
 * person2: #0x200 { name: "person2" }
 * 执行阶段： GO {name: "window", person1: #0x100, person2: #0x200}
 */
var name = "window";
var person1 = {
  name: "person1",
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name), //父级作用域GO
  foo3: function () {
    //父级作用域为GO
    return function () {
      //父级作用域为foo3 AO
      console.log(this.name);
    };
  },
  foo4: function () {
    //父级作用域为GO
    return () => {
      //箭头函数不绑定this  this为其父级作用域的this
      console.log(this.name);
    };
  },
};
var person2 = { name: "person2" };

person1.foo1(); //person1  隐式绑定this -> person1
person1.foo1.call(person2); //person2 显示绑定this -> person2
person1.foo2(); //window 箭头函数不绑定this this为父级作用域的this
person1.foo2.call(person2); //window 箭头函数显示绑定this无效 this为父级作用域的this

person1.foo3()(); //window 独立函数调用 this->window
person1.foo3.call(person2)(); // window 独立函数调用 this->window
person1.foo3().call(person2); //person2 显示绑定 this为person2

person1.foo4()(); //person1
/**
 * person1.foo4()();解析：
 * 1.person1.foo4()
 * 编译阶段：
 * 父级作用域 GO
 * AO {anonyFn: #0x401}
 *  this-> person1
 * 2.anonyFn()
 * 父级作用域  AO(person1.foo4)
 * 箭头函数不绑定this this为父级作用域的this
 */
person1.foo4.call(person2)(); // person2
/**
 * person1.foo4.call(person2)();解析：
 * 1.person1.foo4.call(person2)
 * 执行阶段：
 * 父级作用域 GO
 * AO {anonyFn: #0x402}
 * this被显示绑定为person2
 * 2.anonyFn()
 * 父级作用域  AO(person1.foo4)
 * 箭头函数不绑定this this为父级作用域的this
 */

person1.foo4().call(person2); //person1
/**
 * person1.foo4().call(person2);解析：
 * 1.person1.foo4()
 * 编译阶段：
 * 父级作用域 GO
 * AO {anonyFn: #0x403}
 *  this-> person1
 * 2.anonyFn()
 * 父级作用域  AO(person1.foo4)
 * 箭头函数不绑定this,显示绑定this无效 this为父级作用域的this
 */

//执行结果 person person2 window window window window person2 person1 person2 person1
