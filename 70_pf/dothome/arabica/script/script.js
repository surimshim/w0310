$(document).ready(function() {
    $(".main").mouseover(function() {
        // $(".sub").css({height: 150, visibility: 'visible'});
        $(".sub").stop().slideDown();
    });
    $(".main").mouseout(function() {
        // $(".sub").css({height: 10, visibility: 'hidden'});
        $(".sub").stop().slideUp();
    });
});