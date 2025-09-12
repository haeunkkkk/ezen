// creatElement(): 요소 생성
// appentChild(): 자식 요소 추가. 맨 마지막에 추가됨
// insetBefore()
// remove()
// parentNode:부모 요소에 접근하는 것


let btn = document.querySelector(".btn");
let input = document.querySelector("input");
// console.log(input.value);
let frontBtn = document.querySelector(".front-btn");
let firstItem = document.querySelector(".first-item")
console.log(firstItem);
let targetRemove = document.querySelector(".target-remove")
let removeBtn = document.querySelector(".remove-btn")


// 앞에추가 버튼 클릭 이벤트
frontBtn.addEventListener('click', function(){
    // alert("앞에 추가 버튼 클릭함");
    let list = document.createElement("li");
    let ul = document.querySelector(".list");
    list.textContent = input.value;

    ul.insertBefore(list, firstItem);

    input.value = '';
});




// 버튼클릭 이벤트
btn.addEventListener('click', function(){
    // console.log('추가 버튼 클릭함');
    let list = document.createElement("li");
    let ul = document.querySelector(".list");
    list.textContent = input.value;

    let button = document.createElement("button");
    // console.log(button);
    button.textContent = "X";
    // button.addEventListener('click', function(){
    //     list.remove();
    // });
    list.appendChild(button);
    button.classList.add("remove-btn");


    button.addEventListener('click', function(event){
        event.target.parentNode.remove();
    });
    ul.appendChild(list);
    input.value = '';
});

targetRemove.addEventListener('click', function(){
    firstItem.remove();
});


removeBtn.addEventListener('click', function(event){
    // console.log(event.target.parentNode);
    event.target.parentNode.remove();
});



