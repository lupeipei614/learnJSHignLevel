//ES6新增数据结构Set
const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(10);
set.add(30);
console.log(set); //Set(3) {10, 20, 30}

//对数组arr进行去重
const arr = [10, 20, 30, 20, 10];

//解决方式：
//1.把数组转换为Set数据结构，则会去掉重复的元素
const arrSet = new Set(arr);
// 2.把Set数据结构转换为数组
// 方法一：
const newArr = Array.from(arrSet);
// 方法二：
const newArr1 = [...arrSet];
console.log(newArr); // [ 10, 20, 30 ]
console.log(newArr1); // [ 10, 20, 30 ]

/**
 * Set的属性：
 *  size Set数据结构的元素个数
 * Set的方法
 *  add(item)  向Set数据结构添加元素
 *  delete(item) 从Set数据结构删除元素
 *  has(item)  //查询Set数据结构是否包含某个元素，返回一个布尔值
 *  clear()  //清空Set数据结构
 */
const set1 = new Set();

//给set1添加元素
set1.add(10);
set1.add({});
set1.add("aaa");
console.log(set1); //Set(3) {10, {}, 'aaa'}

//查看set1中的元素个数
console.log(set1.size) // 3

//查看set1是否包含aaa元素
console.log(set1.has("aaa")); //true

//删除aaa元素
set1.delete("aaa");
console.log(set1); //Set(3) {10, {}}

//清空set1
set1.clear();
console.log(set1); //Set(0) {}

//Set数据结构是支持遍历的
set1.forEach(item => {
  console.log(item)
})
// 10
// {}

for(let item of set1) {
  console.log(item)
}
// 10
// {}

