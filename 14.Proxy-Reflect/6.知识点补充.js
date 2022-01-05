const s = Symbol();
const obj = {
  name: "why",
  age: 30,
  [s]: "我是灵魂画手",
};

console.log(Reflect.ownKeys(obj)); //[ 'name', 'age', Symbol() ]
console.log(Object.getOwnPropertyNames(obj)); //[ 'name', 'age' ]
console.log(Object.getOwnPropertySymbols(obj)); //[ Symbol() ]
console.log(
  Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj))
); //[ 'name', 'age', Symbol() ]
