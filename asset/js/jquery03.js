$(function(){
    $(".get-btn").on('click', function(){
        alert($(".text").text());
        // alert($(".text").html());
        //text와 html의 차이점



        // alert($(".input-box").val());
        //jquery로 쓸때는 이렇게 간단하게 



        // alert(document.querySelector(".input-box").value);  - 순수 자바스크립트



        // alert($(".link").attr("href"));
        // alert(document.querySelector(".link").href) - 순수 자바스크립트
    });
});


// 변경하기

$(function(){
    $(".set-btn").on('click', function(){
        $(".text").text("문구 변경됨");
    //     $(".text").html("<span>문구</span> 변경됨");
    // });
    // $(".set-btn").on('click', function(){
    //     $(".menu").text(function(i, origText){
    //         return "분식집에는" + origText + "이 있습니다." + i;
    //     });


    //    $(".link").attr("href", function(i, origText){
    //     return origText + "/news"
    //    });
    });


    $(".get-btn").on("click", function(){
        // alert($(".text").text())
        alert($(".link").attr("href"))
    });



})

//i: 숫자 순서대로 index 몇번째인지


// $(function(){
//     $(".append-btn").on('click', function(){

//         //뒤에 추가
//         $(".list").append("<li>오뎅</li>");

//         //앞에 추가
//         $(".list").prepend("<li>만두</li>")
//     });

// });
$(function(){
    $(".append-btn").on('click', function(){

        //옆에 추가
        $(".item").before("</li>dfsfd</li>");

        //앞에 추가
        $(".item").after("<li>뒤에추가</li>")
    });

});


//삭제하기 
// $(function(){
//     $(".remove-btn").on('click',
//         function(){
//             $(".box").remove();
//     });
// });
// $(function(){
//     $(".remove-btn").on('click',
//         function(){
//             $(".box").empty();
//     });


// });


// remove: 박스까지 전부다 삭제
//ampty: 안에 있는 것들만 삭제

$(function(){
    $(".remove-btn").on('click', function(){
        $(".box p").remove(".yellow, .red");
    });
    
});



$(function(){
    $(".box2").on("mouseenter", function(){
        // $(".cont").text($(this).css('background-color'));

        // $(this).css("background-color", "red");
        // $(this).css("color", "blue");
        // $(this).css("border", "1px solid black");



        // chain방식
        $(this).css({
            "background-color": "pink",
            "color": "blue",
            "border": "1px solid black"
        });
    });
});
