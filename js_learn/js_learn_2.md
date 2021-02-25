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