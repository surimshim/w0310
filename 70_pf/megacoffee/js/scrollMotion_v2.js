// jQuery Scroll Motion

$(() => {
    // 객체 탐색
    const windowObj = $(window);

    // 이벤트
    windowObj.on('wheel', function () {
        let secNum = $('#menu > li').eq(2).index();
        console.log(secNum);
        if (secNum >= 2) {
            $(this).addClass('show');
        } else {
            $(this).removeClass('show');
        }
    });
});