1-1. script tag 의 기초 옵션

head tag 안에 script tag를 두면 그 tag 부분에서 html 파일의 parsing을 멈추고,
js 파일이 너무 큰 경우 로딩이 너무 오래 걸림..

그래서 body tag 끝에 script tag를 두는 경우가 많음.
컨텐츠 로딩이 이미 다 되어 있으니 컨텐츠는 빨리 봄.
그런데 그 html 파일이 js에 의존이 큰 경우 기능 동작에 문제가 있음..

 head tag 안에 script tag를 둘 때 boolean type의 asyn 옵션 두면 html parsing과 병렬로 다운로드함.
 body 끝 쪽에 두는 것에 비해 다운로드 받는 속도가 빠르기 때문에 준비는 빨라짐.
 단, 병렬로 다운로드가 끝나면 js를 excuting 하기 때문에 정작 필요한 시점에서 작동 안할 수도 있음.
 또 excuting js 동안 html parsing이 멈추기 때문에 용량이 클 경우 나머지 컨텐츠 로드가 늦어질 수 있음.

 head tag 안에 script tag를 둘 때 defer 옵션을 두면 html parsing하면서 js를 다운로드 함.
 html parsing이 끝나면 excuting js, 따라서 html parsing이 끝나고 사용자에게 parsing이 끝난 화면을 보여주고 js를 실행하게 됨.

 가장 안전하면서 의도한 대로 움직일 수 있는 옵션 defer !
 js를 만들 때 첫줄에 'use strict'; 를 작성 >> strict mode 로 개발하겠다!



 --------------------------------------------------------------------------------------------------------------



1-2. Variables 변수


 Variable types
 primitive, single item. 더이상 나눠지지 않음. >> 값 자체가 메모리에 저장됨.
 object, box container. single item 을 묶어서 단위로 사용.
 >> 크기가 커서 메모리에 바로 못올라감. 따라서 reference를 통해 실제로 저장되어 있는 메모리를 가리키게 됨.
 function, first-class function. >> 이게 지원된다? 그러면 변수처럼 사용 가능.

 Immutable data type >> 데이터를 절대 변경하지 못함. primitive types, frozen objects
 Mutable data type >> 데이터를 변경할 수 있음. all objects by default are mutable in JS


 ES6 부터 let ! >> Mutable Type >> rw
 var는 이제 사용 X, 변수를 선언하기 전에 사용할 수 있기 때문에 오류를 유발할 수 있음.
 이걸 var hoisting 이라 하는데, 어디에 선언했냐에 상관 없이 선언을 최상단으로 끌어 올리는 것.
 즉, file 맨 위에 선언이 올라가버림. >> console 보면 undefined 로 나옴.
 또, block scope에 적용되지 않기 때문에 문제가 생길 수 있음.


 Constant const >> Immutable Type >> r
 한번 선언하면 변경이 불가능한 변수. 따라서 항상 그 값이어야 하는 변수를 선언할 때 사용
 for security, thread safety, reduce human mistakes


 숫자 number, JS에서는 dinamic하게 변수가 할당되기 때문에 number를 따로 선언 안해줘도 됨.
 단, infinity(양수를 0으로 나눔), negativeInfinity(음수를 0으로 나눔), not a number(숫자가 아닌 경우)는 표현 불가.
 큰 정수를 쓸 경우 bigInt type >> 숫자 뒤에 n 붙이면 됨.


 문자, 문장 string
 template literals(string)을 많이 쓰는데, '${변수}, type: ${typeof 변수}' 쉽게 문장을 작성할 수 있음.


 공백, null


 고유식별자, symbol
 symbol로 선언한 string이 같아도 서로 다른 변수. >> 고유한 값을 가지는 식별자
 만약 string이 같은 symbol을 선언할 때는 symbol.for('string'); >> 이때는 각 심볼이 서로 같음.


 JS는 Dynamic typing languages >> 변수 선언 시 따로 지정해주지 않아도 runtime에서 선언.
 값에 따라 자동으로 변환도 되고 계산도 가능함.
 변수형을 따로 지정하지 않으면 runtime 중에 변수형이 변경되기 때문에 runtime 중에 오류가 발생할 수 있음.


 구조체, object



 --------------------------------------------------------------------------------------------------------------



