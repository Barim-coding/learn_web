6-1. Array & APIs


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


6-2. Array APIs

join() >> 배열 내 요소를 string으로 변환. () 안에 구분자를 전달할 경우 해당 구분자로 출력, 문자열도 가능.
split(separator, limit?) >> string 의 API. separator 구분할 기준, 문자열, 정규 표현식 가능. limit return 받을 길이(개수). 생략 가능.
reverse() >> 배열 내 요소 순서를 거꾸로 정렬. reverse를 사용하면 원래 배열 자체도 역정렬함.
slice(start, end?) >> 해당 배열의 index를 기준으로 start ~ end 까지 복사한 배열을 새로 생성. end를 지정하지 않을 경우 배열의 끝까지. end를 지정할 경우 index가 end-1 까지 복사됨.

find(callback-function(this, value, index, obj){}) >> callback-function을 만들어서 전달. 해당 함수에 만족하는 요소를 찾아 boolean type으로 return, true가 return 되면 함수 종료, 해당 값을 return. callback function에 arrow function이 들어가도 됨.

filter() >> callback function을 전달해서 함수에 만족하는 요소를 새로운 배열로 만들어서 반환.

map() >> callback function을 전달해서 함수에 만족하는 요소를 mapping 후 전달한 function에 맞게 변환해서 배열로 만들어 반환.

* callback function에서 전달되는 인자는 이해하기 쉽게 연관된 이름으로 전달하는게 좋음. 햇갈릴 위험이 큼.

some() >> 배열 내 요소 중에 callback function을 거쳤을 때 true가 있는지 확인, 하나라도 있으면 true 출력. 없다면 false.
every() >> 배열 내 모든 요소가 callback function을 거쳤을 때 true여야만 true를 반환. 아니면 false.

reduce((prevoius, current) => callback function, current index) >> 배열의 요소가 callback function을 지나면서 값이 누적됨. previous 값에 이전 연산값 저장, current에 배열의 아이템을 순차적으로 전달.

