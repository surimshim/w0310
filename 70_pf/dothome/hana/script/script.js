// 준비 이벤트
$(document).ready(function () {
    $(".notice li:first-of-type").click(function () {
        $(".modal").show();
    });
    $(".popup a").click(function () {
        $(".modal").hide();
    });

    $(".main>li").mouseover(function() {
        // $(".sub").css({height: 150, visibility: 'visible'});
        $(this).find(".sub").css({display: "block"});
        $(this).find(".sub").stop().animate({left: 160, opacity: 1}, 300);
    });
    $(".main>li").mouseout(function() {
        // $(".sub").css({height: 10, visibility: 'hidden'});
        $(this).find(".sub").css({display: "none"});
        $(this).find(".sub").stop().animate({left: 100, opacity: 0}, 300);
    });
});