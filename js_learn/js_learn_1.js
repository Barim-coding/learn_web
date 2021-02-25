console.log('hello world');

console.log('------------------------------------------------------');

let name = 'jung';
console.log(name);
name = 'test';
console.log(name);

console.log('------------------------------------------------------');

{
    let test = 'new';
    console.log(test);
}

// const infinity = 1 / 0;
// const negativeInfinity = -1 / 0;
// const notAnumber = 'a a' / 2;

// console.log(infinity);
// console.log(negativeInfinity);
// console.log(noAnumber);

console.log('------------------------------------------------------');

const symbol1 = Symbol('test');
const symbol2 = Symbol('test');
console.log(symbol1 === symbol2);

console.log('------------------------------------------------------');

const symbol3 = Symbol.for('test');
const symbol4 = Symbol.for('test');
console.log(symbol3 === symbol4);

console.log('------------------------------------------------------');

console.log('this' + ' is ' + 'test');
console.log('3' + 2);
console.log(`this is string : 1 + 2 = ${1+2}`);
console.log('this is string : 1 + 2 = ${1+2}');

console.log('------------------------------------------------------');