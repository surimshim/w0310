/* 
    참조 데이터타입 3가지
        객체: {}
        함수: function(){}
        배열: []

    객체
        {
            속성: 숫자,
            속성: '문자열',
            메서드: function(){},
            ...
        }

        $(document)
        $(this)

        $('.tabs .btn a')
        $('.tabs div').eq(0)
        $('.tabs div').eq(1)

    이벤트 메서드
        ready(function(){}) -> 준비
        click(function(){})

    탐색(요소 선택) 메서드
        eq(n) -> n = 0, 1, 2, ... -> n번째 요소 선택
        siblings() -> 형제 선택
        index() -> 순번 가져오기

    HTML/CSS 메서드
        addClass('클래스명') -> 클래스 추가
        removeClass('클래스명') -> 클래스 삭제
        css({css속성: 값, css속성: 값, ...}) -> css 적용
*/

$(function () {
    // 1. 탭 버튼 클릭 시 함수 실행
    $(".btn a").click(function () {
        // 2. 버튼에 .active 클래스 추가
        $(this).addClass("active");
        // 3. this 형제의 .active 클래스 제거
        $(this).siblings().removeClass("active");

        // 4. 클릭한 버튼의 순번을 가져와서 idx에 저장
        var idx = $(this).index();
        // 5. idx 순번에 해당하는 div 보여줌
        $(".tabs div").eq(idx).addClass("active");
        // 6. idx 순번에 해당하는 div 형제 숨김
        $(".tabs div").eq(idx).siblings("div").removeClass("active");
    });
});