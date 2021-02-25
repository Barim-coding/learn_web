6. Array & APIs


object >> property 만 있을 수 있음. 그 자체로는 행동을 할 수 없음. >> 서로 연관된 특징이나 행동을 묶어둔 것.

자료구조 >> 비슷한 object를 묶어 둔 것. JS는 Dynamically Typed Language이므로 type이 달라도 같은 자료구조로 묶을 수 있음.

array에서 검색, 삽입, 정렬, 삭제를 이용, 속도와 정보처리를 이해해 상황에 맞는 작업을 이용.


Array
0부터 시작하는 index를 가짐. >> index를 통해 해당 위치에 접근하여 작업 가능.

Declaration
const arr = new Array();
const arr = [];
의 방식으로 선언

Index position
arr[index] 를 이용해 해당 index의 값 접근 가능.
index의 범위를 벗어난 경우 undefined를 출력.

Looping over an array
for, while,
for(let var of array) 이용해 array 내 index에 접근.
array.forEach() 를 이용 >> callback 함수 활용

Add
array.push(var); >> 맨 뒤 데이터 추가
array.unshift(var); >> 맨 앞 데이터 추가

Del
array.pop(); >> 맨 뒤 index의 데이터 삭제
array.shift(); >> 맨 앞 index의 데이터 삭제
array.splice(start-index, count); >> index의 데이터 삭제, count를 생략할 경우 start-index 부터 모두 삭제

array.splice(start-index, count, var1, var2); >> start-index 부터 count만큼 삭제 후 var1, 2를 추가

array.concat(array1); >> array에 array1의 요소를 추가

>> push, pop 빠름 // unshift, shift 느림

Searching
array.indexOf('target'); >> array 내 처음 발견한 target의 index를 반환, target이 없는 경우 undefined 반환
array.lastIndexOf(); >> 똑같은 값이 여러번 있는 경우 가장 마지막 index를 반환
array.includes('target'); >> array 내 target이 있는지를 참/거짓으로 확인