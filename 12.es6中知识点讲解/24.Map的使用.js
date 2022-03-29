//Javascript中的对象是不能使用对象类型作为key的
const obj1 = {
  name: "curry",
};
const obj2 = {
  name: "why",
};
const obj3 = {
  [obj1]: "aaa",
  [obj2]: "bbb",
};
console.log(obj3); // { '[object Object]: 'bbb'}
//在创建对象的过程中，obj1,obj2作为obj3的键名，最终被转换为了字符串'[object Object]',
//同样的键名，后面的键值会覆盖前面的

//Map数据结构允许我们使用对象类型作为key

//1.创建一个Map数据结构,方法一：
const m = new Map();

//给m添加元素
m.set("abc", 123);
m.set(123, "aaa");
m.set({ name: "why" }, "bbb");

console.log(m);
// Map(3) { 'abc' => 123, 123 => 'aaa', { name: 'why' } => 'bbb' }

//2.创建一个Map数据结构,方法二：
const n = new Map([
  ["abc", 123],
  [{ name: "why" }, "ccc"],
]);
console.log(n);
//Map(2) { 'abc' => 123, { name: 'why' } => 'ccc' }


//3.Map数据结构的属性size,
console.log(m.size, n.size) // 3 2

//4.Map数据结构的方法
//给m添加元素
m.set("芦培培", '李静昕妈妈');
//获取m中键名为'芦培培'的值
console.log(m.get('芦培培')) // 李静昕妈妈
//删除m中键名为'芦培培'的值
console.log(m.delete('芦培培')) //true

//查看m中是否包含键名'芦培培'
console.log(m.has('芦培培')) //false

//清空m
m.clear()
console.log(m) // Map(0) {}


// 5.Map数据结构的遍历
n.forEach((value, key) => {
  console.log(value, key)
})
// 123 abc
// ccc { name: 'why' }

for(const item of n) {
  console.log(item)
}
// [ 'abc', 123 ]
// [ { name: 'why' }, 'ccc' ]

for(const [key, value] of n) {
  console.log(key, value)
}
// abc 123
// { name: 'why' } ccc