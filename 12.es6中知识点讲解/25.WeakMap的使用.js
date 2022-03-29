/**
 * WeakMap:
 *  只能使用对象类型作为键名
 *  对象键名对此对象的引用是弱引用
 *  不能被遍历
 *
 */

//Map数据结构允许我们使用对象类型作为key

//1.创建一个Map数据结构,方法一：
const obj1 = {
  name: "curry",
};
const obj2 = {
  name: "why",
};
const m = new WeakMap();

//给m添加元素,只能使用对象作为键名
m.set(obj1, "aaa");
m.set(obj2, "bbb");

console.log(m); //WeakMap { <items unknown> }  因为无法被遍历

//2.创建一个Map数据结构,方法二：
const n = new WeakMap([
  [obj1, 123],
  [obj2, "ccc"],
]);
console.log(n);
//WeakMap { <items unknown> }  因为无法被遍历

//3.WeakMap数据结构的方法
//给m添加元素
m.set(obj1, "李静昕妈妈");
//获取m中键名为obj1的值
console.log(m.get(obj1)); // 李静昕妈妈
//删除m中键名为obj1的值
console.log(m.delete(obj1)); //true

//查看m中是否包含键名obj1
console.log(m.has(obj1)); //false

// 4.Map数据结构不能被遍历
