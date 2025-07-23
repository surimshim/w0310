$("#fullpage").fullpage({
    // sectionsColor: ["navy", "darkslategray", "blue", "darkblue"],
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
    menu: "#menu",
    navigation: true,
    navigationTooltips: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
    showActiveTooltip: true,
    /* navigationPosition: 'right', */
    slidesNavigation: true,
    scrollingSpeed: 500,
    
    // // 현재 페이지를 떠날 때
    // onLeave: function (index, nextIndex, direction) {
    //     if (index == 2) {
    //     $(".section3 p").animate({ opacity: 1, left: "50%" }, 700);
    //     }
    // },
    // // 현재 페이지에 도착한 이후
    // afterLoad: function (anchorLink, index) {
    //     if (index == 2) {
    //     $(".section3 p").animate({ opacity: 0, left: -500 });
    //     }
    // }
});