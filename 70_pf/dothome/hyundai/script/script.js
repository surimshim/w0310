$(document).ready(function() {
    $(".main>li").mouseover(function() {
        // $(".sub").css({height: 150, visibility: 'visible'});
        $(".sub").stop().slideDown();
        $(".nav_bg").stop().animate({height: 180});
    });
    $(".main>li").mouseout(function() {
        // $(".sub").css({height: 10, visibility: 'hidden'});
        $(".sub").stop().slideUp();
        $(".nav_bg").stop().animate({height: 0});
    });

    $(".notice li:first-of-type").click(function() {
        $(".modal").show();
    });
    $(".close_btn a").click(function() {
        $(".modal").hide();
    });
});