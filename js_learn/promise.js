'use strict';

// producer - resolve
const promise01 = new Promise((resolve, reject) => {
    console.log('somthing is running...');
    setTimeout(() => {
        resolve('barim');
    }, 2000);
});

console.log('------------------------------------------------------');

// consumer - then
promise01.then(value => {
    console.log(value);
});

console.log('------------------------------------------------------');

// producer - reject
const promise02 = new Promise((resolve, reject) => {
    console.log('maybe running now...');
    setTimeout(() => {
        reject(new Error('timeout'));
    }, 3000);
});

console.log('------------------------------------------------------');

// consumer - catch, finally
promise02.catch(error => {
        console.log(error);
    })
    .finally(() => { console.log('finally!') });

console.log('------------------------------------------------------');

// promise chaing
const chainigPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

chainigPromise
    .then(value => value + 1) // 1 + 1 = 2
    .then(value => value + 2) // 2 + 2 = 4
    .then(value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(value - 1), 1000); // 4 - 1 = 3
        });
    })
    .then(value => console.log(value)); // 3

console.log('------------------------------------------------------');

// error handling
const getMilk = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('1 milk'), 1000);
    });

const getButter = milk =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${milk} => Butter`), 1000);
    });

const cook = butter =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${butter} => Cream`), 1000);
    });

getMilk()
    .then(milk => getButter(milk)) //  .then(getButter)
    // .catch(error => { return egg })
    .then(butter => cook(butter)) //  .then(cook)
    .then(result => console.log(result)) //  .then(console.log)
    .catch(console.log);