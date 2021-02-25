class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { return this._age; }
    set age(value) { this._age = value < 0 ? 0 : value; }

    get firstName() { return this._firstName }
    set firstName(value) { this._firstName = value == '' ? 'blank' : value }

    get lastName() { return this._lastName }
    set lastName(value) { this._lastName = value == '' ? 'blank' : value }
}

const user1 = new User('JeongHo', 'Jeong', 25);
console.log(user1.age);
console.log(user1.firstName);
console.log(user1.lastName);

const user2 = new User('', '', -1)
console.log(user2.age);
console.log(user2.firstName);
console.log(user2.lastName);

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