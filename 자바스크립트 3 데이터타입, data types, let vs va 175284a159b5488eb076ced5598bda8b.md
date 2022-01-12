# 자바스크립트 3. 데이터타입, data types, let vs var, hoisting

```jsx
1. 'use strict'; (ES6에선 X)
```

```jsx
2. Variable, rw(read / write)
// 메모리에 읽기, 쓰기 가 가능!

let (added in ES6)

let name = 'ellie';
console.lod(name); // "ellie"
name = 'hello';
console.lod(name); // "hello"

//어플리케이션을 실행하면 어플리케이션마다 메모리가 할당됨.
// 메모리는 텅 빈 박스와 같고, 어플리케이션마다 쓸수있는 메모리가 제한적으로 할당되어진다.
// let name을 선언하게 되면, 하나의 메모리를 가리킬 수 있는 포인터가 생김
// name 이라는 변수가 가리키는 메모리 어딘가에 'ellie'라는 값을 저장할 수 있음
// 그리고 이전 값 대신 'hello' 값도 넣을 수 있음

Block scope

let globalName = 'global name'; // Global Scope

{
	let name = 'ellie'; // Block Scope
	console.lod(name); // "ellie"
	name = 'hello';
	console.lod(name); // "hello"
}
console.lod(name); // (아무값도 안나옴)

// Block 안에 코드를 입력하게 되면, Block 밖에서는 안의 코드를 볼 수 없음
// Block 밖에서 정의해서 사용하는 변수를 "Global Scope"이라 한다.
// Global Scope 은 어디서나 호출할 수 있음
// Global Scope 는 어플 실행부터 종료할 때까지 항상 메모리에 탑재되어있기 때문에 최소한으로 사용해서
// 메모리를 절약하는 것이 좋으며, 가능하면 Class, 함수, for문, if문 등에서 필요한 부분에서만 정의해서 사용하자

// var
// var hoisting (move declaration  from bottom to top)
// has no block scope
{
	age = 4;
	var age;
}
console.log(age); // 4
```

```jsx
3. Constant, r(read only)
// 읽기만 가능
// 한번 할당하면 절대 값이 바뀌지 않음
// use const whenever possible.
// only use let if variable needs to change.

// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// favor "immutable data type" always for a few reason:
// - security
// - thread safety
// - reduce human mistake

const daysInWeek = 7;
const maxNumber = 5;
// Constant 는 메모리를 가리키는 포인터가 잠겨있음
// 그래서 값을 선언함과 동시에 할당한 뒤로는 값을 변경할 수 없음

// Mutable data type
// 값이 계속 변경될 수 있는 데이터 타입
```

```jsx
4. Variable types
// primitive type(single item): number, string, boolean, null, undefined, symbol
// primitive type 은 값이 메모리에 바로 저장됨.

// object type: box container
// object type 은 object를 가르키는 reference가 메모리에 저장됨.
// function: first-class function, 함수가 데이터 타입처럼 변수에 할당이 가능, 다른 함수를 인자로 전달 받을 수 있고, return 으로 다른 함수를 받을 수 있다.

data type for number
// 자바스크립트에선 다이나믹 타입으로 숫자는 number로 하나로 쓸 수 있음
let a = 12;
let b = 1.2;

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//Typescript 에서는
let a: number = 12;
let b: number  = 1.2;

//💡number - special number values:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity ); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yeat)
const bigInt = 12345678901234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // type: bigInte
Number.MAX_SAFE_INTEGER;
// 크롬, 파이어폭스만 지원됨. 다른 브라우저는 아직 지원하지않음

// string
const char = 'c';
const brendan = 'brendan';
const  greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
// value: "hello brendan", type: string
const hellobob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${hellobob}, type: ${typeof hellobob}`);
// value: "hi brendan!", type: string

// boolean
// false: 0, null, undefuned, NaN, ''(비어있는 값)
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
// value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`);
// value: false, type: boolean

// null, 아무것도 아닌것
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// value: null, type: object

// undefined, 선언은 되었지만, 어떤 값도 정의되지 않은 것
let x;
console.log(`value: ${x}, type: ${typeof x}`);
// value: undefined, type: undefined

// symbol, create unique identifiers for objects
// map, 다른 자료 구조에서 고유한 식별자가 필요하거나
// 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을때 고유한 식별자가 필요할때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // symbol1 과 symbol2 가 동일한 지 검사
// false
// 동일한 Symbol를 만들고 싶면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// true

console.log(`value: ${symbol1}, type: ${typeof symbol1 }`); // Error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`); // value: id, type: symbol
// .description를 붙여야 출력됨

// object, real-time object, data structure
const ellie = {name: 'ellie', age: 20};
// const 로 지정한 object 'ellie'는 다른 object로 변경이 불가능함.
// 하지만 name과 age는 다른 값으로 할당이 가능!
ellie.age = '21';
console.log(ellie.age); // 21, 값이 변경됨
```

![Untitled.png](D:/코딩공부/드림코딩/드림코딩\_자바스크립트 기초 개념/JS3/Untitled.png)

```jsx
5. Dynamic typing: dynamically typed language
// 선언할때 데이터 타입을 선언하지 않고, run time 즉, 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수 있음
let text = 'hello';
console.log(text.charAt(0)); // 'h'

console.log(`value: ${text}, type: ${typeof text}`); // value: "hello", type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number

console.log(text.charAt(0)); // TypeError

// 초기에 개발자가 타입을 생각하고 코드를 작성해도
// Run time 과정에서 자바스크립트가 스스로 타입을 정해버려서
// 예상과는 다른 데이터 타입이 할당될 수 있음‼‼‼
// Typescript 의 등장 이유....😫
```
