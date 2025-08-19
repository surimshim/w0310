$(document).ready(function () {
  let currentSlideIndex = 0;
  let isScrolling = false;
  const scrollDuration = 700;

  const $wrapper = $('.full-page-wrapper');            // 전체 래퍼
  const $sections = $('.slide-section');               // 슬라이드 + 푸터 섹션
  const $slideWrapper = $('.slides-wrapper');          // 슬라이드 컨테이너
  const $slides = $('.group1');                        // 개별 슬라이드

  const $menuToggle = $('#menuToggle');                // 햄버거 열기 버튼
  const $closeBtn = $('#closeBtn');                    // 메뉴 닫기 버튼
  const $overlay = $('#overlay');                      // 배경 오버레이
  const $sideNav = $('.side-nav');                     // 사이드 메뉴

  // ✅ 초기화
  function initializePage() {
    $sections.removeClass('active').css({
      opacity: 0,
      visibility: 'hidden',
      zIndex: 0
    });

    $sections.eq(0).addClass('active').css({
      opacity: 1,
      visibility: 'visible',
      zIndex: 1
    });

    $wrapper.css('transform', 'translateY(0)');
    $slideWrapper.css('transform', 'translateX(0vw)');
    currentSlideIndex = 0;
  }

  initializePage();

  // ✅ 푸터로 전환
  function goToFooter() {
    isScrolling = true;

    $wrapper.css('transform', 'translateY(-100vh)'); // 푸터로 이동

    $sections.removeClass('active').css({
      opacity: 0,
      visibility: 'hidden',
      zIndex: 0
    });

    $sections.eq(1).addClass('active').css({
      opacity: 1,
      visibility: 'visible',
      zIndex: 1
    });

    setTimeout(() => {
      isScrolling = false;
    }, scrollDuration);
  }

  // ✅ 슬라이드 전환
  function goToSlide(index) {
    if (isScrolling) return;

    const maxSlideIndex = $slides.length - 1;

    if (index > maxSlideIndex) {
      goToFooter(); // 슬라이드 끝나면 푸터로 이동
      return;
    }

    isScrolling = true;
    currentSlideIndex = index;

    $slideWrapper.css('transform', `translateX(-${index * 100}vw)`);

    setTimeout(() => {
      isScrolling = false;
    }, scrollDuration);
  }

  // ✅ 휠 이벤트
  $(window).on('wheel', function (e) {
    if (isScrolling) return;
    const delta = e.originalEvent.deltaY;
    const isInSlide = $wrapper.css('transform') === 'matrix(1, 0, 0, 1, 0, 0)';

    if (isInSlide) {
      if (delta > 0) {
        goToSlide(currentSlideIndex + 1);
      } else if (currentSlideIndex > 0) {
        goToSlide(currentSlideIndex - 1);
      }
    } else {
      if (delta < 0) {
        initializePage(); // 푸터에서 슬라이드 복귀
      }
    }
  });

  // ✅ 키보드 이벤트
  $(document).on('keydown', function (e) {
    if (isScrolling) return;
    const isInSlide = $wrapper.css('transform') === 'matrix(1, 0, 0, 1, 0, 0)';

    if ((e.key === 'ArrowDown' || e.key === 'PageDown') && isInSlide) {
      goToSlide(currentSlideIndex + 1);
    }

    if ((e.key === 'ArrowUp' || e.key === 'PageUp') && !isInSlide) {
      initializePage(); // 푸터에서 슬라이드 복귀
    }
  });

  // ✅ 햄버거 메뉴 열기
  $menuToggle.on('click', function () {
    $overlay.fadeIn(300);
    $sideNav.addClass('open');
  });

  // ✅ 메뉴 닫기
  $closeBtn.on('click', function () {
    $overlay.fadeOut(300);
    $sideNav.removeClass('open');
  });
});
