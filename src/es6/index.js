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