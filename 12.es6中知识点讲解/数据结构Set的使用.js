const set = new Set();
set.add(1);
set.add(1);
set.add(2);
console.log(set); // Set(2) { 1, 2 }

//数组去重
const arr = [1, 2, 3, 4, 5, 1, 2];
const set1 = new Set(arr);
const newArr1 = Array.from(set1);
const newArr2 = [...set1];
console.log(newArr1); //[ 1, 2, 3, 4, 5 ]
console.log(newArr2); //[ 1, 2, 3, 4, 5 ]
