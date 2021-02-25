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