function whoRU(who) {
    console.log(who.name);
    console.log(who.age);
}

const someone = { name: 'Ann', age: '20' };
whoRU(someone);

const who1 = {};
const who2 = new Object();

console.log('------------------------------------------------------');

console.log(someone.name);
console.log(someone['name']);

someone['here'] = true;
someone.person = true;

console.log(someone['here']);
console.log(someone.person);

console.log('------------------------------------------------------');

function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}

printValue(someone, 'name');

console.log('------------------------------------------------------');

function Who(name, age) {
    return {
        name,
        age,
    };
}

const who5 = new Who('Jobs', 40);
const who6 = new Who('Eien', 30);
const who7 = new Who('Wiel', 20);

console.log(who5);
console.log(who6);
console.log(who7);

console.log('------------------------------------------------------');

console.log('age' in who5);
console.log('name' in who5);
console.log('job' in who5);

console.log('------------------------------------------------------');

for (key in who7) {
    console.log(key);
}

console.log('------------------------------------------------------');

const array1 = [1, 2, 3, 4, 5];

for (i of array1) {
    console.log(i);
}

console.log('------------------------------------------------------');

const variable1 = { say: 'hello', status: 'greeting' };
const variable2 = variable1;

console.log(variable1);
console.log(variable2);

variable2.status = 'sitting';

console.log(variable1);

console.log('------------------------------------------------------');

const who10 = Object.assign({}, who5);
console.log(who10);

console.log('------------------------------------------------------');