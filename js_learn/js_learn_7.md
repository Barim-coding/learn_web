7. JSON

HTTP >> client - reqeust , server - response
>> AJAX 활용. 웹 페이지에서 동적으로 서버에게 데이터를 주고 받을 수 있는 기술. ex) XHR

XML >> html과 같은 markup-language

서버와 통신할 때 fetch() API, XHR, JSON 등을 이용.
>> fetch()는 최근에 나온 기술이라 IE에서 작동 X, XHR은 파일 크기가 너무 커지고 가독성이 나빠 사용 X,
    JSON을 주로 이용.

JSON >> Javascript Object Notation, JS에서 Object{key : value} 인 것과 같이 key : value로 이루어짐.
저용량의 텍스트 기반 파일, 서버통신할 때 가장 작은 파일 단위.
프로그램 언어, 환경에 관계 없이 사용 가능.
브라우저, 모바일 등에서 이용 가능, 서버통신 외에 Object로 파일을 저장할 때 사용 가능.

Object ~ serialize ~ JSON (string)
JSON.stringify(object, replacer?) >> object를 string으로 변환. callback function을 이용해 변환 방식을 조정할 수 있음.
JSON으로 변환하는 건데 object 안에 함수가 있는 경우 함수는 변환되지 않음. >> 함수는 object 내의 데이터가 아니기 때문.
symbol()과 같이 JS만 가지고 있는 데이터 형태도 JSON으로 변환되지 않음.
replacer로 변환하고자 하는 property를 지정하게 되면 해당 property만 JSON으로 변환 가능.
replacer는 key와 value를 전달받을 수 있으므로 callback function을 넣어 JSON으로 변환되는 값을 조정할 수 있음.

JSON (string) ~ deserialize ~ Object
JSON.parse(json, reviver?) >> json을 object로 변환.
stringify를 통해 json이 된 object는 변환 과정 중에 함수를 포함하지 않음.
    >> parse 된 obj는 stringify 되기 전에 가지고 있던 함수를 사용할 수 없음.
reviver로 callback function을 전달 가능.




참고 할만 한 웹 사이트
JSON Diff >> 받아온 JSON 파일들을 비교할 때 사용. 디버깅 때 유용.
JSON Beautifier >> 서버에서 받아온 JSON 파일의 format이 망가지는 경우가 있음. 이걸 간단하게 틀을 만들어서 보여줌.
JSON Parser >> JSON을 Object로 변환해줌.
JSON Validator >> 입력한 JSON 파일이 정상인지 확인 가능.
