//WeakSet的元素只能是对象
//WeakSet对对象的引用是弱引用，Set对对象的引用是强引用

let obj = { name: 'why'}

let weakSet = new WeakSet()
//建立的是弱引用
weakSet.add(obj)

let set = new Set()
//建立的是强引用
set.add(obj)

obj = null

console.log(weakSet) //WeakSet { <items unknown> } 因为WeakSet对象是不能遍历的，所以输出的时候，不会把其中的元素一个一个输出来
console.log(set) //Set(1) { { name: 'why' } }