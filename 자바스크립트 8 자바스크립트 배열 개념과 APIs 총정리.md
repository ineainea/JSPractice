# 자바스크립트 8. 자바스크립트 배열 개념과 APIs 총정리

Array

```jsx
1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // [1, 2]
```

```jsx
2. Index position
const  fruits = ['🍓', '🍌'];
coonsole.log(fruits); // ['🍓', '🍌'];
console.log(fruits.length); // 2
console.log(fruits[0]); // '🍓'
console.log(fruits[1]); // '🍌'
console.log(fruits[2]); // undifeined
console.log(fruits[fruits.length - 1]); // 배열의 맨 마지막 인덱스 검색
```

```jsx
3. Looping over an array
// print all fruits
const fruits = ['🍓', '🍌'];

// a. for
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
	consoole.log(fruit);
}

// c. forEach
// 배열안에 들어있는 value 들 마다 내가 전달한 함수를 전달함
fruits.forEach((fruit) => console.log(fruit));
// '🍓'
// '🍌'
```

```jsx
4. Addition, deletion, copy
// push(): add an item to end
fruits.push('🍉', '🍊');
console.log(fruits); // ['🍓', '🍌', '🍉', '🍊'];

// pop: remove an item from the end
// 삭제된 value가 return 됨
fruits.pop();
console.log(fruits); // ['🍓', '🍌', '🍉'];
fruits.pop();
console.log(fruits); // ['🍓', '🍌'];
const poped = fruits.pop();
console.log(poped); // '🍌'

// unshift: add an item to the benigging
fruits.unshift('🍉', '🍊');
console.log(fruits); // ['🍉', '🍊', '🍓', '🍌'];

// shift: remove an item from the benigging
fruits.shisht();
console.log(fruits); // ['🍊', '🍓', '🍌'];
fruits.shisht();
console.log(fruits); // ['🍓', '🍌'];

// ❗❗note❗❗
// 1. shift, unshift are slower than pop, push
// shift, unshift 의 경우, value 가 추가될 때 다른 value 를 전체적으로 움직이게 만드는 구조라서
// 배열의 길이가 길면 길수록 성능이 저하된다.
// 가능하면 pop, push를 사용하자
// 뒤에서 접근하여 값을 빼고 넣는 과정은 속도가 빠르다.

// splice: remove an item by index position
// 지정된 index의 value 를 삭제
fruits.push('🍉', '🍊');
console.log(fruits); // ['🍓', '🍌', '🍉', '🍊'];
// fruits.splice(1);
//console.log(fruits); // ['🍓'];
fruits.splice(1, 1);
console.log(fruits); // ['🍓', '🍉', '🍊'];
// splice 하면서 추가도 가능
fruits.splice(1, 1, '🍑', '🍒');
console.log(fruits); // ['🍓', '🍑', '🍒', '🍉', '🍊'];

// combine two arrays
const fruits2 = ['🍐', '🍍'];
const combineFruits = fruits.concat(fruit2);
console.log(combineFruits); // ['🍓', '🍑', '🍒', '🍉', '🍊', '🍐', '🍍'];
```

```jsx
5. Searching
// indexOf: find the index
const fruits = ['🍓', '🍌', '🍑', '🍒', '🍉'];
console.log(fruits);
console.log(fruits.indexOf('🍓')); // 0
console.log(fruits.indexOf('🍉')); // 4
console.log(fruits.indexOf('🍇')); // -1, 배열안에 없는 값이 있다면 -1 로 반환

// includes
// 배열안에 해당 값이 있는지 없는지 확인
console.log(fruits.includes('🍉')); // true
console.log(fruits.includes('🍇')); // false, 없으면 false를 반환

// lastIndexOf
const fruits = ['🍓', '🍌', '🍑', '🍒', '🍉'];
fruits.push('🍓');
console.log(fruits); // ['🍓', '🍌', '🍑', '🍒', '🍉', '🍓'];
console.log(fruits.indexOf('🍓')); // 0
// indexOf는 그 값이 들어있는 가장 첫번째 번호를 반환한다. 같은게 있어도 가장 첫 번째에 있는거!
console.log(fruits.lastIndexOf('🍓')); // 5
// lastIndexOf는 같은 같이 있더라도 가장 마지막에 만나는 값을 반환한다.
```
