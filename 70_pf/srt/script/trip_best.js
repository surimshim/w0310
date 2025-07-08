// 풀페이지슬라이드
$(document).ready(function () {
    let now = 0;
    const sections = $(".container section");
    const headerHeight = $("#header").height();
    const total = sections.length + 1;

    function scrollTo(index) {
        let pos = 0;
        if (index < sections.length) {
            pos = sections.eq("index").position().top - headerHeight;
        } else {
            pos = $("#footer").position().top - headerHeight;
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

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");
        }
    });
});

//리모컨
$(document).ready(function () {
    const $sidebar = $(".sidebar_contents");
    const $header = $("#header");
    const $footer = $("footer");
    const $container = $(".best_container");

    let headerHeight = $header.outerHeight();
    let sidebarHeight = $sidebar.outerHeight();
    let footerOffset = $footer.offset().top;
    let containerOffset = $container.offset().left;
    let sidebarWidth = $sidebar.outerWidth();

    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();

        // 반응형을 위한 체크
        if ($(window).width() <= 768) {
            $sidebar.removeClass("sticky bottom");
            return;
        }

        // 푸터 위치 재계산 (동적 콘텐츠 대응)
        footerOffset = $footer.offset().top;

        // 헤더가 완전히 사라졌는지 확인
        if (scrollTop >= headerHeight) {
            // 푸터와의 거리 계산
            let sidebarBottom = scrollTop + sidebarHeight + 40; // 40px 여백

            if (sidebarBottom >= footerOffset) {
                // 푸터 근처에서 멈춤
                $sidebar.removeClass("sticky").addClass("bottom");
                // $sidebar.css({
                //     position: "absolute",
                //     // top: 100 + "px",
                // });
            } else {
                // 스크롤 따라가기
                $sidebar.removeClass("bottom").addClass("sticky");
                $sidebar.css({
                    position: "fixed",
                    // top: "20px",
                    left: containerOffset + "px",
                    width: sidebarWidth + "px",
                });
            }
        } else {
            // 헤더가 아직 보이는 상태
            $sidebar.removeClass("sticky bottom");
            $sidebar.css({
                position: "static",
                width: "auto",
            });
        }
    });

    // 윈도우 리사이즈 시 위치 재계산
    $(window).resize(function () {
        headerHeight = $header.outerHeight();
        sidebarHeight = $sidebar.outerHeight();
        footerOffset = $footer.offset().top;
        containerOffset = $container.offset().left;
        sidebarWidth = $sidebar.outerWidth();

        $(window).trigger("scroll");
    });
});

//드롭다운(오른쪽메뉴)
$(document).ready(function () {
    const mainMenu = document.getElementById("best_sub_title");
    const subMenu = document.getElementById("best_sub_nav");
    const arrow = document.getElementById("arrow");

    // 메인메뉴 클릭 시 토글
    mainMenu.addEventListener("click", function (e) {
        e.stopPropagation();

        if (subMenu.classList.contains("show")) {
            // 서브메뉴가 열려있으면 닫기
            subMenu.classList.remove("show");
            arrow.classList.remove("down");
        } else {
            // 서브메뉴가 닫혀있으면 열기
            subMenu.classList.add("show");
            arrow.classList.add("down");
        }
    });

    // 토글 밖 영역 클릭 시 서브메뉴 닫기
    document.addEventListener("click", function (e) {
        if (!mainMenu.contains(e.target) && !subMenu.contains(e.target)) {
            subMenu.classList.remove("show");
            arrow.classList.remove("down");
        }
    });

    // 서브메뉴 클릭 시 이벤트 버블링 방지
    subMenu.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});

//컨텐츠 페이지 넘김
// $(document).ready(function () {
//     let currentPage = 1;
//     const totalPages = 3;

//     // 페이지 표시 함수
//     function showPage(pageNum) {
//         // 모든 콘텐츠 숨기기
//         $(".best_tour_contents_box").removeClass("activeBox");

//         // 해당 페이지 콘텐츠 표시
//         $(`.best_tour_contents_box[data-page="${pageNum}"]`).addClass(
//             "activeBox"
//         );

//         // 페이지 버튼 상태 업데이트
//         $(".page_num").removeClass("btnClick");
//         $(`.page_num[data-page="${pageNum}"]`).addClass("btnClick");

//         /* // 화살표 버튼 상태 업데이트
//         $("#prev_btn").prop("disabled", pageNum === 1);
//         $("#next_btn").prop("disabled", pageNum === totalPages); */

//         currentPage = pageNum;
//     }

//     // 페이지 번호 클릭 이벤트
//     $(".page_num").click(function () {
//         const pageNum = parseInt($(this).data("page"));
//         showPage(pageNum);
//     });

//     // 이전 페이지 버튼 클릭 이벤트
//     $("#prev_btn").click(function () {
//         if (currentPage > 1) {
//             showPage(currentPage - 1);
//         }
//     });

