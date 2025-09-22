let btn = document.querySelector(".hamburger-btn");
        // .hamburger-btn 클래스를 가진 버튼 요소를 찾아서 btn 변수에 저장나중에 클릭 이벤트를 걸 때 사용

        let menu = document.querySelector(".header-nav");
        // .header-nav 클래스를 가진 메뉴(nav) 요소를 찾아 menu 변수에 저장메뉴를 보여주거나 숨길 때 사용할 거예요
    
        let icon = btn.querySelector("i");
        // 버튼 안에 있는 <i> 요소(Font Awesome 아이콘)를 찾아 icon 변수에 저장버튼 클릭 시 아이콘을 바꾸려고 하는 거

        btn.addEventListener('click', function(){
            menu.classList.toggle("on");
            // 버튼 클릭(click) 이벤트를 등록클릭하면 menu에 on 클래스가 없으면 추가, 있으면 제거 → 메뉴 열림/닫힘
        

        if (menu.classList.contains("on")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark")
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
        });

        // menu가 열려 있으면(on 클래스가 있으면)버튼 아이콘을 햄버거(fa-bars) → X(fa-xmark)로 바꿈
        // menu가 닫혀 있으면(on 클래스가 없으면)
        // 버튼 아이콘을 X → 햄버거로 다시 바꿈
 


    //   Initialize Swiper 
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        var appendNumber = 4;
        var prependNumber = 1;
        document
            .querySelector(".prepend-2-slides")
            .addEventListener("click", function (e) {
                e.preventDefault();
                swiper.prependSlide([
                '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
                '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
                ]);
        });

        document
        .querySelector(".prepend-slide")
        .addEventListener("click", function (e) {
            e.preventDefault();
            swiper.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
            );
        });

        document
        .querySelector(".append-slide")
        .addEventListener("click", function (e) {
            e.preventDefault();
            swiper.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
            );
        });

        document
        .querySelector(".append-2-slides")
        .addEventListener("click", function (e) {
            e.preventDefault();
            swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            ]);
        });