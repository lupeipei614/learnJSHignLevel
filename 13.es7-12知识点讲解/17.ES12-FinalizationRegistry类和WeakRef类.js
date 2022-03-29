/**
 * FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调。
 * FinalizationRegistry 提供了这样的一种方法：
 *    当一个在注册表中注册的对象被回收时，请求在某个时间点上调用一个清理回调。（清理回调有时被称为 finalizer ）;
 *    你可以通过调用register方法，注册任何你想要清理回调的对象，传入该对象和所含的值;
 */
let obj = {
  name: "why",
};
let info = {
  name: "lily",
};

//创建一个FinalizationRegistry 对象
const registry = new FinalizationRegistry(function (val) {
  //val为使用FinalizationRegistry 对象的register方法注册对象时，传入的第二个参数的值
  if (val === "obj") {
    console.log("obj对象被销毁");
  }
  if (val === "info") {
    console.log("info对象被销毁");
  }
});

//注册对象
registry.register(obj, "obj");
registry.register(info, "info");

/**
 * 如果我们默认将一个对象赋值给另外一个引用，那么这个引用是一个强引用：
 * 如果我们希望是一个弱引用的话，可以使用WeakRef；
 */

const foo = new WeakRef(obj);
console.log(foo.deref());

setTimeout(() => {
  console.log(foo.deref());
}, 10000);

obj = null;
info = null;
