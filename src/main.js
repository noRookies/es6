'use strict';

function* fibs() {// Generator Function
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        // [a, b] = [b, a + b];
        b = a + b;
        a = b - a;
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first, second, third, fourth, fifth, sixth);

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6

let [head, ...tail] = [1, 2, 3, 4];
console.log(head) // 1
console.log(tail) // [2, 3, 4]

//let [foo] = [];
//let [bar, foo] = [1];
//console.log(foo)

/*let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x)*/

let [foo = true] = [];
console.log(foo) // true

/*let [x, y = 'b'] = ['a']; // x='a', y='b'
console.log(x,y)*/
//let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'


function f() {
    console.log('aaa');
}

//let [x = f()] = [1];
//console.log(x);
//上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。

let [x = 1, y = x] = [];     // x=1; y=1
//let [x = 1, y = x] = [2];    // x=2; y=2
//let [x = 1, y = x] = [1, 2]; // x=1; y=2
//let [x = y, y = 1] = [];     // ReferenceError
console.log(x,y)

//2 对象解构赋值
let { foo1, bar } = { foo1: "aaa", bar: "bbb" };
console.log(foo1,bar) // "aaa", "bbb"
//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

let { baz, } = { foo2: "aaa", bar2: "bbb" };
console.log(baz) // undefined

let obj = { first: 'hello', last: 'world' };
let { first: f2, last: l } = obj;
console.log(f2,l) // 'hello'
//这实际上说明，对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。
//let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
//也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

let { foo3: baz2 } = { foo2: "aaa", bar2: "bbb" };
console.log(baz2) // "aaa"
//console.log(foo3) // "aaa"
//上面代码中，foo3是匹配的模式，baz2才是变量。真正被赋值的是变量baz2，而不是模式foo3。

let obj1 = {
    p: [
        'Hello',
        { y2: 'World' }
    ]
};

let { p: [x2, { y2 }] } = obj1;
console.log(x2,y2) // "Hello" // "Wo
//注意，这时p是模式，不是变量，因此不会被赋值。

const [g, b, c, d, e] = 'hello';
console.log(g,b,c,d,e) // "h" // "e" // "l" // "l" // "o"
//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
let str='hello';
let {length : len} = str;
console.log(str,len) // 5
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。