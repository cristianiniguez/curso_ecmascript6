const data = {
    frontend: 'cristian',
    backend: 'dario',
    design: 'mary',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'cristian',
    backend: 'dario',
    design: 'mary',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' world;'));
console.log('food'.padEnd(12, ' -------'));

const obj = {
    name: 'cristian',
}