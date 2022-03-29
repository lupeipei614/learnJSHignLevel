/**
 * Object.fromEntries() 方法把键值对列表转换为一个对象
 */

//把[['name', 'why'], ['age', 18]]转换为对象{name: 'why', age: 18}
const map = new Map([
  ["name", "why"],
  ["age", 18],
]);
console.log(map); // Map(2) { 'name' => 'why', 'age' => 18 }
const obj = Object.fromEntries(map);
console.log(obj); // { name: 'why', age: 18 }

//把对象{name: 'why', age: 18}转换为[['name', 'why'], ['age', 18]]
const entries = Object.entries({ name: "why", age: 18 });
console.log(entries); // [ [ 'name', 'why' ], [ 'age', 18 ] ]

//把name=why&age=18转换为对象
const params = new URLSearchParams("name=why&age=18");
console.log(params); // URLSearchParams { 'name' => 'why', 'age' => '18' }
const obj1 = Object.fromEntries(params);
console.log(obj1); //{ name: 'why', age: '18' }


//把对象{ name: 'why', age: '18' }转换为name=why&age=18
