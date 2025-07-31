$(function () {
    // 모바일 버전 메뉴 토글
    $("#header > a").click(function (e) {
        e.preventDefault();
        $("#gnb").slideToggle();
    });

    // 스크롤 모션
    $(".sec").css({
        opacity: 0,
        transform: "translateY(50px)"
    });

    $(window).on("scroll", function () {
        $(".sec").each(function () {
        const elemTop = $(this).offset().top;
        const winTop = $(window).scrollTop();
        const winHeight = $(window).height();

        if (winTop + winHeight > elemTop + 100) {
            $(this).css({
                opacity: 1,
                transform: "translateY(0)",
                transition: "all 1s ease"
                });
            }
        });
    });

    $(window).trigger("scroll");

    // 인스타 버튼 이벤트 해제, 타이레놀, 미정 사이트 버튼 이벤트 해제
    $("#sec1 .icon a:last-child, #sec4 .contents div:last-child a, #sec5 .contents div:last-child a").click(function (e) {
        e.preventDefault();
    });

    // 탑버튼 페이드효과
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#tothetop').fadeIn();
        } else {
            $('#tothetop').fadeOut();
        }
    });
});
