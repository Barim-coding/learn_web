// asynchronous callback sample
setTimeout(() => {
    console.log('2')
}, 1000); // timeout의 시간 기준 = 1ms , 1000ms = 1s

console.log('----------------------------------------------')

// synchronous callback
function sayHelloSync(hello) {
    hello();
}
sayHelloSync(() => console.log('Hello'));

console.log('----------------------------------------------')

// asynchronous callback
function sayHelloAsync(hello, timeout) {
    setTimeout(hello, timeout); // timeout 을 이용해 실행 시간 딜레이
}
sayHelloAsync(() => console.log('late Hello'), 3000);

console.log('----------------------------------------------')