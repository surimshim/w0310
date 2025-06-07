$(function () {
    $(".notice li:first-of-type").click(function () {
        $(".modal").show();
    });
    $(".close_btn").click(function () {
        $(".modal").hide();
    });
});