$(function () {
    $(".btn a").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        var idx = $(this).index();
        $(".tabs div").eq(idx).addClass("active");
        $(".tabs div").eq(idx).siblings("div").removeClass("active");
    });

    $("#tab1 li:first-of-type").click(function () {
        $(".modal").show();
    });
    $(".close_btn a").click(function () {
        $(".modal").hide();
    });
});