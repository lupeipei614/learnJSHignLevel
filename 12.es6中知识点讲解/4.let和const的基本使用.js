/**
 * es6新增了使用let/const声明变量  
 */

// 1.let 声明的变量可以被重新赋值，
let name = "why";
name = "koby";
console.log(name); // koby

// 2.const 声明的变量不可以重新被赋值，但是如果其值是引用类型的话，可以改变引用类型值的属性的值
const age = 18;
// age = 20  //TypeError: Assignment to constant variable.
const info = { name: "why", age: 18 };
info.name = "koby";
console.log(info); //{name: 'koby',age: 18}

// 3.const声明的变量，在声明时必须被赋值
// const height; //SyntaxError: Missing initializer in const declaration


// 4.let/const声明的变量是不可以重复被声明的
// let name = 'lily' // SyntaxError: Identifier 'name' has already been declared
// const info = '你好' // SyntaxError: Identifier 'info' has already been declared