/**
 * ES6新增了数据类型WeakSet
 *  WeakSet数据结构只能存放对象类型
 *  WeakSet数据结构对对象元素的引用是弱引用,
 *    如果对元素对象的其他强引用别取消，只剩下WeakSet对此对象进行弱引用，则此对象会被GC回收
 *  WeakSet数据结构不能被遍历,也不能被解构
 */
const w = new WeakSet();
const obj = {
  name: "why",
  age: 18,
};
w.add(obj);
console.log(w); //WeakSet { <items unknown> }

/**
 * WeakSet常见的方法：
 *  add(value)：添加某个元素，返回WeakSet对象本身；
 *  delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型；
 *  has(value)：判断WeakSet中是否存在某个元素，返回boolean类型；
 */
//w中是否包含obj这个对象
console.log(w.has(obj)); //true
//从w中删除obj对象
console.log(w.delete(obj)); //true
console.log(w.has(obj)); // false
console.log(w); // WeakSet { <items unknown> }

// WeakSet的应用场景
const pWeakSet = new WeakSet();
class Person {
  constructor() {
    pWeakSet.add(this);
  }
  running() {
    if (!pWeakSet.has(this)) {
      throw new Error("running方法不能被非构造函数Person创建出来的对象调用");
    }
    console.log("running");
  }
}
const p = new Person();
p.running(); // running
p.running.call({ name: "why" }); //running方法不能被非构造函数Person创建出来的对象调用
