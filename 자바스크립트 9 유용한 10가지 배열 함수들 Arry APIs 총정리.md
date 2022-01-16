# 자바스크립트 9. 유용한 10가지 배열 함수들. Array APIs 총정리

```jsx
// Q1. make a string out of an array
{
  // toString()
  const fruits = ["apple", "banana", "orange"];
  // console.log(fruits.toString());
  const result = fruits.join();
  console.log(result); // "apple", "banana", "orange"
  const result = fruits.join("|");
  console.log(result); // "apple|banana|orange"
}
```

```jsx
// Q2. make an array out of a string
{
  // split()
  const fruits = "🍎, 🥝, 🍌, 🍒";
  // const arrayFruits = new Array(fruits);
  // console.log(arrayFruits);
  const result = fruits.split(",");
  console.log(result); // ["🍎", "🥝", "🍌", "🍒"]
  const result = fruits.split(",", 2);
  console.log(result); // ["🍎", "🥝"]
}
```

```jsx
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  // reverse()
  const array = [1, 2, 3, 4, 5];
  const reversedArray = array.reverse();
  console.log(reversedArray); // [5, 4, 3, 2, 1]
  console.log(array); // [5, 4, 3, 2, 1], array 배열과 같이 reverse됨
}
```

```jsx
// Q4. make new array without the first two elements
{
  // slice()
  const array = [1, 2, 3, 4, 5];
  const sliceArray = array.slice(2, 5); // 배열에서 원하는 부분만 return 해서 배열로 받아옴
  console.log(sliceArray); // [3, 4, 5]
  console.log(array); // [1, 2]
  // const result = array.splice(0, 2); ,배열 자체를 수정해버림
  // console.log(result); // [1, 2]
  // console.log(array); // [3, 4, 5]
}
```

```jsx
{
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, false, 80),
    new Student("C", 30, true, 90),
    new Student("D", 40, false, 66),
    new Student("E", 18, true, 88),
  ];

  // Q5. find a student with the score 90
  // find()
  // find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 요소가 없다면 undefined를 반환합니다.
  // find 는 첫번째로 true가 나오면, 해당하는 그 배열의 요소를 return해줌
  const result = student.find((student, index) => {
    // console.log(student, index);
    // Student {name: 'A', age: 29, enrolled: true, score: 45} 0
    // Student {name: 'B', age: 28, enrolled: false, score: 80} 1
    // Student {name: 'C', age: 30, enrolled: true, score: 90} 2
    // Student {name: 'D', age: 40, enrolled: false, score: 66} 3
    // Student {name: 'E', age: 18, enrolled: true, score: 88} 4
    return student.score === 90; // true
    // Student {name: 'C', age: 30, enrolled: true, score: 90} 에서 score 90를 찾고, 함수 종료됨
  });
  console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}

  const result = student.find((student) => student.score === 90);

  //for (let i = 0; i < students.length; i++) {
  //    if (students[i].score == 90) {
  //        console.log(students[i]);
  //        const newArray = students[i];
  //        console.log(newArray);
  //    }
  //}
}
```

```jsx
// Q6. make an array of enrolled students
{
  // filter()
  // filter() 는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
  // 각 요소를 시험할 함수는, true를 반환하면 요소를 유지하고, false를 반환하면 버린다.
  const result = students.filter((student) => student.enrolled);
  console.log(result);
  // Student {name: 'A', age: 29, enrolled: true, score: 45} 0
  // Student {name: 'C', age: 30, enrolled: true, score: 90} 2
  // Student {name: 'E', age: 18, enrolled: true, score: 88} 4

  //	for (let i = 0; i < students.length; i++) {
  //    if (students[i].enrolled == true) {
  //        console.log(students[i]);
  //        const newArray = students[i];
  //        console.log(newArray);
  //    }
}
```

```jsx
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
// map()
// 배열안에 들어있는 모든 요소들을 우리가 전달하는 콜백함수를 호출하면서
// 콜백함수에서 가공되서 return 되어진 값들로 대체함
const result = students.map((student) => student.score);
console.log(result); // [45, 80. 90, 66, 88]

const result = students.map((student) => student.score)*2;
console.log(result); // [90, 160. 180, 132, 176]

//	const scoreOnlyArray = [];
//	for (let i = 0; i < students.length; i++) {
//		scoreOnlyArray[i] = students[i].score;
//		console.log(scoreOnlyArray);
	}
}
```

