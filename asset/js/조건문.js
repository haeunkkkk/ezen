//if 문

// if(조건문) {
//     조건 충족 시 코드 실행
// }


if (false) {
    console.log("참입니다.");
} else {
    console.log("거짓입니다.");
};


let age = 12;
// if(age >= 18) {
//     console.log("운전 가능함");
// }else {
//     console.log("운전 불가능")
// };

// 삼항연산식
// 조건 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
let result = age >= 18 ? "운전 가능함" : "운전 불가능";
console.log(result);



// let score = 75;
// let score = prompt("수학 점수를 입력해주세요");
// if(score >= 90) {
//     alert("A등급")
// } else if (score >= 80 && score < 90) {
//     alert("B등급")
// } else if (score >= 70 && score < 80) {
//     alert("C등급")
// } else if (score >= 60 && score < 70) {
//     alert("D등급")
// } else {
//     alert("F등급")
// }


// let age = prompt("나이를 입력해주세요(숫자만)");
// if(age < 10) {
//     alert("어린이")
// } else if (age < 20 && age >= 10) {
//     alert("청소년")
// } else if (age < 30 && age >= 20) {
//     alert("20대")
// } else if (age < 40 && age >= 30) {
//     alert("30-40대")
// } else {
//     alert("어르신")
// }


// let age = prompt("나이를 입력해주세요");
// if (age < 10) {
//     alert("어린이")
// } else if(age < 20) {
//     alert("청소년")
// } else if(age < 30) {
//     alert("20대")
// }  else if (age < 50) {
//     alert("30-40대")
// } else {
//     alert("어르신")
// }

// let time = prompt("현재 시간을 입력해주세요 (숫자만, 0~23)")
// if (time >= 6 && time < 11) {
//     alert("아침메뉴 추천: 토스트")
// } else if(time >= 11 && time < 15) {
//     alert("점심메뉴 추천: 김밥, 순대, 떡볶이")
// } else if(time >= 15 && time < 18) {
//     alert("간식메뉴 추천: 과자, 제티")
// } else if(time >= 18 && time < 22) {
//     alert("저녁 메뉴 추천: ")
// } else {
//     alert("야식 메뉴 추천: ")
// }


//======================================
//switch 문: 지정된 값만 할 수 있음 굳이 잘 안씀


let fruit = "사과"
switch(fruit) {
    case "사과":
        console.log("사과입니다");
        // break; 
    case "바나나":
        console.log("바나나입니다");
        break;
    case "메론":
        console.log("바나나입니다");
        break;
    default:
        console.log("그외의 과일");
        break;
//     case 80: 
//         // 값을 충족하는 코드
//         break;
//     case 81:
//         //값을 충족하는 코드
//         break;
}

// ==================================================================
// for 문
// ++: 1씩 더하는 것 / 
// i++ = num = num + 1
// i-- 는 i = i - 1의 줄임말
// i+=2 는 i=i+2 의 줄임말(걍외우삼)
// i-=2 는 i=i-2 의 줄임말(걍외우삼)
// i*=2 는 i=i*2 의 줄임말(걍외우삼)
// i/=2 는 i=i/2 의 줄임말(걍외우삼)ㅠㅠ



// for(초기값; 조건식; 증감식){
//     반복할 코드
// };

// for(let i = 0; i < 10; i++){
//     if (i % 2 === 0) {
//         console.log("안뇽", i);
//     }
// };

// //%나머지 연산자 

// for(let i = 0; i < 10; i+=2 ){
//     console.log(i);
// };
// //실행할 때 좀 더 효율적


//이중 for 문
// for(let i = 2; i < 10; i++){
//     // console.log(i);
//     for(let j = 1; j < 10; j++)
//         console.log(i , "x" , j, "=" , i*j);
// };

// for문은 배열과도 같이 씀
let fruits = ["사과", "메론", "체리", "블루베리"]

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for of 문
for(let a of fruits){
    console.log(a)
}
// 배열내에 값 자체만 꺼내고 싶을 때 사용함
// 배열의 인덱스 값이 필요하다고 하면, 즉 몇번째에 어떤 과일이 있는지 알고 싶다면 for 문을 사용한다

// ==================================================================

// while 문 : 반복횟수를 알 수가 없을 때 
// // while(조건식) {
//     반복할 코드
// }

let i = 0;
while(i < 5) { //계속돌아감
    console.log(i);
    i++; //브레이크역할
}


//do while 문 : 와일문과의 다른 점 얘는 한번은 실행함 조건이 거짓일 때도 최소 한번은 실행을 함 
let number = 0;
do {
    console.log(number);
    number++;
} while (number < 5)


