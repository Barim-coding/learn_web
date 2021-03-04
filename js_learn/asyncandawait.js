'use strict';

function fetchUser01() {
    // setTimeout(() => 10000);
    // return 'Gradate'
    return new Promise((resolve, reject) => {
        resolve('gradate');
        // reject('gradate');
    });
};

const user01 = fetchUser01();
user01.then(console.log);
// console.log(user01);

console.log('-------------------------------------------------------------')

// using async
async function fetchUser02() {
    return 'Gradate';
}

const user02 = fetchUser02();
console.log(user02);

console.log('-------------------------------------------------------------')

// await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getApple() {
    await delay(1000);
    return 'apple';
}
async function getBanana() {
    await delay(2000); // return delay(3000)
    return 'banana'; // .then(() => 'banana');  와 같은 구문. 동기적으로 작성한 것이 chaining 한 코드보다 직관적임.
}

async function pickFruit() { // 두 과일을 모두 받아오는 함수
    // return getApple().then(apple => {    // promise를 이용한 경우
    //     return getBanana().then(banana => `${apple}, ${banana}`);    // chaining 된 promise
    // });
    // const apple = await getApple(); //  async와 await을 이용해 보다 간결하게 작성 가능.
    // const banana = await getBanana(); // await을 직렬로 구성할 경우 코드 실행에 있어 의미없는 딜레이가 생길 수 있음.
    const applePromise = getApple(); // 각각의 호출을 promise로 선언해 즉시 병렬적으로 실행되도록 함.
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}, ${banana}`;
}
// pickFruit().then(console.log);

function pickFruitAll() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' , '));
}
pickFruitAll().then(console.log);

function pickFruitRace() {
    return Promise.race([getApple(), getBanana()]);
}
pickFruitRace().then(console.log);