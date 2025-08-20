// jQuery Scroll Motion

$(() => {
    // 객체 탐색
    const windowObj = $(window);
    const motionObj = $('#fav_txt .scroll_motion');

    // 이벤트
    windowObj.scroll(function () {
        console.log('스크롤 됐니?');
        motionObj.each(function (idx) {
            let scrollTop = $(window).scrollTop();
            console.log(scrollTop, idx);
            if (scrollTop > 1500 + idx*150 ) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show');
            }
        });
    });
});