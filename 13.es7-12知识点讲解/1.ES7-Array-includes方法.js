//在ES7之前，如果我们想判断一个数组中是否包含某个元素，需要通过 indexOf 获取结果，并且判断是否为 -1。
//在ES7中，我们可以通过includes来判断一个数组中是否包含一个指定的元素，根据情况，如果包含则返回 true，否则返回false。

const arr = [1, "aaa", "bbb"];

if (arr.indexOf("aaa") !== -1) {
  console.log("数组arr中包含字符串aaa");
}
if (arr.includes("aaa")) {
  console.log("数组arr中包含字符串aaa");
}


// 数组arr中包含字符串aaa
// 数组arr中包含字符串aaa

//indexOf的弊端：无法判断数组中是否包含NaN,
//includes可以判断出数组中是否包含NaN
const arr1 = [1, "aaa", "bbb",NaN];
console.log(arr1.indexOf(NaN)) // -1 数组arr1中其实包含NaN,但是indexOf判断不出来
console.log(arr1.includes(NaN)) //true  includes可以判断出数组中是否包含NaN