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