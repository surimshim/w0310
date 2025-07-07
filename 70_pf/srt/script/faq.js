$(document).ready(function () {
    $(".tabs a").click(function (e) {
        e.preventDefault(); // 기본 링크 동작 방지

        // 1. 탭 버튼 active 클래스 처리
        $(".tabs a").removeClass("active");
        $(this).addClass("active");

        // 2. 클릭한 탭의 인덱스 가져오기
        let tabIndex = $(this).parent().index();

        // 3. 해당 인덱스의 faq만 보이고 나머지는 숨김
        $(".faq_content").hide();
        $(".faq_content").eq(tabIndex).show();
    });

    // 페이지 로드시 첫 번째 탭만 표시
    $(".faq_content").hide();
    $(".faq_content").eq(0).show();
});