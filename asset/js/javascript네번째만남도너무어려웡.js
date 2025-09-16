// 배열(Array): 여러개의 데이터를 하나롤 묶어서 변수에 저장


let fruits = ["사과", "바나나", "샤인머스캣", "수박"]

console.log(fruits);

// 사과 출력하는 법
console.log(fruits[0]);
// 인덱스는 0번째 부터 시작한다
// 배열에서는 요소를 번호를 매겨줌 이것을 인덱스라고 함


fruits[0] = "딸기";
console.log(fruits);

fruits[1] = "블루베리";
console.log(fruits);

// 배열에 관련된 함수 (자주 보는 거)

// Pop 배열에 마지막 요소 제거 
// fruits.pop();
// console.log(fruits);

// shift 배열에 첫번째 요소 제거
// fruits.shift();
// console.log(fruits);

// push 마지막에 요소 추가
// fruits.push("포도");
// console.log(fruits);


// unshift 배열의 맨 첫번째 요소를 추가
// fruits.unshift("체리");
// console.log(fruits);


// includes 배열에 해당 요소가 있는지 확인 true 또는 false로 확인
console.log(fruits.includes("사과"));
console.log(fruits.includes("딸기"));

// indexOf : 배열의 해당하는 요소릐 인덱스를 출력해주는 애 즉 요소가 몇번째 인지 알려줌
console.log(fruits.indexOf("딸기"));


// slice 배열의 2번째 요소부터 끝까지 잘라낸다 그 후 새로운 배열로 출력
// fruits.slice(2); 
console.log(fruits.slice(2));

// fruits.slice(0, 2) 0번째요소부터 2번째 요소까지 잘라내어 출력 끝점은포함하지 않는다..?
console.log(fruits.slice(1, 2));

// splice : 배열의 n번째 요소부터 n개의 요소를 제거하고 새로운 배열을 출력
// fruits.splice(1, 2); //시작점, 제거할 요소의 갯수 
// console.log(fruits);

fruits.slice(1, 2); //시작점과 끝점
console.log(fruits);
//슬라이스는 기존의 배열을 자르지 않고 새로운 배열 출력시킴 스플라이스는 기존 배열 아예 잘라버림 기존의 배열을 변경

let newFruits = fruits.slice(1, 2);
console.log(newFruits);



//=================================================

// Object(객체)

// let member = {
//     name: "소연",
//     age: "26",
//     group: "아이들"
// }

// console.log(member);


// console.log(member.name);
// //= 같음
// console.log(member["name"]);

// member.name = "우기";
// console.log(member.name);


// member.age = "29";
// console.log(member.age);


let member = [
    {
        name: "소연",
        age: 27,
        group: "아이들"
    },
    {
        name: "우기",
        age: 28,
        group: "아이들"
    },
    {
        name: "미연",
        age: 27,
        group: "아이들"
    },
    {
        name: "슈화",
        age: 25,
        group: "아이들"
    },
    {
        name: "민니",
        age: 24,
        group: "아이들"
    }
]

console.log(member[2].age);