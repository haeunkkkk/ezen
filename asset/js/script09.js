// // <!-- show, hide, toggle  -->

// $(function(){
//     // show()
//     $(".show-btn").click(function(){
//         $(".image").show(2000)
//         // 또는 "slow","fast"로 시간 제어
//     });

//     // hide() 
//     $(".hide-btn").click(function(){
//         $(".image").hide(2000, function(){
//             // 콜백 함수 이미지 숨기는 동작이 완료된 후 실행됨
//             alert("이미지 숨겨짐")
//         })
//     });


//     // toggle() 

//     $(".toggle-btn").click(function(){
//         $(".image").toggle(2000, function(){
//             alert("이미지 토글됨")
//         });
//     });  
// });



// $(function(){
//     $(".fade-in-btn").on("click", function(){
//         $(".box1").fadeIn(2000);
//         $(".box2").fadeIn("fast");
//         $(".box3").fadeIn(2000, function(){
//             alert("박스 보여짐");
//         });
//     });


//     $(".fade-out-btn").on("click", function(){
//         $(".box1").fadeOut(2000);
//     });

//     $(".fade-toggle-btn").on("click", function(){
//         $(".box2").fadeToggle();
//     });

//     $(".fade-to-btn").on("click", function(){
//         $(".box1").fadeTo(1000, 0);
//     });

// });


// $(function(){
//     $(".slide-down").on("click", function(){
//         $(".list").show(1000);
//     });

//     $(".slide-up").on("click", function() {
//         $(".list").slideUp();
//     });


//     $(".slide-toggle").on("click", function(){
//         // $(".list").slideToggle(1000);
//         $(".list").Toggle(1000);

//     });
// });


// slideDown: 위에서 밑으로 떨어짐
// show: 왼쪽 위에서 밑으로
// slideUp: 밑에서 위로 접기
// slideToggle: 
// Toggle:


// animate

// $(function(){
    // $(".animate").on("click", function(){
    //     $(".animate-box").animate({
    //         left: "100px",
    //         top: "100px",
    //         width: "+=1000px",
    //         height: "300px",
    //         fontSize: "100px"
    //     }, 2000);
    // });
//     $(".animate").on("click", function(){
//         $(".animate-box1").animate({
//             // height: "show"
//             width: "200px"
//         });

//         $(".animate-box1").animate({
//             height: "200px"
//         });

//         $(".animate-box2").animate({
//             width: "50px"
//         });

//         $(".animate-box2").animate({
//             height: "50px"
//         });
//     });



// });


// "font-size" = fontSize 같은 것

// stop
// $(function(){
//     $(".animate-btn").on("mouseenter", function(){
//         // $(".animate-box1").animate({
//         //     width: "200px"
//         // }, 3000);
//         // $(".animate-box1").animate({
//         //     height: "200px"
//         // }, 2000);

//         $(".animate-box1").stop().toggle(1000);
//     });

//     $(".stop-btn").on("click", function(){
//         $(".animate-box1").stop(false, true);
//     });

// });



$("animate-box1").css("background-color", "yellow");
$("animate-box1").show(1000);
$("animate-box1").hide(1000);

//chaining
$(".animate-box1").css("background-color", "yellow").hide(1000).show(1000);