2-1. Operator


 String concatenation
 +를 써서 문장을 합칠 수 있음. `string literals ${연산 할 내용}` 가능 (''와 혼동 조심)
 'string' + 숫자 일 경우, 숫자를 string으로 변환 후 문장을 합침.
 ''로 string을 만드는 경우, 특수문자열을 이용해 문장부호나 조판부호 사용 가능.


 Numeric operator
 숫자 연산에 사용. 연산부호 사용.


 Increment and decrement operator
 preIncrement >> ++변수 , 변수 += 1; 과 같음. 연산 후에 대입.
 postIncrement >> 변수++ , 변수를 먼저 대입, 그 후에 +1
 preDecrement >> --변수 , 변수 -= 1; 과 같음. 연산 후에 대입.
 postDecrement >> 변수-- , 변수를 먼저 대입, 그 후에 -1


 Assignment operator, Comparison operator
 Assignment operator >> +=, -=, *=, /=
 Comparison operator >> &lt; , &gt;, &lt;=, &gt;=


 Logical operator
 || >> or, 비교 대상 중 하나만 True면 True
 && >> and, 비교 대상 모두가 True여야 True.
 >> 간단하게 null check에 쓰이기도 함. ~ nullobject가 null이 아닐 때만 값을 받아오기 떄문.
 || 와 && 는 보다 심플한 대상을 앞으로. 보다 무거운 function은 뒤로!
 ! >> 값을 반대로 바꿔줌.


 Equallity
 loose equally == >> 서로 같은가? 비교 / != 는 서로 다른가? >> type을 변경해서 값을 비교
 strict equally === >> type을 비교해서 같은가? / !== 다른가?
 코딩할 땐 왠만하면 strict equally를 이용하기


 0, null, ''(empty string), undefined 는 false 로 간주!


 2-2 Conditional operator
 if elseif if 구문 >> 다른 언어랑 같음 >> if{}elseif{}else{};


 Ternary operator
 조건 ? A : B >> 조건이 true면 A, 아니면 B 실행
 간단하게 쓸 때만 사용


 Switch statement
 다른 언어의 stitch(조건){case} 와 같음
 if~else가 반복 될 때, typescript에서 정해져있는 type 검사할 때 등등에서 사용


 Loop
 다른 언어의 loop와 비슷함
 while(조건){} 은 조건 비교 후 실행, do{}while(조건) 은 일단 실행 후 조건 비교
 for(조건){} 은 다른 언어와 같은 방식. inline varialbe declaration 가능. 단, 중첩된 for 문은 권장 X

 continue >> loop는 진행, 이번 구문만 skip
 break >> loop를 끝냄



 --------------------------------------------------------------------------------------------------------------



3. Arrow Function


 JavaScript >> 절차지향형 언어


 Function
 sub-program 이라고 부르기도. 프로그램 안에서 각각의 기능을 수행.
 Input / Output 이 있음. 재사용 가능.


 Function declaration
 한 함수에 하나의 기능을 하게 설계.
 가능하면 동사 형태로 작명하여 이름으로 알아볼 수 있게 하기.
 Function은 Object로 쓸 수 있음


 Parameter
 Function에 전달되는 값.
 premitive parameter >> value 전달
 object parameter >> reference 전달


 Default Parameter
 ES6에서 추가 됨.
 Parameter = '원하는 Default 값' 으로 선언하여 사용자가 파라미터를 전달하지 않았을 때 출력할 default 값 지정.


 Rest parameter
 배열 형태의 parameter >> ...parameter 로 전달
 다수의 인자를 전달할 때 배열의 형태로 전달하게 됨.


 Local scope
 안에서는 밖을 볼 수 있지만, 밖에서는 안을 볼 수 없다!
 global variable >> block 밖에 선언되어 어디서나 사용 가능.
 local variable >> block 안에서 선언되어 그 안에서만 사용 가능.
 자식 요소는 부모 요소를 참조할 수 있으나, 부모 요소는 자식 요소를 참조할 수 없다.


 Return
 함수의 결과 값을 return으로 전달 >> 모든 함수에서 사용. 정의가 없다? ~ return undefined; 가 생략된 것.


 Early return, Early exit
 조건문을 사용할 때, 조건이 맞지 않는 경우, 값이 -1 이거나 undefined인 경우 return을 통해 loop를 탈출.
 코드를 보다 간결하고 실행과정이 짧아지도록 하는 것.



 --------------------------------------------------------------------------------------------------------------



4-1. Function expression


 First-class function
 function은 다른 변수와 같이 사용 가능, 변수 할당 가능, 파라미터로 전달 가능, 다른 function에서 return 가능.
 함수를 선언함과 동시에 변수에 할당 >> 함수에 이름이 없음 ~ anonymous function
 const 변수 = function (함수 이름 / 생략 가능) {}; >> function의 이름이 있으면 named function
 named function으로 선언하는 이유 >> debuging 할 때 stack에서 함수를 확인하기 위함. 또는 함수 내에서 자신을 호출할 때.
 function declaration은 hoisting 가능 >> 정의 전에 호출이 된다. >> JS가 호출 부분을 최상단으로 옮겨주기 때문.
 function expression은 hoisting 불가능 >> 정의 전에 호출이 안된다.


 Callback
 function의 parameter로 function을 전달할 때
 변수에 callback 할 funciton을 할당해두고 parameter로 전달.


 Arrow function
 항상 anonymous function
 const fucntion-name = (parameter) => return; >> {}을 사용할 경우 return 필수


 IIFE
 함수를 선언하면서 바로 호출할 때 사용.
 (fucntion name(){})(); 형태로 사용.



 --------------------------------------------------------------------------------------------------------------