```jsx
// Q8. check if there is a student with the score lower than 50
{
// some()
// some() 메서드는 배열 안의 "어떤(하나) 요소"라도 주어진 판별 함수를 통과하는지 테스트.
// 빈 배열에서 호출하면 무조건 false를 반환
// 배열의 요소 중에서 콜백함수의 return이 true가 되는 요소가 있는지 없는지 확인함
// 요소 중 하나라도 콜백함수의 테스트에 true에 해당한다면 무조건 true로 반환함

	const result = students.some((student) => student.score < 50);
	console.log(result); // true

// every()
// every() 메서드는 배열 안의 "모든" 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환.
// every는 callback이 거짓을 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한 번씩 callbackFn 함수를 실행합니다.
// 해당하는 요소를 발견한 경우 every는 즉시 false를 반환합니다.
// 빈 배열에서 호출하면 무조건 true를 반환!
	const result2 = students.every((student) => student.score < 50);
	console.log(result2); // false
	const result3 = !students.every((student) => student.score >= 50);
	console.log(result3); // true
//	less50 = [];
//	for (let i = 0; i < students.length; i++) {
//		if (students[i].score < 50) {
//				const less50 = students[i];
//		}
	console.log(less50);
	}
}
```

```jsx
// Q9. compute students' average score
{
  // reduce()
  // reduce()는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback 함수를 한 번씩 실행하는데,
  // 콜백의 최초 호출 때 accumulator와 currentValue는 다음 두 가지 값 중 하나를 가질 수 있습니다. 만약 reduce() 함수 호출에서 initialValue를 제공한 경우, accumulator는 initialValue와 같고 currentValue는 배열의 첫 번째 값과 같습니다. initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같습니다.
  // initialValue를 제공하지 않으면, reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫 번째 인덱스는 건너 뜁니다. initialValue를 제공하면 인덱스 0에서 시작합니다.
  const result = students.reduce((prev, curr) => {
    console.log("--------");
    console.log(prev);
    console.log(curr);
    return curr;
  }, 0);
  /* --------
VM188:19 0
VM188:19 Student {name: 'A', age: 29, enrolled: true, score: 45}
VM188:20 Student {name: 'B', age: 28, enrolled: false, score: 80}
VM188:18 --------
VM188:19 Student {name: 'B', age: 28, enrolled: false, score: 80}
VM188:20 Student {name: 'C', age: 30, enrolled: true, score: 90}
VM188:18 --------
VM188:19 Student {name: 'C', age: 30, enrolled: true, score: 90}
VM188:20 Student {name: 'D', age: 40, enrolled: false, score: 66}
VM188:18 --------
VM188:19 Student {name: 'D', age: 40, enrolled: false, score: 66}
VM188:20 Student {name: 'E', age: 18, enrolled: true, score: 88}
undefined */

  const result = students.reduce((prev, curr) => {
    console.log("--------");
    console.log(prev);
    console.log(curr.score);
    return prev + curr.score;
  }, 0);
  console.log(result); // 369
  console.log(result / students.length); // 73.8

  /* --------
VM273:19 0
VM273:20 45
VM273:18 --------
VM273:19 45
VM273:20 80
VM273:18 --------
VM273:19 125
VM273:20 90
VM273:18 --------
VM273:19 215
VM273:20 66
VM273:18 --------
VM273:19 281
VM273:20 88
undefined */

  // reduceright()
  // 배열의 젤 뒤부터 시작
  const result = students.reduceright((prev, curr) => {
    console.log("--------");
    console.log(prev);
    console.log(curr.score);
    return prev + curr.score;
  }, 0);
  console.log(result); // 369

  /* --------
VM307:19 0
VM307:20 88
VM307:18 --------
VM307:19 88
VM307:20 66
VM307:18 --------
VM307:19 154
VM307:20 90
VM307:18 --------
VM307:19 244
VM307:20 80
VM307:18 --------
VM307:19 324
VM307:20 45
undefined */

  //	let sum = 0;
  //	let averge = 0;
  //	for (let i = 0; i < students.length; i++) {
  //		sum = sum + students[i].score;
  //		averge = sum / students.length;
  //	}
  console.log(averge);
}
```

```jsx
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // join()
  // join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
  // 모든 배열 요소가 문자열로 변환된 다음 하나의 문자열로 연결됩니다.
  // 요소가 undefined 또는 null이면 빈 문자열로 변환합니다.
  const result = students.map((student) => student.score);
  console.log(result); // [45, 80, 90, 66, 88]
  result.join();
  console.log(result); // '45, 80, 90, 66, 88'

  const result = students.map((student) => student.score).join();
  console.log(result); // '45, 80, 90, 66, 88'

  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result); // '80, 90, 66, 88'

  //	let scoreOnly = [];
  //	for (let i = 0; i < students.length; i++) {
  //		scoreOnly = students[i].score;
  //		const scoreStirng = scoreOnly.toSring;
  //	}
  //	console.log(scoreString);
}
```

```jsx
// Bonus! do Q10 sorted in ascending order

// result should be: '45, 66, 80, 88, 90'
{
// sort()
// callback의 매개변수 a, b에는 이전 값과 현재 값이 전달이 되고
// sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
// compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
// compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다
// compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.

const result = students
.map((student) => student.score)
// .sort()
.sort((a,b) => a - b)
.join();
console.log(result); // '45, 66, 80, 88, 90'
}

const result = students
.map((student) => student.score)
.sort((a,b) => b - a)
.join();
console.log(result); // '90, 88, 80, 66, 45'
}
```
