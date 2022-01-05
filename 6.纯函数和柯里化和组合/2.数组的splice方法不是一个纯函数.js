/**
 * 数组的splice方法不是一个纯函数
 * 对于同一个数组，调用splice方法，给其传入确定的start和end，它给我们返回不确定的值
 * 会修改原来数组
 * splice方法会在原数组上从start位置开始截取，截取掉num个元素，改变了原数组
 * splice方法会创建一个空数组，把截取的元素push到这个空数组中，然后把存储这截取元素的数组返回
 */

 var names = ["lily", "curry", "why", "kobe"];
 var newNames = names.splice(1, 2); 
 console.log(newNames); //["curry", "why"]  
 console.log(names); //["lily", "kobe"]