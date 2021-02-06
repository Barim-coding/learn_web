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

let cntP = 1;
console.log(cntP);
const preIncrement = ++cntP;
console.log(preIncrement);
console.log(cntP);
const postIncrement = cntP++;
console.log(cntP);
console.log(postIncrement);
console.log(cntP);

console.log('------------------------------------------------------');

let cntM = 1;
console.log(cntM);
const preDecrement = --cntM;
console.log(preDecrement);
console.log(cntM);
const postDecrement = cntM--;
console.log(cntM);
console.log(postDecrement);
console.log(cntM);

console.log('------------------------------------------------------');

const word1 = { text: 'word' }; //  word1   ->  ref1
const word2 = { text: 'word' }; //  word2   ->  ref2
const word3 = word1; //  word3   ->  ref1    의 형태로 메모리에 저장됨. 
console.log(word1 == word2); // word1과 word2의 ref가 다름 >> == 연산 시 서로 다른 ref 이므로 false 반환
console.log(word1 === word2); //  type과 관계없이 저장된 ref가 다르기 때문에 false 반환
console.log(word1 === word3); //  저장된 ref가 같으므로 true 반환

console.log('------------------------------------------------------');

console.log(0 == false); //  true
console.log(0 === false); //  false, 0은 boolean type이 아님.
console.log('' == false); //  true
console.log('' === false); //  false, ''은 boolean type이 아님.
console.log(null == undefined); //  true
console.log(null === undefined); //  false, type이 같지 않음.

console.log('------------------------------------------------------');

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } else { continue }
}

console.log('------------------------------------------------------');

for (let i = 0; i <= 10; i++) {
    if (i > 8) { break } else { console.log(i); }
}

console.log('------------------------------------------------------');

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
        case
    };
};

console.log('------------------------------------------------------');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speack() {
        console.log(`${this.name}: hello!`);
        console.log(`${this.name}'s age: ${this.age}`)
    }
}

const Barim = new Person('Gradate', 25);
Barim.speack();

console.log('------------------------------------------------------');

class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get age() { return this._age; }

    set age(value) { this._age = value < 0 ? 0 : value; }
}

const user1 = new User('JeongHo', 'Jeong', -1);
console.log(user1.age);

console.log('------------------------------------------------------');

class PostName {
    static callName = 'practice static';

    constructor(postAlpha) {
        this.postAlpha = postAlpha;
    }

    static printName() { console.log(PostName.callName); }
}

const hello1 = new PostName('A');
const hello2 = new PostName('B');
console.log(PostName.callName);
PostName.printName();

console.log('------------------------------------------------------');

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() { console.log(`draw using ${this.color}`); }
    area() { return this.width * this.height; }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    area() { return (this.width * this.height) / 2; }
}

const rec1 = new Rectangle(10, 10, 'black');
rec1.draw();
console.log(`rec1's area: ${rec1.area()}`);

const tri1 = new Triangle(20, 20, 'white');
tri1.draw();
console.log(`tri1's area: ${tri1.area()}`);

console.log('------------------------------------------------------');

console.log(rec1 instanceof Rectangle);
console.log(tri1 instanceof Rectangle);
console.log(rec1 instanceof Triangle);
console.log(tri1 instanceof Triangle);
console.log(rec1 instanceof Shape);
console.log(tri1 instanceof Shape);
console.log(rec1 instanceof Object);
console.log(tri1 instanceof Object);

console.log('------------------------------------------------------');