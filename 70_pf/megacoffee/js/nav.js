// jQuery

$(() => {
  // 객체 탐색
  const gnb = $("#gnb");
  const gnb_bg = gnb.find(".nav_bg");
  const gnb_main_lst = gnb.find(".main > li");
  const gnb_sub = gnb.find(".sub");

  // 메인 메뉴 항목 영역에 마우스가 들어갔을 때
  gnb_main_lst.mouseenter(function () {
    // gnb의 서브 메뉴가 위에서 아래로 나타난다.
    gnb_sub.stop().slideDown();
    // gnb의 배경색바가 높이가 0에서 220으로 늘어난다.
    gnb_bg.stop().animate({ height: 220 });
  });

  // gnb 영역을 마우스가 벗어났을 때
  gnb.mouseleave(function () {
    // gnb의 서브 메뉴가 아래서 위로 사라진다.
    gnb_sub.stop().slideUp();
    // gnb의 배경색바가 높이가 220에서 0으로 줄어든다.
    gnb_bg.stop().animate({ height: 0 });
  });
});
