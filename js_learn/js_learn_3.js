function echoHello() {
    let msg = 'HI';
    console.log('Hello');
    console.log(msg);
}
echoHello();

console.log('------------------------------------------------------');

function changeName(obj) {
    obj.name = 'test';
}

const Gradate = { name: 'Gradate' };
console.log(Gradate.name)
changeName(Gradate);
console.log(Gradate);

console.log('------------------------------------------------------');

function showMessage1(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage1('Hello guys');

function showMessage2(message, from = 'missing') {
    console.log(`${message} by ${from}`);
}
showMessage2('Hello guys');

console.log('------------------------------------------------------');

function printArray(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arr of args) {
        console.log(arr);
    }

    args.forEach((arg) => console.log(arg)); // forEach() 를 이용해 쉽게 출력 가능
}

printArray('This', 'is', 'test', 'message');

console.log('------------------------------------------------------');

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            console.log(a + b);
        case 'substract':
            console.log(a - b);
        case 'divide':
            console.log(a / b);
        case 'multiply':
            console.log(a * b);
        default:
            throw Error('unknown command');
    };
};

console.log('------------------------------------------------------');