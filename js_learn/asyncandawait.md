async, await >> promise를 보다 간결하고 동기식으로 작동하게 해주는 것.
기존의 promise 위에 / 기존에 있던 것을 감싸서 사용할 수 있음 >> syntactic sugar

시간이 오래 걸리는 작업은 비동기적으로 실행되게.

promise로 선언된 것이 호출되면 pending 된 상태로 return이 대기.
코드가 resolve를 만나야 fulfilled 상태로 전환 되면서 resolve를 수행.
reject를 만나면 rejected 상태가 되고 uncaught error.

함수 선언 시 함수의 앞에 async를 붙이면 따로 promise를 선언하지 않아도 비동기적으로 함수가 수행됨.
async function func( ){ }   >>  async를 통해 promise가 되는 것.

async가 선언된 함수 내에서만 await 사용 가능.
await이 붙은 코드의 실행이 완료 될 때까지 다음줄을 실행하지 않음.

promise도 중첩되면 callback이 여러번 중첩되어 문제가 생길 가능성이 있음.
이를 await을 이용해 동기적인 것처럼 작성해 코드를 보다 간결하고 직관적이게 짤 수 있음.

throw 'error'; >> 강제로 에러 발생하게 함.
이를 try{ } catch(){ } 로 처리 가능.

단, await이 중첩되어 직렬 상태로 있는 경우 실행 시간에 딜레이가 더 길어질 수 있음.
따라서 promise를 활용하여 각각의 코드를 병렬로 미리 실행 후 await을 이용해 동기화하면 됨.
>> API를 이용해 해결 가능.
Promise.all([ ]); >> 모든 Promise의 코드를 배열로모아 병렬적으로 실행해 병렬로 반환함.
Promise.race([ ]); >> 전달된 Promise 중에 가장 먼저 수행완료 된 결과만 반환함.