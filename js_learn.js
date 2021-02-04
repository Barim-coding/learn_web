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