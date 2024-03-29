# 자바스크립트 2. 콘솔에 출력, script async 와 defer의 차이점

**<script> 태그가 <head> 안에 넣는 경우,**

브라우저가 HTML를 다운받아서 DOM요소로 parsing 하다가, <script> 태그가 나타나면 parsing 작업을 멈추고 필요한 js 파일을 서버에서 다운받고, 실행한 뒤, 다시 parsing을 재개한다.

단점 : 사용자의 인터넷 환경이 좋지 않으면, 페이지가 열리는데 많은 시간이 소요됨

![js2_1](/asset/image/notion/js2_1.png)

**<script> 태그를 <body> 안에, 끝부분에 넣는 경우,**

<**script**> 태그가 맨 끝에 위치해있기 때문에, 브라우저는 parsing이 끝난 뒤, JS를 다운받게됨.

장점 : 사용자는 JS를 받기 전 페이지가 이미 준비되서 콘텐츠를 볼 수 있음.

단점 : 사용자가 기존적인 HTML를 빨리 볼 수 있다는 장점은 있지만, 만약 페이지가 JS에 의존적인 구조라면, JS파일을 fetcing 하는 동안 기다려야하는 단점이 있음.

![js2_2](/asset/image/notion/js2_2.png)

<head> 태그 안에 <script> 태그 + 속성 “async” 작성

브라우저가 HTML를 다운로드받아서 parsing 하다가 Js 스크립트를 보면 JS 파일을 병렬로 다운받고, 실행할 때만 잠깐 parsing를 멈춘 뒤, 실행이 끝나면 다시 parsing을 재개한다.

장점 : <body> 태그 끝에 두고 사용하는 것보다 fetching이 prarsing과 병렬적으로 이루어지기 때문에 다운로드 받는 시간을 절약할 수 있음

단점 : 하지만 JS가 HTML이 전부 parsing되기 전에 실행되기 때문에 HTML이 사용자가 원하는 요소가 아직 정의되어 있지 않을 수 있음. 또한 중간에 JS파일을 실행하면서 parsing을 중단하기 때문에 여전히 사용자가 페이지를 여는데 시간이 걸림

![js2_3](/asset/image/notion/js2_3.png)

<head> 태그 안에 <script> 태그 + 속성 “defer” 작성

HTML이 parsing을 하다가 <script> 태그를 만나면, 병렬로 fetching을 명령라고 parsing은 계속 진행한다. parsing이 먼저 끝나고 그동안 다운받아 놓은 JS파일을 그 다음에 실행한다.

async 와 defer의 차이점

async 는 먼저 다운로드가 완료된 순서대로 실행한다. 즉, 정의된 스크립트 순서와는 상관없이 다운로드가 먼저 완료된 순서대로 실행한다.

![js2_4](/asset/image/notion/js2_4.png)

defer 은 parsing 하는 동안 JS파일을 전부 받아놓은 다음에 정의한 순서대로 스크립트가 실행 됨.

![js2_5](/asset/image/notion/js2_5.png)

‘use strict’ 사용하자

Strict Mode의 선언방식.

<aside>
💡 ※Strict Mode란❓
Strict Mode는 코드에 더 나은 오류 검사를 적용하는 방법입니다.
Strict Mode를 사용하면, 예를 들어 암시적으로 선언한 변수를 사용하거나 읽기 전용 속성에 값을 할당하거나 확장할 수 없는 개체에 속성을 추가할 수 없습니다.
`Strict Mode`는 ECMAScript 5 버전에 있는 새로운 기능으로써, 당신의 프로그램 또는 함수를 **엄격한** 운용 콘텍스트 안에서 실행시킬 수 있게끔 합니다. 이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킵니다.

</aside>

이 문구는 ES5부터 적용되는 키워드로, **안전한 코딩을 위한 하나의 가이드라인** 입니다.

vanilla JS 경우 ‘use strict’를 선언하게 되면 유연함을 줄임으로써 에러 발생 가능성을 줄이거나, 에러 원인을 빠르게 찾을 수 있음.

**그렇다면, ES6에서는 Strict Mode가 필요할까?**

- ES6에서는 디폴트가 Strict Mode이기 때문에 **사용할 필요가 없습니다.**
- Not recommended to use “use strict” in ES6?(stack overflow link)
