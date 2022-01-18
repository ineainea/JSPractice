'use strict'
// ul태그에 넣을 li 태그 생성
const li = document.createElement("li");
// li에 넣을 p 태그 생성
const p = document.createElement("p");

// color, cloth 배열
let color = ["blue", "pink", "yellow"];
let cloth = ["p", "s", "t"];

// 랜덤 함수 
function randomArray(array) {
    const random = Math.floor(Math.random() * array.length);
    console.log(random);
    return array[random];
}

// 랜덤 컬러, 옷 받아옴
let randomColor = randomArray(color);
let randomCloth = randomArray(cloth);

// 랜덤 데이터에 맞는 이미지 추가
function addImg() {
    const img = new Image();
    img.src = `img/${randomColor}_${randomCloth}.png`;
    console.log(img.src);
    img.classList.add("randomImg");
    li.prepend(img);
}
addImg();
// 랜덤함수~랜덤 데이터까지의 객체를 만들어서 8번을 돌린다?

function addList() {

    const textNode = document.createTextNode("water");
    p.appendChild(textNode);
    li.setAttribute('id', "item");
    document.getElementById('items').appendChild(li);
    document.getElementById('item').appendChild(p);

}
addList();

// 1. img 파일에 있는 사진 이름 blue, pink, yellow 을 배열로 담아서
// 2. 랜덤 문자열로 반환하는 함수 
// 3. 해당 이름에 맞는 이미지가 출력
// 4. 이미지 왼쪽에 성별 출력
// 5. 성별 왼쪽에 사이즈 출력