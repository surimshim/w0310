$(document).ready(function() {
    // 풀페이지 구현
    let now = 0;
    const sections =$('.container > section');
    const headerHeight =$('#header').height();
    const total = sections.length + 1;

    function scrollTo(index) {
        let pos = 0;
        if (index < sections.length) {
            pos = sections.eq(index).offset().top - headerHeight;
        } else {
            pos = $('#footer').offset().top - headerHeight;
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

    // 섹션1 - 가로 슬라이더
    setInterval(function () {
        $('#slider ul').animate({left: '-=100%'}, 1000, function () {
            $(this).append($(this).children().first()).css('left', 0);
        });
    }, 5000);

    // 섹션1 - 탭 버튼
    $(".bookingtab_btn a").click(function () {
        event.preventDefault();
        
        // 2. 버튼에 .active 클래스 추가
        $(this).addClass("active");
        // 3. this 형제의 .active 클래스 제거
        $(this).siblings().removeClass("active");

        // 4. 클릭한 버튼의 순번을 가져와서 idx에 저장
        var idx = $(this).index();
        // 5. idx 순번에 해당하는 div 보여줌
        $("#booking_tabs section").eq(idx).addClass("active");
        // 6. idx 순번에 해당하는 div 형제 숨김
        $("#booking_tabs section").eq(idx).siblings("section").removeClass("active");
    });
});