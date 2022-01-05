/**
 * 全局执行上下文编译阶段：
 * VO->GO  GO -> {name: undefined, person: #0x100, sayName: #0x200}
 * #0x100 -> {name: "person", sayName: #0x300}
 * 
 * 全局执行上下文执行阶段：
 * VO->GO  GO -> {name: window, person: #0x100, sayName: #0x200}
 */
var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  },
};
function sayName() {
  //父级作用域 GO
  /**
   * 创建sayName函数执行上下文
   * 编译阶段：
   * VO->AO  AO-> {foo:undefined}
   * 执行阶段：
   * VO->AO  AO-> {foo:0x300}
   */
  var foo = person.sayName;
  foo(); //window   独立函数调用this -> window  
  person.sayName();  //person 作为对象的方法调用，this被隐式绑定为调用函数的对象person person.name为person
  (person.sayName)(); //person 加不加小括号效果一样
  (b = person.sayName)();  //window  赋值表达式最后会返回person.sayName的引用地址#0x300， #0x300()是独立函数调用
}
sayName();

//最终输出结果： window  person person window