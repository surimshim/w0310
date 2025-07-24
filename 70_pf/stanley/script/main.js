$(document).ready(function () {
    // // 풀페이지 구현
    // let now = 0;
    // const sections = $("#container>section");
    // const headerHeight = $("#header").height();
    // const total = sections.length + 1;

    // function scrollTo(index) {
    //     let pos = 0;
    //     if (index < sections.length) {
    //         pos = sections.eq(index).offset().top - headerHeight;
    //     } else {
    //         pos = $("#footer").offset().top - headerHeight;
    //     }
    //     $("html,body").stop().animate({ scrollTop: pos }, 500);
    // }

    // $(window).on("wheel", function (e) {
    //     if ($("html, body").is(":animated")) return; // 중복 스크롤 방지
    //     const delta = e.originalEvent.deltaY;
    //     if (delta > 0 && now < total - 1) {
    //         now++;
    //     } else if (delta < 0 && now > 0) {
    //         now--;
    //     }
    //     scrollTo(now);
    // });

    // // 스크롤 시 헤더 고정
    // $(window).on("scroll", function () {
    //     if ($(window).scrollTop() > 50) {
    //         $("#header").addClass("scrolled");
    //     } else {
    //         $("#header").removeClass("scrolled");
    //     }
    // });

    // section1 bxSlider
    $('#section1 .bxslider').bxSlider({
        auto: true,
        pause: 3000,
        speed: 1000,
        mode: 'fade',
        captions: true,
        slideMargin: 0,
        pager: false,
    });

    // section2 bxSlider
    $('#section2 .bxslider').bxSlider({
        auto: true,
        mode: 'horizontal',
        captions: true,
        slideMargin: 0,
        pager: false,
    });

    // section2 item colors관리
    const colorData = [
        ['#EBECE9', '#8DA09A', '#134430', '#305871', '#B1DCD2'], // item 1
        ['#4B7452', '#171717'],                                 // item 2
        ['#4B7452', '#171717', '#EBECE9', '#abd8cb', '#e7cecd'],                                 // item 3
        ['#171717', '#0000ff', '#00ffff', '#ffc0cb', '#4b7452'],                                          // item 4
        ['#4B7452', '#EBECE9'],                                 // item 5
        ['#4B7452']                                             // item 6
    ];

    // 모든 .item 요소 순회
    $('.products .item').each(function (index) {
        const colors = colorData[index];
        const $colorLinks = $(this).find('.colors li a');

        $colorLinks.each(function (colorIndex) {
            if (colors[colorIndex]) {
                $(this).css('background-color', colors[colorIndex]);
            }
        });
    });

    // footer language 드롭다운리스트
    // 드롭다운 열고 닫기
    $('#lbtn').on('click', function (e) {
        e.preventDefault();
        $('.lang_list').toggle();
    });

    // 항목 클릭 시 텍스트 및 이미지 변경
    $('.lang_list li a').on('click', function (e) {
        e.preventDefault();

        const imgSrc = $(this).find('img').attr('src');
        const langText = $(this).text().trim();

        $('#lbtn a:first-child img').attr('src', imgSrc);
        $('#lbtn a:nth-child(2) span').text(langText);

        $('.lang_list').hide(); // 선택 후 닫기
    });

    // 바깥 클릭 시 닫기
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.lang').length) {
            $('.lang_list').hide();
        }
    });
});