//     // 다음 페이지 버튼 클릭 이벤트
//     $("#next_btn").click(function () {
//         if (currentPage < totalPages) {
//             showPage(currentPage + 1);
//         }
//     });

//     // 초기 페이지 설정
//     showPage(1);
// });

// //페이지 넘김 시 화면 맨 위로
// $(document).ready(function () {
//     $('.best_btn_page button').on('click', function () {
//         $('html').scrollTop('0');
//     });
//
// });


// 검색창
function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".best_tour_contents_box");

    items.forEach((item) => {
        const title = item.querySelector("h3").textContent.toLowerCase();
        const content = item.querySelector("p").textContent.toLowerCase();

        if (
            searchTerm === "" ||
            title.includes(searchTerm) ||
            content.includes(searchTerm)
        ) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// // 엔터키로도 검색 가능
// document
//     .getElementById("searchInput")
//     .addEventListener("keypress", function (e) {
//         if (e.key === "Enter") {
//             search();
//         }
//     });
// 이 코드 활성화 시 검색결과 적용이 안됌

//필터
// 선택된 필터 저장
var selectedFilters = {
    duration: [],
    type: [],
    reserved: [],
    subway: [],
};

$(document).ready(function () {
    updateResultCount();

    // 필터 버튼 클릭 이벤트
    $(".filter_btn").click(function () {
        var filterType = $(this).data("filter");
        var filterValue = $(this).data("value");

        $(this).toggleClass("active");

        // 선택된 필터 업데이트
        if ($(this).hasClass("active")) {
            if (selectedFilters[filterType].indexOf(filterValue) === -1) {
                selectedFilters[filterType].push(filterValue);
            }
        } else {
            selectedFilters[filterType] = selectedFilters[filterType].filter(
                function (item) {
                    return item !== filterValue;
                }
            );
        }

        // 전체 선택 처리 > 전체탭제거
        // if (filterValue === '전체') {
        //     // 같은 필터 그룹의 다른 버튼들 비활성화
        //     $('.filter_btn[data-filter="' + filterType + '"]').removeClass('active');
        //     $(this).addClass('active');
        //     selectedFilters[filterType] = ['전체'];
        // } else {
        //     // 전체 버튼 비활성화
        //     $('.filter_btn[data-filter="' + filterType + '"][data-value="전체"]').removeClass('active');

        //     // 전체 버튼에서 '전체' 제거
        //     selectedFilters[filterType] = selectedFilters[filterType].filter(function (item) {
        //         return item !== '전체';
        //     });

        // 필터조건확인추가문구
        // selectedFilters.duration.includes('전체') ||
        // }
    });

    // 적용 버튼 클릭
    $("#applyFilter").click(function () {
        applyFilters();
    });

    // 초기화 버튼 클릭
    $("#resetFilter").click(function () {
        resetFilters();
    });
});

// 필터 적용 함수
function applyFilters() {
    var visibleCount = 0;

    $(".best_tour_contents_box").each(function () {
        var card = $(this);
        var cardDuration = card.data("duration");
        var cardType = card.data("type");
        var cardReserved = card.data("reserved");
        var cardSubway = card.data("subway");

        // 필터 조건 확인
        var durationMatch =
            selectedFilters.duration.length === 0 ||
            selectedFilters.duration.indexOf(cardDuration) !== -1;
        var typeMatch =
            selectedFilters.type.length === 0 ||
            selectedFilters.type.indexOf(cardType) !== -1;
        var reservedMatch =
            selectedFilters.reserved.length === 0 ||
            selectedFilters.reserved.indexOf(cardReserved) !== -1;
        var subwayMatch =
            selectedFilters.subway.length === 0 ||
            selectedFilters.subway.indexOf(cardSubway) !== -1;

        // 조건에 맞으면 보이고, 안 맞으면 숨김
        if (durationMatch && typeMatch && reservedMatch && subwayMatch) {
            card.removeClass("hidden");
            // card.addClass('activeBox');
            visibleCount++;
        } else {
            card.addClass("hidden");
            // card.removeClass('activeBox');
        }
    });

    // 결과 개수 업데이트
    $("#resultCount").text(visibleCount);

    // 결과가 없으면 "검색 결과 없음" 메시지 표시
    if (visibleCount === 0) {
        $("#noResult").show();
    } else {
        $("#noResult").hide();
    }
}

// 필터 초기화 함수
function resetFilters() {
    selectedFilters = {
        duration: [],
        type: [],
        reserved: [],
        subway: [],
    };

    $(".filter_btn").removeClass("active");
    $(".best_tour_contents_box").removeClass("hidden");
    $("#noResults").hide();
    updateResultCount();
}

// 결과 개수 업데이트 함수
function updateResultCount() {
    var totalCount = $(".best_tour_contents_box").length;
    $("#resultCount").text(totalCount);
}
