//함수 function


// 간단한 토스트 만들기 
// console.log("1. 버터 두르고 식빵 굽기");
// console.log("2. 계란 부치기");
// console.log("3. 식빵 위에 계란 올리기");
// console.log("4. 케첩 마요네즈 치즈 뿌리기");



//아메리카노 만들기
// console.log("1. 얼음을 담는다");
// console.log("2. 물을 250ml 넣는다");
// console.log("3. 샷을 추출한다");
// console.log("4. 뚜껑닫기");

// function 함수명() {
//     실행할 코드
// }


// name(), Name() 서로 다른 함수 

function toast(type, size, number) {
    //간단한 토스트 만들기
    console.log("1. 버터 두르고 식빵 굽기");
    if(type === "계란") {
        console.log("2. 계란 부치기");
    } else if (type === "불고기") {
        console.log("2. 불고기 만들기");
    } else {
        console.log("2. 딸기쨈 바르기");
    }
    console.log("2. 계란 부치기");
    console.log("3. 식빵 위에 계란 올리기");
    console.log("4. 케첩 마요네즈 치즈 뿌리기");


    console.log("주문하신" + type + "토스트" + size + "사이즈" + number + "개 나왔습니다.");
};
// 불고기 토스트 주문 들어옴
toast("불고기", "L", 2);

// function americano() {
//     //아메리카노 만들기
//     console.log("1. 얼음을 담는다");
//     console.log("2. 물을 250ml 넣는다");
//     console.log("3. 샷을 추출한다");
//     console.log("4. 뚜껑닫기");
// };
// americano();
// toast();


//type을 매개변수 또는 파라미터 라고 부른다.


// return : 결과 값을 밖으로 빼내고 싶을 때 

function add(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2;
};

let result = add (2, 4);

console.log(result);

