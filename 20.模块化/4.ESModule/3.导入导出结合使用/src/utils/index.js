//导出方式一：
// import { timeFormat, priceFormat } from "./format.js";
// import { mul, sum } from "./math.js";

// export { timeFormat, priceFormat, sum, mul };

//导出方式二：
// export { timeFormat, priceFormat } from "./format.js";
// export { sum, mul } from "./math.js";

//导出方式三：
export * from "./format.js";
export * from "./math.js";


// 获取当前文件的绝对路径
console.log('当前文件所在目录', import.meta.url)