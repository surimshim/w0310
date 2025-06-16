$(document).ready(function() {
    $(".main").mouseover(function() {
        // $(".sub").css({height: 150, visibility: 'visible'});
        $(".sub").stop().slideDown();
    });
    $(".main").mouseout(function() {
        // $(".sub").css({height: 10, visibility: 'hidden'});
        $(".sub").stop().slideUp();
    });

    $('.tab1 li:first-of-type').eq(0).click(() => $('.popup').show());
    $('.close_btn a').click(() => $('.popup').hide());
});