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

let [x = f()] = [1];
console.log(x);
//上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。