4-2. Class & Object


 class
 ES6에 추가됨. 문법만 class가 추가된 것 뿐, 기존 기능을 활용
 Template >> no data. only template >> 정의만 하는 것. 실제로 메모리에 올라가지 않음.
 class에 data를 넣어 object를 만드는 것. >> instance


 Class declaration
 class 안에는 field, method가 있음.
 class class-name{constructor(parameter){fields} method-name(){}}
 새로운 object 선언 >> new


 Getter & Setter
 class를 생성하고 사용할 때 잘못된 값을 입력하더라도 방어적으로 처리하게 해주는 것.
 get parameter(){} 으로 return, set parameter(value){} 로 값 설정 가능 >> 잘못된 입력 바로잡기 가능
 set parameter(value){} 은 값을 설정하는 것이므로 value가 필수
 if) class의 변수 = get의 parameter = set의 parameter 인 경우
  >> set의 this.parameter = value; 와 get의 return this.parameter; 로 인해 무한 호출, call stack error 발생
 따라서 get과 set에서 parameter의 이름을 변경 ~ _ 를 붙이는게 일반적. >> 해당 class 에서만 호출


 Static properties and methods
 class가 가지는 고유한 값 또는 data에 상관 없이 동일하게 동작하는 method를 정의할 때 사용
 object, 들어오는 data에 상관없이 class에서 사용할 때 >> 메모리의 사용을 줄이게끔
 class class-name{ static ; constructor (){}}
 static 으로 선언된 내용은 호출하려면 constructor가 아닌 class를 이용해 호출해야함.
 class-name.static-name 의 형태


 Inheritance
 각 class 에서 동일하게 나타나는 것을 class로 선언 후 method를 생성, 그리고 이를 상속하는 class 생성.
 class parent-class{} // class child-class extends parent-class{} 형태로 선언
 만약 자식 class가 사용할 method에 수정이 필요할 경우 자식 class에서 해당 부분을 재정의 가능 >> overwriting >> 다형성
 overwriting 하면 부모 class의 함수는 호출 X, 자식 class에 overwriting 한 부분을 호출하기 때문
 overwriting-method(){super.parent-class-method();} 를 하면 overwriting 한 내용 + 부모 class의 내용 모두 호출


 instanceOf
 class를 통해 만들어진 새로운 object를 확인할 때 사용 >> true, false를 return
 모든 object는 Object를 상속한 것! >> 어떤 object던 Object를 상속해 overwriting 할 수 있음.



--------------------------------------------------------------------------------------------------------------



5. Object


Literals and properties
object 생성 시 {} 로 만들면 object literal, new 로 만들면 object constructor
object = {key : value}

JS는 type이 Runtime 때 정해짐 >> 뒤늦게 type을 추가할 수도 있음. >> 동적 코딩 가능
동적코딩하면 장기적으로 봤을 때는 유지보수나 관리가 힘들지만, 그 상황 당시에 맞게 편하게 수정 가능.


Computed properties
object는 . 이나 [] 형태로 propertie를 불러올 수 있음. >> 이때 string type만 가능.
코딩할 때는 . 을 이용해서 사용하는게 맞고 그 키에 해당하는 값을 받아오려 할 때 사용.
[]를 써서 propertie를 불러오는 것 >> 정확하게 어떤 걸 불러와야할지 모를 때 사용 >> Runtime 때 불러와야 할 때
만약 실시간으로 값을 받아오려는 경우 [] 사용.


Property value shorthand
function을 통해 object를 생성할 때 fucntion(parameter){} objcet{property} 에서 parameter-name == property-name 인 경우
property = parameter; >> property; 로 생략 가능.


Constructor function
동일한 속성을 가지는 object를 여럿 생성해야할 경우 function을 이용.
보통 대문자로 이름 시작.
fucntion(parameter){ this.property = parameter; } 형태, this = { }; return this; 가 생략된 상태.
function(parameter){return{property};} 와 같음.


in operator
해당 object 안에 key가 있는지 확인하는 operator.
console.log('key' in object');
있으면 true, 없으면 false, 정의하지 않은 key에 접근하게 되면 undefined 출력.


for ~ in , for ~ of
for(key in object){} >> object 안에 있는 key 모두.
for(vlaue of object){} >> object를 쓰는게 아니라 배열처럼 사용. literal


Cloning
변수1 = {object1, objetc2}; 변수2 = 변수1; 인 경우,
메모리상에서 변수1의 ref는 object1, object2를 가리키고 변수2는 변수1의 ref가 똑같이 가지고 object1, object2를 가리킴.
>> 변수1과 변수2가 가리키는 object가 동일함 >> 변수2에서 object를 수정하면 변수1도 같이 수정됨. >> 같은 object를 가리키기 때문.

과거에는 for ~ in을 이용해 object를 복사했음. >> 같은 값을 가지는 서로 다른 object가 되는 것.
현제는 Object.assign(destination, target); 를 사용.
같은 property는 값이 계속 덮어 씌워지기 때문에 가장 마지막에 들어간 값이 assign 이후 target이 가지는 값임.


--------------------------------------------------------------------------------------------------------------


6. Array & APIs


object >> propertie 만 있을 수 있음. 그 자체로는 행동을 할 수 없음. >> 서로 연관된 특징이나 행동을 묶어둔 것.

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


--------------------------------------------------------------------------------------------------------------


7.