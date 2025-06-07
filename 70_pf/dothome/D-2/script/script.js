$(function () {
    $(".notice li:first-of-type").click(function () {
        $(".modal").show();
    });
    $(".close_btn a").click(function() {
        $(".modal").hide();
    });
});