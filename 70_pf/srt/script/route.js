$(document).ready(function () {
  // 노선안내 서브페이지 노선별 지도 바꾸기

  const maps = [
    "/w0310/70_pf/srt/images/route/allroutes.png",
    "/w0310/70_pf/srt/images/route/kyongbu.png",
    "/w0310/70_pf/srt/images/route/Honam.png",
    "/w0310/70_pf/srt/images/route/Jolla.png",
    "/w0310/70_pf/srt/images/route/kyongjon.png",
    "/w0310/70_pf/srt/images/route/EastSeaLine.png"
  ];

  const tabs = $('.route_tabs .tab');
  const map_img = $('.map_container img');

  tabs.click(function (e) {
    e.preventDefault();

    // 탭에서 data-index 가져오기
    const index = $(this).data('index');

    // 지도 이미지 교체
    map_img.attr('src', maps[index]);


    // 모든 탭에서 active 제거 후 현재 탭에만 추가
    tabs.removeClass('active');
    $(this).addClass('active');
  });
})
