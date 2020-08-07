function newFunction(name, age, country) {
    var name = name || 'cristian';
    var age = age || 23;
    var country = country || 'BO';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'cristian', age = 23, country = 'BO') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('carlos', 24, 'CO');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = 'Lorem ipsum dolor sit amet,\n'
    + 'consectetur adipiscing elit.';

//es6
let lorem2 = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit.`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'cristian',
    'age': 23,
    'country': 'BO'
}

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name);
console.log(age, country);

let team1 = ['carlos', 'felix', 'jordan', 'sebas'];
let team2 = ['nicol', 'daniela', 'mary', 'thaly'];

let education = ['elard', ...team1, ...team2];

console.log(education);

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';
a = 'a';

let name = 'cristian';
let age = 23;
//es5
let obj = { name: name, age: age };
//es6
let obj2 = { name, age };
console.log(obj2);

const names = [
    { name: 'carlos', age: '22' },
    { name: 'mary', age: '23' },
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // ...
}

const listOfNames4 = name => {
    // ...
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Me resolví :)');
        } else {
            reject('Me rechazé :(');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.error(error))

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);