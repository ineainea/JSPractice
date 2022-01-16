# 자바스크립트 10. JSON 개념 정리 와 활용방법 및 유용한 사이트 공유 JavaScript JSON

![sj10](/asset/image/notion//js10.png)

HTTP

- HTTP(Hypertext Transfer Protocol)는 인터넷상에서 데이터를 주고 받기 위한 **서버/클라이언트 모델**을 따르는 프로토콜이다.
- 애플리케이션 레벨의 프로토콜로 **TCP/IP위에서 작동**한다.
- HTTP는 **어떤 종류의 데이터든지 전송**할 수 있도록 설계돼 있다.
- HTTP로 보낼 수 있는 데이터는 **HTML문서, 이미지, 동영상, 오디오, 텍스트 문서** 등 여러종류가 있다.
- 하이퍼텍스트 기반으로(Hypertext) 데이터를 전송하겠다(Transfer) = **링크기반으로 데이터에 접속**하겠다는 의미이다.

JSON (JavaScript Object Notation)

- JavaScript Object Notation (JSON)은 Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷입니다. 웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용합니다
- 데이터를 주고받을때 사용할 수 있는 가장 간단한 파일 포맷이다.
- 텍스트를 기반으로하여 가볍고
- 읽기 편하며
- Key, Value 로 이루어진 파일 포맷이며
- 데이터를 서버와 주고 받을때 데이터를 직렬화하고 전송할 때 사용하고
- 프로그래밍 언어나 플랫폼에 상관없이 사용이 가능하다.

```jsx
1. Obecjt to JSON
stringify(obj)
// Boolean 형을 JSON으로 변환
let json = JSON.stringify(true);
console.log(json); // true

// 배열을 JSON 타입으로 변환
json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"]

// 객체를 JSON으로 변환
const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	symbol: Symbol('id'),
	jump: () => {
		console.log(`${this.name} can jump`);
	}
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2022-01-16T13:12:25.970Z"}
// 함수는 Object에 있는 데이터가 아니기때문에 제외됨.
// Symbol 또한 포함되지 않음

json = JSON.stringify(rabbit, ['name', 'color']); // replace? 에 배열로 해당 Key value만 JSON으로 변환 가능
console.log(json); // {"name":"tori", "color":"white"}
// replace는 callback 함수도 전달 가능. key와 value를 전달함
json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return value;
});
console.log(json);
/*key: , value: [object Object]
key: name, value: tori
key: color, value: white
key: size, value: null
key: birthDate, value: 2022-01-16T13:26:18.604Z
key: jump, value: () => {
		console.log(`${this.name} can jump`);
	}
{"name":"tori","color":"white","size":null,"birthDate":"2022-01-16T13:26:18.604Z"}
*/

json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'ellie' : value; // return 값으로 기존의 value 값을 변경 가능
});
console.log(json);
```

```jsx
2. JSON to Object
parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump(); // can jump!
obj.jump // Uncaught TypeError
// 왜❓❓❓
// rabbit 를 JSON으로 변환할 떄 jump()는 포함 X
// rabbit 를 JSON에서 Object인 obj로 변환할 떄,
// obj는 jump() 함수를 가지고 있지 않게됨

console.log(rabbit.birthDate.getDate()); // 16
console.log(obj.birthDate.getDate()); // Uncaught TypeError
// Object -> JSON 변환했을 시 Date의 value 값은 new Date() 라는 Object에서 string으로 바뀜
// JSON에서 Object으로 다시 변환하면서 String 값은 유지

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date() : value;
});
console.log(obj);
/*key: , value: [object Object]
key: name, value: tori
key: color, value: white
key: size, value: null
key: birthDate, value: Sun Jan 16 2022 22:52:35 GMT+0900 (한국 표준시)}
key: jump, value: () => {
		console.log(`${this.name} can jump`);
	}
{"name":"tori","color":"white","size":null,"birthDate":"2022-01-16T13:26:18.604Z"}
*/

console.log(rabbit.birthDate.getDate()); // 16
console.log(obj.birthDate.getDate()); // 16
```

MDN ➡️

[https://developer.mozilla.org/en-US/d...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa21KcWw0NGxZOGpfakh3ODVwYm85clRZSXVFZ3xBQ3Jtc0tuR2ozc3BhTi1Hdm1EWmIyY3RJbXZSUXhvcU5wbnBNanhlVF8wLTkwZ29KaENuUGhSeXRXYVRkcmEzdGtFRDRYVFhHZEVCZXhrdWRzU1RKejdZcjRnUURXSGMteDZRSElINjlSUXM3X2xka0tpSWttUQ&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FJavaScript%2FObjects%2FJSON)

JavaScript.info ➡️

[https://javascript.info/json](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWlGV2I1WjExSmFpTlFTLUJUc2VjWVN5Q2hvZ3xBQ3Jtc0ttaVgxR3dCMW1NT1VLOEdhN0wwTWVac2VuTDc2SVVqUmVGbUxqLUJ4LVhvTTVWcFlZQV9tVmxjOVktal9QMFUtdG50X1ZPUXBoSmNQeGR2MGhZTldJTkF2VkRkaGVHazdzMTE2X09QeW1KVGVLdUE1QQ&q=https%3A%2F%2Fjavascript.info%2Fjson)

JavaScript.info 한국어 ➡️

[https://ko.javascript.info/json](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXZFMjBhVzlnaXBMbFFvaWQ5d0x2RldHRUVkUXxBQ3Jtc0tsMllHMTVhYjdlSkVTQy1SSFBTN3A1VmFlZ05URUFUdGJoTk95S25yNTJPZjJ3SDdBaUlmMFIya2J4Zjg0R1Vrak54MEpjd1VjY0lsaG5YMzZhQ2V4dndYVldaUUNaVXZabzJNaGxqZldiQ19yakRnNA&q=https%3A%2F%2Fko.javascript.info%2Fjson)

유용한 사이트:
JSON Diff checker:

[http://www.jsondiff.com/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmNQVXhCdndxMER1X09xdHZGR0dlbDgyZUxxd3xBQ3Jtc0tsVTQ1b0t0N2FVRXNYNW52WXNkaW1QYjlnTU9ubEZyQUNrUjV0YkhPdVNFTVJRQ0ZacTBiRVNBaWN2UGRQUkl5cmlzOU4tUVFvSVVJcEFtSzNIbEFjbmk1UGJRMFRFaGFUQ0VwNDRpMm00eGpyS3FpTQ&q=http%3A%2F%2Fwww.jsondiff.com%2F)

JSON Beautifier/editor:

[https://jsonbeautifier.org/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmYxb0FZMXFrZENxSXU5SVhEbXoxanBwSUlyd3xBQ3Jtc0tuVmtxUC1aQmtpblRyQlU5S0dOR2l5eUNkVXk5dGxqN2xsSWpaTEpuUzBxS1dlZXFod2xYZ1pPODU5OFlhNm5HVGtsT0tkR2hhdGpoVTlzNk9FZU5lX2pUT1Jzb1NpMC14Y1FRWTdYcUs3djVyRy1NOA&q=https%3A%2F%2Fjsonbeautifier.org%2F)

JSON Parser:

[https://jsonparser.org/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHFkeWxEQWxicTI0bmlQdmZUcHlQVXh4OE1nd3xBQ3Jtc0tsc3NmZmRwanVRb3dIbUY3UmEwTkFLM1UxZUl0NlJtOHJyb1JqMWk2UkxiZG1taDJvMThDT1RGOGFweGlUVHJmNXUzVkFuZktyT0dVaTYwX3pHMHFpQVJGYW0wcVFaYVFiMVY4Vnhsa3lPUGNYZUFIcw&q=https%3A%2F%2Fjsonparser.org%2F)

JSON Validator:

[https://tools.learningcontainer.com/j...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFgtcW9oTXE4QWRCMExXNGpiOEN1dzhyb1RyUXxBQ3Jtc0trbHFLLUF6QS1ZcFlycFUzeDRYcVRoVjVWZjRQU3VJZWVrX1ZfbWtKVVVDOFQ0OWpxQS1GRU43MzM5X2czVTZxZmxqZmo3M3pYcFZrdEdlVjdaUEhkdWRXZDR1QmhPUUVWc3ZqYk1KWTlPR2FMV0RhWQ&q=https%3A%2F%2Ftools.learningcontainer.com%2Fjson-validator%2F)
