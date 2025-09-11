// 변수 선언 부터 시작

// 변수: 데이터를 저장하는 공간
// 변수 : var(es5), let(es6), const(es6)
// var의 문제점 : 오류

// 변수의 이름은 중복되지 않아야함
// const color = "red";
// const color = "blue";
// console.log(color)

// let a = 1; 
// 1이라는 값을 a에 저장해주는 것 = 이건 같다는 뜻 아님

// const color = "red";
// color = "blue";
// console.log(color)

//let은 변경가능 const는 무조건 상수 절대적으로 변경이 안되는 수(예:주민번호) 한번 지정하고 나서 절대 변경하지 않을 거야 할 때 const씀
// let은 변수를 한 번 선언한 이후 값을 변경할 수 있음 
// const는 변수를 선언한 이후에 값을 변경하면 안됨 상수를 선언할 때 많이 씀


// ★var와 let의 차이점(호이스팅)★
// let은 변수를 선언했지만 너가 먼저 출력을 시켰으니까 접근을 못하게 만들음
// var는 접근을 할 수 있게 만들었음 let은 접근 못하게 만들게한 것 
// 선언을 먼저해야함
// 1. 호이스팅 문제(실행이 되기 전 선언한 변수를 미리 찾아서 보관해둔다 변수만 보관하고 값은 보관하지 않음 이것을 호이스팅이라고 한다)
// (var는 호이스팅이 됨. let은 호이스팅이 되지만 변수 선언하기 전에 사용하면 에러가 남)
// 2. 중복선언 문제
// (var는 중복선언이 가능함/let은 중복선언이 안됨)
// 3. 지역변수와 전역변수
// (전역변수: 블럭 밖에서 선언된 변수, 어디서든 쓰일 수 있음)
// (지역변수: 블럭 안에서 즉 특정 영역에서만 선언된 변수 해당 영역 내에서만 쓸 수 있음 / 부모에 감싸져 있는 변수)
// (var는 지역변수를 전역변수로 끌어올려줌 함수만 제외하고 함수내에서 선언한 변수만 제외하고 출력을 안시켜야 되는데 자꾸 출력시킴)
// (let은 오류뜸)

// 컴퓨터는 숫자 0부터 시작 1부터 아님


// let a = 1;
// console.log(a);


// 변수 이름 만들 때 
// 1. 숫자로 시작하면 안된다(예: $name, _name, 영문자로 시작)
// 2. 대부분의 변수는 소문자로 시작
// 3. camel 표기법: 단어첫시작 대문자로 또는 _(언더바): 단어연결사이 언더바 넣기 표시법

// 변수에 들어갈 데이터 타입 
// 숫자, 문자열, 불리언, 심볼(자주쓰진않음), 배열, 객체

// let a = 0.55; //숫자, 정수와 실수 모두 가능
// let b = "5"; //문자열 string 따옴표로 감싸져 있음 작은 따옴표도 가능함
// console.log (a);
// console.log (b);
// console.log (a + b); 
//"" or '' 안에 들어가는 건 문자열로 인식함 그래서 더하기 해도 둘이 문자로 나오는 것 여기서 a는 숫자 b는 문자로 인식


// 불리언(boolean)타입. 참 또는 거짓 논리연산에 사용되는 데이터 타입. -> true 또는 false로 사용

// 변수는 기본적인 연산이 가능함
// 연산자: + - * / %(나머지 연산자) > < >= <= == != && ll !
// let num = 1 + 2;
// let num = 1 - 1; //곱하기 나누기 다 됨
// console.log(num);


// let num = 1;
// num = num + 2; 
// console.log(num);
//위에서부터 아래로 저장 되는 것 


// % 나머지 연산자 10 % 3 = 1 은 3으로 나눈 나머지 1을 반환함

// 비교연산자 
// let num = 1;
// // num = num < 2; // false or true 출력됨
// num = num <= 2;
// console.log(num)

// num = num ==2;
// console.log(num);
// == 비교 연산자 같은 값인지 비교하는 연산자

// num = num === 1;
//===비교 연산자 값과 타입을 모두 비교하는 것        

// 1 == "1" true 결과값 같아서 값만 비교
// 1 === "1" false 문자열과 숫자열까지 구분 값과 타입까지 비교 

// ! 반대를 상징함  값을 반전 시키는 것 true는 false로 false는 true로 노출시켜줌
// != 은 같지 않은 값을 비교하는 것 값만 비교
// !== 같지 않은 값을 비교 값과 타입을 모두 비교

//논리 연산자 
// &&, ||
// && and 연산자 두값이 모두 true일때만 true를 반환함
// let num = 1;
// num = num > 2 && num < 10;
// console.log(num);

// // || or 연산자 두값중 하나만 true여도 true를 반환함

// num = !num;
// ! 논리부정 연산자 값을 반전시키는 것 true는 fales로 ~~~~ 반전쓰

// html 요소 가져오기

// get 메서드, 쿼리 요소

// getElementById
let title = document.getElementById("title");
console.log(title);

// // getElementsByClassname
let items = document.getElementsByClassName("item");
console.log(items);

// getElementsByTagname
let liItems = document.getElementsByTagName("li");
console.log(liItems);

// querySelector: 무조건 하나만 조회함 첫번째 요소만 가져옴
let menuTitle = document.querySelector("title");
console.log(menuTitle);


// querySelectorAll: 모두 조회함 
let menuItems = document.querySelectorAll(".item");
console.log(menuItems);



// html 요소 조작하기


// textContent: html 태그 모두 제외하고 순수하게 텍스트 내용만 출력 

// title.textContent = "분식";
// title.textContent = "<h3>분식</h3>";

// innerHTML : html 태그 포함하여 출력
title.innerHTML = "<h3>분식</h3>"

// setAttribute: html 태그의 속성을 출력, 변경 또는 추가, 삭제 모두 가능

let input = document.querySelector("#menu");
input.setAttribute("placeholder", "입력해주세요");

input.setAttribute("required", "");

// removeAttribute : html 속성제거
input.removeAttribute("placeholder");


// html 요소 스타일링 하는 법
// 변수.style.속성명 = "값"

let desc = document.querySelector(".desc");
console.log(desc);
desc.style.color = "red";
desc.style.fontSize = "30px";


desc.classList.add("dark");
desc.classList.remove("dark");