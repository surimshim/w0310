$(document).ready(function() {
    // 풀페이지 구현
    let now = 0;
    const sections =$('.container section');
    const headerHeight =$('#header').height();
    const total = sections.length + 1;

    function scrollTo(index) {
        let pos = 0;
        if (index < sections.length) {
            pos = sections.eq(index).position().top - headerHeight;
        } else {
            pos = $('#footer').position().top - headerHeight;
        }
        $('html,body').stop().animate({ scrollTop: pos }, 500);
    }

    $(window).on('wheel', function (e) {
        if ($('html, body').is(':animated')) return; // 중복 스크롤 방지
        const delta = e.originalEvent.deltaY;
        if (delta > 0 && now < total - 1) {
            now++;
        } else if (delta < 0 && now > 0) {
            now--;
        }
        scrollTo(now);
    });

    // 스크롤 시 헤더 고정
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('#header').addClass('scrolled');
        }
        else {
            $('#header').removeClass('scrolled');
        }
    });

    //가로 슬라이더
    setInterval(function () {
        $('#slider ul').animate({left: '-=100%'}, 1000, function () {
            $(this).append($(this).children().first()).css('left', 0);
        });
    }, 5000);
});