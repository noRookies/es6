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

//repeat方法返回一个新字符串，表示将原字符串重复n次。
console.log('x'.repeat(3)) // "xxx"
console.log('hello'.repeat(2)) // "hellohello"
console.log('na'.repeat(0)) // ""

let bianliang = 1111;
console.log(`输出的会是 ${bianliang}`);

console.log(`In JavaScript '\\n' is a line-feed.`)
console.log(`In JavaScript this is not legal.`)
// 字符串中嵌入变量
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)

var greeting = `\`Yo\` World!`;
console.log(greeting)

function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
        throw new Error(
            // 传统写法为
            // 'User '
            // + user.name
            // + ' is not authorized to do '
            // + action
            // + '.'
            `User ${user.name} is not authorized to do ${action}.`);
    }
}

const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));

// 写法一
/*let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
console.log(func('Jack')) // "Hello Jack!"*/

// 写法二
let str = '(name) => `Hello ${name}!`';
let func = eval.call(null, str);
console.log(func('Jack'))
 // "Hello Jack!"

var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
function compile(template){
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script =
        `(function parse(data){
    var output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

    return script;
}
var parse = eval(compile(template));
console.log(parse({ supplies: [ "broom", "mop", "cleaner" ] }));

function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}
var sender = '<script>alert("abc")</script>'; // 恶意代码
var message = SaferHTML`<p>${sender} has sent you a message.</p>`;

console.log(message)