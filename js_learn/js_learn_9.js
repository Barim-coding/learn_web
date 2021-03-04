function sayHello() {
    console.log('hello');
}
sayHello();

console.log('--------------------------------------------------');

function numAdd(a, b) {
    return a + b;
}
console.log(numAdd(1, 2));

console.log('--------------------------------------------------');

function printFnLog(fn) {
    console.log(fn);
}

printFnLog(numAdd);