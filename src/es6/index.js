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