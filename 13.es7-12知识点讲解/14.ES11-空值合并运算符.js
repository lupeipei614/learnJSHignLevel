//ES11，Nullish Coalescing Operator增加了空值合并操作符

console.log(null ?? "aaa"); //aaa
console.log(undefined ?? "aaa"); //aaa
console.log(0 ?? "aaa"); //0
console.log("" ?? "aaa"); //
console.log(NaN ?? "aaa"); //NaN

//从以上可以看出：只有在??前面的值为null或undefined时，才会使用默认值

const foo = undefined;
const res1 = foo ?? "aaa";
const res1 = foo || "aaa";
