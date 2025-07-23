$(() => {
    // 객체 탐색
    const tabs = $('#tabs');
    const tabs_div = tabs.children('div');
    const tabs_1 = tabs.find('#tabs-1');
    const tabs_btn = tabs.find('#tabs_btn a');

    // 효과
    tabs_div.hide();
    tabs_1.show();
    tabs_btn.eq(0).css({color: "var(--main)"});

    // 이벤트
    tabs_btn.click(function(e) {
        // a태그 기본 이벤트(링크 이동) 막기
        e.preventDefault(); 

        // 모든 탭 버튼 색 초기화
        tabs_btn.css({color: "var(--gray2)"});
        // 현재 클릭한 탭 색 변경
        $(this).css({color: "var(--main)"});

        tabs_div.hide();

        // 클릭한 탭의 href 속성값을 선택자로 활용해 해당 콘텐츠만 보여줌
        let target = $(this).attr("href");
        $(target).show();
    });
});