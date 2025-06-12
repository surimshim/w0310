$(document).ready(function() {
    $(".main").mouseover(function() {
        // $(".sub").css({height: 150, visibility: 'visible'});
        $(this).find(".sub").stop().slideDown();
    });
    $(".main").mouseout(function() {
        // $(".sub").css({height: 10, visibility: 'hidden'});
        $(this).find(".sub").stop().slideUp();
    });
});