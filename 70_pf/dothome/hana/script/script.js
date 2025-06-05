// 준비 이벤트
$(document).ready(function () {
    $(".notice li:first-of-type").click(function () {
        $(".modal").show();
    });
    $(".popup a").click(function () {
        $(".modal").hide();
    });
});