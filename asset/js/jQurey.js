// $(document).ready(function(){
//     $("button").click(function(){
//         $(this).hide();
// //     })
// // });


// $(document).ready(function(){
//     $("button").click(function(){
//             // class명 갖고올 때 
//         // $(".title").hide();

//         // id 값으로 갖고올때
//         // $("#tit").hide();

//         // // 태그로 갖고올때
//         // $("h2").hide();

//         // $("h2 .child").hide();
//         $(".title.on").hide();

//         // $("[href]").hide();


//         $("[href='http://127.0.0.1:5500/ezen/%EB%93%9D%ED%85%9C%EB%8B%A8.html']").hide();

        
//     });
// });


// .title .on {
//     dispay: block
// } 
//붙여쓰면 타이틀과 온이 모두 들어가 있는 것을 찾음
//띄어쓰면 무조건 자식을 찾는 것

//이벤트
$(function(){
    // click
    // $(".btn").click(function(){
    //     $(".title").css("background-color", "blue")
    // });
    // dblclick
    // $(".btn").dblclick(function(){
    //     $(".title").css("background-color", "blue")
    // });


    //mouseenter : 마우스를 해당 요소에 올ㄹ렸을때 나타나는 이벤트
    // $(".title").mouseenter(function(){
    //     $(this).css("background-color", "yellow");
    // });


    // //mouseleave
    // $(".title").mouseleave(function(){
    //     $(this).css("background-color", "pink");
    // });

    // // hover: 여기서 잘안씀 css에서 씀
    // $(".title").hover(function(){
    //     $(this).css("color", "red");
    // });

    //mouseover mouseout도 있음

    //mouseup : 클릭하는 효과(눌렀다가 뗐을때 들어오는 효과)
    $(".title").mouseup(function(){
        $(this).css("color", "red");
    });
    
    //mousedown : 클릭하는 효과(눌렀을 때 효과)
    $(".title").mousedown(function(){
        $(this).css("background-color", "orange");
    });

});



// focus, blur, change 
// $(function() {
//     $(".input-box").focus(function(){
//         $(this).css("background-color", "yellow");
//     });

//     $("[type='text']").blur(function(){
//         $(this).css("background-color", "red");
//     });


//     $(".input-box").change(function(){
//         $(this).css("background-color", "blue");
//     });
// });


// on 
$(function(){
    // $(".event").click(function(){
    //     $(this).css("color", "red");
    // });
    // $(".event").mouseenter(function(){
    //     $(this).css("background-color", "beige");
    // });
    // $(".event").mouseleave(function(){
    //     $(this).css("background-color", "orange");
    // });



    //위에꺼랑 똑같음 그냥 줄여주는 것
    // $(".event").on({
    //     click: function(){
    //     $(this).css("color", "red");},
    //     mouseenter: function(){
    //         $(this).css("background-color", "orange")
    //     },
    //     mouseleave: function(){
    //         $(this).css("background-color", "blue")
    //     };
    // })


    $(".event").on("mouseenter mouseleave", function(){
        $(this).toggleClass("on");
    })

});