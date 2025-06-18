$(document).ready(function() {
    // 섹션1 - 가로 슬라이더
    setInterval(function () {
        $('#slider ul').animate({left: '-=100%'}, 1000, function () {
            $(this).append($(this).children().first()).css('left', 0);
        });
    }, 5000);

    // 섹션1 - 탭 버튼
    $(".bookingtab_btn a").click(function (event) {
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