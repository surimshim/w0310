$(document).ready(function () {
    // 풀페이지 구현
    let now = 0;
    const sections = $(".container > section");
    const headerHeight = $("#header").height();
    const total = sections.length + 1;

    function scrollTo(index) {
        let pos = 0;
        if (index < sections.length) {
            pos = sections.eq(index).offset().top - headerHeight;
        } else {
            pos = $("#footer").offset().top - headerHeight;
        }
        $("html,body").stop().animate({ scrollTop: pos }, 500);
    }

    $(window).on("wheel", function (e) {
        if ($("html, body").is(":animated")) return; // 중복 스크롤 방지
        const delta = e.originalEvent.deltaY;
        if (delta > 0 && now < total - 1) {
            now++;
        } else if (delta < 0 && now > 0) {
            now--;
        }
        scrollTo(now);
    });

    // 스크롤 시 헤더 고정
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");
        }
    });

    // 헤더 - 언어 변경
    $(".lbtn").click(function (event) {
        //이벤트 버블링이란, 어떤 요소에서 이벤트(예: 클릭)가 발생하면 그 이벤트가 상위(부모) 요소로 계속 전파되는 현상입니다.
        event.stopPropagation();
        $(".language_list").toggle();
    });

    $(document).click(function () {
        $(".language_list").hide();
    });

    // 섹션1 - 가로 슬라이더
    setInterval(function () {
        $("#slider ul").animate({ left: "-=100%" }, 1000, function () {
            $(this).append($(this).children().first()).css("left", 0);
        });
    }, 5000);

    // 섹션1 - 탭 버튼
    $(".bookingtab_btn a").click(function (event) {
        event.preventDefault();

        // 2. 버튼에 .active 클래스 추가
        $(this).addClass("active");
        // 3. this 형제의 .active 클래스 제거
        $(this).siblings().removeClass("active");

        // 4. 클릭한 버튼의 순번을 가져와서 idx에 저장
        var idx = $(this).index();
        // 5. idx 순번에 해당하는 div 보여줌
        $("#booking_tabs section").eq(idx).addClass("active");
        // 6. idx 순번에 해당하는 div 형제 숨김
        $("#booking_tabs section")
            .eq(idx)
            .siblings("section")
            .removeClass("active");
    });

    // 섹션1 modal_station 팝업
    let $currentStationTarget = null; // 클릭된 a 태그 저장할 변수

    // modal_station 팝업 열기
    $(".inputbox_station .input_btn a").click(function (e) {
        e.preventDefault();
        $currentStationTarget = $(this); // 어떤 a 태그가 클릭됐는지 저장
        $("#modal_station").show();
    });

    // modal 안의 버튼 클릭 시 텍스트 변경
    $("#modal_station .station_list button").click(function () {
        const stationName = $(this).text();

        if ($currentStationTarget) {
            $currentStationTarget
                .contents()
                .filter(function () {
                    return this.nodeType === 3; // 텍스트 노드
                })
                .first()
                .replaceWith(stationName);
        }
    });
    $(".apply_btn, .cancel_btn, .close_btn a").click(function () {
        $("#modal_station").hide();
    });

    // 섹션1 modal_date 팝업
    $(".inputbox_date .input_btn a").click(function () {
        $("#modal_date").show();
    });
    $(".apply_btn").click(function () {
        const selectedDate = $("#date").val(); // date input 값 가져오기
        const selectedTime = $("#time").val(); // time input 값 가져오기

        // 날짜와 시간이 모두 있는 경우만 적용
        if (selectedDate && selectedTime) {
            $(".selected-datetime").text(`${selectedDate} ${selectedTime}`);
        }

        $("#modal_date").hide();
    });
    $(".cancel_btn, .close_btn a").click(function () {
        $("#modal_date").hide();
    });

    // modal_person 팝업
    $(".inputbox_person .input_btn a").click(function () {
        $("#modal_date").show();
    });
    $(".apply_btn, .cancel_btn, .close_btn a").click(function () {
        $("#modal_date").hide();
    });

    // 섹션2 캐로셀
    let currentSlide = 0;
    const totalSlides = 6;
    const slideWidth = 283;
    const slideMargin = 20;
    const containerWidth = 1205;
    const visibleSlides = Math.floor(
        containerWidth / (slideWidth + slideMargin)
    );
    const maxSlide = totalSlides - visibleSlides;
    const $track = $("#section2 .tour_carousel");
    const $indicators = $("#section2 .indicator");

    // 슬라이드 이동 함수
    function moveToSlide(index) {
        // 인덱스 범위 체크 (첫 번째와 마지막에서 멈춤)
        if (index < 0) {
            currentSlide = 0;
            return;
        } else if (index > maxSlide) {
            currentSlide = maxSlide;
            return;
        } else {
            currentSlide = index;
        }

        // 슬라이드 위치 계산
        const offset = currentSlide * (slideWidth + slideMargin);
        $track.css("transform", `translateX(-${offset}px)`);

        // 버튼 상태 업데이트
        updateButtonStates();
    }

    // 버튼 상태 업데이트 함수
    function updateButtonStates() {
        const $prevBtn = $("#section2 .arrow_left");
        const $nextBtn = $("#section2 .arrow_right");

        // 첫 번째 슬라이드에서 이전 버튼 비활성화
        if (currentSlide === 0) {
            $prevBtn.css("opacity", "0.3").css("cursor", "not-allowed");
        } else {
            $prevBtn.css("opacity", "1").css("cursor", "pointer");
        }

        // 마지막 슬라이드에서 다음 버튼 비활성화
        if (currentSlide === totalSlides - 1) {
            $nextBtn.css("opacity", "0.3").css("cursor", "not-allowed");
        } else {
            $nextBtn.css("opacity", "1").css("cursor", "pointer");
        }
    }

    // 이전 버튼 클릭
    $("#section2 .arrow_left").click(function () {
        moveToSlide(currentSlide - 1);
    });

    // 다음 버튼 클릭
    $("#section2 .arrow_right").click(function () {
        moveToSlide(currentSlide + 1);
    });

    // 키보드 이벤트 (선택사항)
    $(document).keydown(function (e) {
        if (e.keyCode === 37) {
            // 왼쪽 화살표
            moveToSlide(currentSlide - 1);
        } else if (e.keyCode === 39) {
            // 오른쪽 화살표
            moveToSlide(currentSlide + 1);
        }
    });

    // 초기 버튼 상태 설정
    updateButtonStates();

    // 섹션2 탭메뉴
    $("#section2 .tab_btn").click(function (event) {
        event.preventDefault();
        var index = $(this).index();

        // 모든 탭 버튼에서 active 클래스 제거
        $("#section2 .tab_btn").removeClass("active");

        // 클릭된 탭 버튼에 active 클래스 추가
        $(this).addClass("active");

        // 모든 탭 컨텐츠 숨기기
        $("#section2 .tour_carousel_container").removeClass("active");

        const activeTabContent = $("#section2 .tour_carousel_container").eq(
            index
        );
        // 해당 인덱스의 컨텐츠 보이기
        activeTabContent.addClass("active");

        setTimeout(function () {
            initSlide(activeTabContent);
        }, 100);
    });
});
