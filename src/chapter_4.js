/**
 * Created by Roy on 2017/2/9.
 */
'use strict';
//字符串的扩展


//ES6为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。
for (let codePoint of 'foo') {
    console.log(codePoint)
}

console.log('abc'.charAt(0)) // "a"
console.log('𠮷'.charAt(0)) // "\uD842"

require('String.prototype.at');
console.log('abc'.at(0)) // "a"
console.log('𠮷'.at(0)) // "𠮷"

//includes(), startsWith(), endsWith()

var s = 'Hello world!';

console.log(s.startsWith('Hello')) // true
console.log(s.endsWith('!')) // true
console.log(s.includes('o')) // true


console.log(s.startsWith('world', 6)) // true
console.log(s.endsWith('Hello', 5)) // true
console.log(s.includes('Hello', 6)) // false
//上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。