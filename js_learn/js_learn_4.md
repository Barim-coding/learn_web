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