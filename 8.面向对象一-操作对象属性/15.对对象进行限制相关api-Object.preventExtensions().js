/**
 * Object.preventExtensions(obj)
 * 让obj变得不可扩展，也就是永远不能给obj添加新的属性
 */
var obj = {
  name: "why",
  running: function () {},
};
//让obj变得不可扩展，也就是永远不能给obj添加新的属性
Object.preventExtensions(obj);

obj.age = 18;
console.log(obj) 
//{ name: 'why', running: [Function: running] }   age属性并没有被添加到obj上

/**
 * Object.isExtensible(obj)
 * 检测目标对象是否可以扩展
 * 返回一个布尔值，表示其是否可扩展
 */
console.log(Object.isExtensible(obj)) //false