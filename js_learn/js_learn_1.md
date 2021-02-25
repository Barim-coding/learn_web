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