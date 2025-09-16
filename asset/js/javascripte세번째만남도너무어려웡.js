let btn = document.querySelector(".btn");

btn.addEventListener("click", clickevent);
btn.addEventListener("click", function (){
    alert("하이하이33")
});

function clickevent(){
    alert("버튼클릭함")
}

// removeEventListener(지우는 요소)
btn.removeEventListener("click", clickevent);



// =========================================
// 마우스 이벤트 종류

// mouseDown 클릭했을 때 발생하는 이벤트(눌렸을 때)
// mouseUp 클릭이 떼졌을 때
// mauseenter 해당 요소에 진입했을때 발생(hover)
// mouseleave 마우스가 떠났을때 뗐을 때 (헤더에 씀)
// mouseover 엔터랑 비슷한데 잘 안씀 쓰지 마셈(자식요소에도 할당이 됨)
// mouseout 벗어났을 때(자식요소에도 할당이 됨)
// mousemove 마우스 포인터가 요소위에 움직였으 ㄹ때 발생하는 이벤트


let box1 = document.querySelector(".box1");

// box1.addEventListener("mousedown", function(){
//     console.log("mousedown");
// });


// box1.addEventListener("mouseup", function(){
//     console.log("mouseup");
//     box1.style.backgroundColor = "red";
// });

// box1.addEventListener("mouseenter", function(){
//     console.log("mouseenter");
//     box1.style.backgroundColor = "red";
// });


// box1.addEventListener("mouseleave", function(){
//     box1.style.backgroundColor = "red";
// });


// box1.addEventListener("mouseover", function(){
//     console.log("mouseover")
// });

// box1.addEventListener("mouseout", function(){
//     console.log("mouseout");
// });

// box1.addEventListener("mousemove", function(){
//     console.log("mousemove");
// });



//키보드 이벤트
// keypress 제한적임 문자키에서만 발생(특수키 ㄴㄴ shift ctrl, alt ...)
// keydown 모든 키보드 내 키가 다 먹힘
// keyup 키보드를 눌렀다가 뗐을 때 발생하는 이벤트

let inputBox = document.querySelector(".input-box");

// inputBox.addEventListener("keypress", function(){
//     console.log("keypress");
// });
// inputBox.addEventListener("keydown", function(){
//     console.log("keydown");
// });

inputBox.addEventListener("keyup", function(){
    console.log("keyup");
});

// 포커스이벤트 클릭했을 때 포커스 됨
// inputBox.addEventListener("focus", function(){
//     console.log("focus");
// });


// 요소가 포커스를 잃을 때 다른 곳을 클릭하거나 tab으로 이동할 때 이벤트가 발생함
// inputBox.addEventListener("blur", function(){
//     console.log("blur");
// });

// 값이 변경되고 포커스를 잃었을 때 이벤트가 발생됨
// inputBox.addEventListener("change", function(){
//     console.log("change");
// });





