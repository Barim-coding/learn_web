// object stringify
let json01 = JSON.stringify(true);
console.log(json01);

let json02 = JSON.stringify(['apple', 'banana', 'kiwi']);
console.log(json02);

console.log('--------------------------------------------------------------------')

// object to JSON
const obj01 = {
    name: 'object01',
    color: 'balck',
    age: '10',
    size: 'big',
    weight: '30',
    bdate: new Date(),
    turn: () => {
        console.log(`${name} has turned.`);
    }
};

let json03 = JSON.stringify(obj01);
console.log(json03);

let json04 = JSON.stringify(obj01, ['color']);
console.log(json04);

let json05 = JSON.stringify(obj01, (key, value) => {
    console.log(`key : ${key} // value : ${value}`); // 최상위 값이 먼저 전달 된 후 각 key:value 가 순서대로 출력
    return value;
});
console.log(json05);

let json06 = JSON.stringify(obj01, (key, value) => {
    console.log(`key : ${key} // value : ${value}`);
    return key === 'color' ? 'white' : value;
});
console.log(json06);

console.log('--------------------------------------------------------------------')

// parse JSON
let json07 = JSON.stringify(obj01);
const jsonToObj01 = JSON.parse(json07);
console.log(jsonToObj01);
obj01.turn(); // 변환 전 기존 object
// jsonToObj.turn(); // 변환을 거치면서 함수가 포함되지 않기 때문에 다시 object로 만들어도 함수가 없는 것.

let json08 = JSON.stringify(obj01);
const jsonToObj02 = JSON.parse(json08, (key, value) => {
    console.log(`key : ${key} // value : ${value}`);
    return key === 'bdate' ? new Date(value) : value;
});
console.log(jsonToObj02);
console.log(obj01.bdate);
console.log(jsonToObj02.bdate);