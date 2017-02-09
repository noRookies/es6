'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _marked = [fibs].map(regeneratorRuntime.mark);

function fibs() {
    var a, b;
    return regeneratorRuntime.wrap(function fibs$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    // Generator Function
                    a = 0;
                    b = 1;

                case 2:
                    if (!true) {
                        _context.next = 9;
                        break;
                    }

                    _context.next = 5;
                    return a;

                case 5:
                    // [a, b] = [b, a + b];
                    b = a + b;
                    a = b - a;
                    _context.next = 2;
                    break;

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var _fibs = fibs(),
    _fibs2 = _slicedToArray(_fibs, 6),
    first = _fibs2[0],
    second = _fibs2[1],
    third = _fibs2[2],
    fourth = _fibs2[3],
    fifth = _fibs2[4],
    sixth = _fibs2[5];

console.log(first, second, third, fourth, fifth, sixth);

var a = [];

var _loop = function _loop(i) {
    a[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
a[6](); // 6

var head = 1,
    tail = [2, 3, 4];

console.log(head); // 1
console.log(tail); // [2, 3, 4]

//let [foo] = [];
//let [bar, foo] = [1];
//console.log(foo)

/*let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x)*/

var _ref = [],
    _ref$ = _ref[0],
    foo = _ref$ === undefined ? true : _ref$;

console.log(foo); // true

/*let [x, y = 'b'] = ['a']; // x='a', y='b'
console.log(x,y)*/
//let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'


function f() {
    console.log('aaa');
}

var _ = 1,
    x = _ === undefined ? f() : _;

console.log(x);
//上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。
//# sourceMappingURL=main.js.map