$(function () {
    $(".lbtn").click(function (event) {
        //이벤트 버블링이란, 어떤 요소에서 이벤트(예: 클릭)가 발생하면 그 이벤트가 상위(부모) 요소로 계속 전파되는 현상입니다.
        event.stopPropagation();
        $(".language_list").toggle();
    });

    $(document).click(function(){
        $(".language_list").hide();
    });
})