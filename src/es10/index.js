let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2))

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));

let hello = '    hello world'

console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world      '
console.log(hello);
console.log(hello.trimEnd());

try {
    // Algo que podría lanzar un error
} catch {
    error
}

let entries = [['name', 'cristian'], ['age', 23]]
console.log(Object.fromEntries(entries))

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol);
console.log(symbol.description);