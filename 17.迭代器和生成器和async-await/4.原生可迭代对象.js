/**
 * String、Array、Map、Set、arguments对象，NodeList对象本身就是可迭代对象
 */

// 字符串对象是可迭代对象
const str = "abc";
console.log(str[Symbol.iterator]); // [Function: [Symbol.iterator]]
for (const s of str) {
  console.log(s);
}
// a
// b
// c

// 数组对象是可迭代对象
const arr = ["lily", "koby"];
console.log(arr[Symbol.iterator]); // [Function: values]
for (const a of arr) {
  console.log(a);
}
// lily
// koby

// Set对象是可迭代对象
const set = new Set();
console.log(set[Symbol.iterator]); // [Function: values]
set.add(1);
set.add(2);
for (const item of set) {
  console.log(item);
}
// 1
// 2

// Map对象是可迭代对象
const map = new Map();
console.log(map[Symbol.iterator]); // [Function: entries]
map.set(0, "你");
map.set(1, "好");
for (const m of map) {
  console.log(m);
}
// [ 0, '你' ]
// [ 1, '好' ]

// arguments是可迭代对象
function sum(a, b) {
  console.log(arguments[Symbol.iterator]); // [Function: values]

  for (const a of arguments) {
    console.log(a);
  }
  return a + b;
}

sum(5, 6);

// 5
// 6
