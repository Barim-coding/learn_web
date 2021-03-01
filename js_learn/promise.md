promise >> JS에서 제공하는 비동기적 수행을 위한 object. callback 대신 씀.

promise's state : pending(operation 수행 중) ~ fulfilled(성공적으로 끝낸 경우) or rejected(문제가 생긴 경우)

---------------------------------------------------------------------------------------------

producer >> 원하는 기능을 수행해서 해당하는 데이터를 만들어냄.
consumer >> 만들어진 데이터를 이용.

const promise-obj = new Promise(executor: (resolve, reject) => { });
Promise에 전달되는 callback function - executor,
그 executor를 통해 전달되는 callback 함수 2개 - resolve, reject

네트워크에서 데이터를 받아오거나 파일을 읽어오는 경우 시간이 오래 걸릴 수 있음.
 >> promise를 이용해 비동기적으로 수행해 전체적인 실행속도가 느려지지 않게 함.

promise를 만드는 순간 executor가 실행되므로 promise 안에 무거운 작업을 넣을 땐 꼭 확인해야함.

---------------------------------------------------------------------------------------------

consumer는 than, catch, finally 등을 이용해 값을 받아와서 원하는 기능을 수행할 수 있음.

then(value => { }); >> 정상적으로 기능이 수행되고 resolve를 호출한 경우.
만약 전달하는 value가 { }에 전달되는 것과 동일한 경우 'valuce => ' 는 생략하고 { }만 남김.
이때 { }에 전달되는 파라미터도 생략.

이때 resolve를 통과한 성공적인 결과만 잡히기 때문에
error가 발생할 경우 / reject를 통해 Error 메소드가 생긴 경우 Uncaught 로 에러가 나옴.
 >> error에 대한 내용도 callback function을 등록해줘야 함.

catch(error => { }); >> error가 날 경우 수행할 내용을 정의해 줘야 함.
해당 then에서 error를 잡고 싶은 경우 바로 다음줄에 catch를 선언해도 됨.

then은 같은 promise를 return 하기 때문에 then().catch()의 선언이 가능하게 됨. >> 배열에서 API를 여러개 같이 선언하듯이.

finally(( ) => { }); >> 실행 결과에 관게 없이 최종적으로 실행되는 부분.

---------------------------------------------------------------------------------------------

