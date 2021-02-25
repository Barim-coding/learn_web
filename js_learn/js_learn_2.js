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