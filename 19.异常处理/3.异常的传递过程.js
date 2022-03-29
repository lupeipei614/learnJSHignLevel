function foo() {
  throw new Error("error ....");
}
function bar() {
  foo();
}
function baz() {
  bar();
}
function demo() {
  baz();
}


demo()

// G:\03.教学视频\0.javascript-王红元\js高级\learnJSHignLevel\19.异常处理\3.异常的传递过程.js:2
//   throw new Error("error ....");
//   ^

// Error: error ....
//     at foo (G:\03.教学视频\0.javascript-王红元\js高级\learnJSHignLevel\19.异常处理\3.异常的传递过程.js:2:9)  
//     at bar (G:\03.教学视频\0.javascript-王红元\js高级\learnJSHignLevel\19.异常处理\3.异常的传递过程.js:5:3)  
//     at baz (G:\03.教学视频\0.javascript-王红元\js高级\learnJSHignLevel\19.异常处理\3.异常的传递过程.js:8:3)  
//     at demo (G:\03.教学视频\0.javascript-王红元\js高级\learnJSHignLevel\19.异常处理\3.异常的传递过程.js:11:3)
//     at Object.<anonymous> (G:\03.教学视频\0.javascript-王红元\js高级\learnJSHignLevel\19.异常处理\3.异常的传递过程.js:15:1)
//     at Module._compile (internal/modules/cjs/loader.js:1085:14)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
//     at Module.load (internal/modules/cjs/loader.js:950:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:790:12)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)