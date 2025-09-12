// data 속성

// 우리가 임의로 추가한 속성
// 브라우저에서는 인식하지 않음 때문에 화면에서는 읽을 수 없음
// 우리가 임의로 추가한 속성을 사용하고 싶을때 


// 변수 선언

let title = document.querySelector(".title");
console.log(title);


title.dataset.test = "변경됐다ㅣ 하하하ㅏ"



// 예제
let season = document.querySelectorAll(".season");
// console.log(season);

let seasonImg = document.querySelector(".season-img");

season[0].addEventListener("click", function(event){
    // alert("작동 잘되니")
    // seasonImg.setAttribute("src","");
    console.log(this.dataset.img);
    seasonImg.setAttribute("src", this.dataset.img);
});
season[1].addEventListener("click", function(event){
    // alert("작동 잘되니")
    // seasonImg.setAttribute("src","");
    console.log(event.target.dataset.img);
    seasonImg.setAttribute("src", event.target.dataset.img);
});
season[2].addEventListener("click", function(event){
    // alert("작동 잘되니")
    // seasonImg.setAttribute("src","");
    console.log(event.target.dataset.img);
    seasonImg.setAttribute("src", event.target.dataset.img);
});
season[3].addEventListener("click", function(event){
    // alert("작동 잘되니")
    // seasonImg.setAttribute("src","");
    console.log(event.target.dataset.img);
    seasonImg.setAttribute("src", event.target.dataset.img);
});