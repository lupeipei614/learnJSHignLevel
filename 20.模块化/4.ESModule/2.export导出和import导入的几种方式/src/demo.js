/**
 * export导出的几种方式：
 *  1.变量在声明时直接导出，即export后跟变量声明语句
 *  2.变量声明后，统一导出
 *  3.统一导出时起别名
 *  4.export default 默认导出
 *    默认导出只能有一个
 */
// 4.export default 默认导出
const height = 1.88;

//方式一
export default height;

//方式二
// export {
//   height as default
// };

