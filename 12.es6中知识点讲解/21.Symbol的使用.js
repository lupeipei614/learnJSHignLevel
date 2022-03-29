//ES6之前，对象的属性名都是string类型
const info = {
  name: "why",
  age: 18,
  friend: {
    name: "kobe",
  },
};
console.log(Object.keys(info)); //[ 'name', 'age', 'friend' ]

//ES6之后，新增了Symbol基本数据类型，对象的属性名可以是string或Symbol值类型
/**
 * Symbol是一个函数，函数每次调用都会生成一个独一无二的值
 * Symbol值是基本数据类型，可以作为对象的属性名
 * Symbol函数调用时可以传入一个描述符作为参数，可以通过Symbol值.description获取这个描述符
 */

//1.Symbol是一个函数，函数每次调用都会生成一个独一无二的值
const x = Symbol();
const y = Symbol();
console.log(x === y); //false

//2.Symbol值作为对象的key
const s1 = Symbol();
const s2 = Symbol("title");
const s3 = Symbol("hobby");

//记住，Symbol值作为字面量对象的属性名，要使用计算属性
const newInfo = { ...info, [s1]: "北京市" };
//新增属性
newInfo[s2] = "全栈工程师";
Object.defineProperty(newInfo, s3, {
  configurable: true,
  writable: true,
  enumerable: true,
  value: "篮球",
});

//获取对象的Symbol值的属性，不能通过.语法获取，得使用计算属性
console.log(newInfo[s1]); //北京市
console.log(newInfo[s2]); //全栈工程师
console.log(newInfo[s3]); //篮球
console.log(s2.description); //title

//3.对象中使用Symbol值作为属性名，在遍历或使用Object.keys或使用Object.getOwnPropertyNames获取对象的keys时是获取不到Symbol值的属性名的
//如果想获取对象中使用Symbol值作为属性名的属性名，可以使用Object.getOwnPropertySymbols()获取
console.log(newInfo);
// {
//   name: 'why',
//   age: 18,
//   friend: { name: 'kobe' },
//   [Symbol()]: '北京市',
//   [Symbol(title)]: '全栈工程师',
//   [Symbol(hobby)]: '篮球'
// }
console.log(Object.keys(newInfo)); //[ 'name', 'age', 'friend' ]
console.log(Object.getOwnPropertyNames(newInfo)); //[ 'name', 'age', 'friend' ]
//遍历对象
for (let key in newInfo) {
  console.log(key);
}
// name
// age
// friend

//使用Object.getOwnPropertySymbols()获取对象中的Symbol值属性
console.log(Object.getOwnPropertySymbols(newInfo))
//[ Symbol(), Symbol(title), Symbol(hobby) ]



//4.Symbol函数的执行，会返回一个独一无二的值，如果你希望Symbol创建的值是相同的，可以使用Symbol.for(key),
//只要key一样，Symbol.for(key)创建的值就一样
//如果要获取Symbol值的key,可以通过Symbol.keyFor(Symbol值)获取
const m = Symbol.for('title')
const n = Symbol.for('title')
console.log(m === n) //true

//获取Symbol值的key
console.log(Symbol.keyFor(m)) // title
console.log(Symbol.keyFor(n)) // title




