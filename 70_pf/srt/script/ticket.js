$(document).ready(function () {
    // 편도/왕복 라디오 버튼 선택
    const radios = document.querySelectorAll('input[name="way"]');
    const onewayTab = document.querySelector(".tab-content.oneway");
    const twowayTab = document.querySelector(".tab-content.twoway");

    function toggleTabs() {
        const selected = document.querySelector('input[name="way"]:checked').id;

        if (selected === "oneway") {
            onewayTab.style.display = "block";
            twowayTab.style.display = "none";
        } else if (selected === "twoway") {
            onewayTab.style.display = "none";
            twowayTab.style.display = "block";
        }
    }

    radios.forEach((radio) => radio.addEventListener("change", toggleTabs));

    // 초기 표시 설정
    toggleTabs();

    let $currentStationTarget = null; // 클릭된 a 태그 저장할 변수

    // modal_station 팝업 열기
    $(".station_btn .inputbox_station").click(function (e) {
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

    // modal_date 팝업
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
        $("#modal_person").show();
    });
    $(".apply_btn, .cancel_btn, .close_btn a").click(function () {
        $("#modal_person").hide();
    });

    // 경로 반대 버튼
    $(".station_btn a").eq(1).click(function (e) {
        e.preventDefault();

        // 왼쪽, 오른쪽 a.inputbox_station 선택
        const $left = $(".station_btn .inputbox_station").eq(0);
        const $right = $(".station_btn .inputbox_station").eq(1);

        // 텍스트 노드 가져오기 (이미지 제외)
        const leftText = $left.contents().filter(function () {
            return this.nodeType === 3;
        }).text();

        const rightText = $right.contents().filter(function () {
            return this.nodeType === 3;
        }).text();

        // 서로 교환
        $left.contents().filter(function () {
            return this.nodeType === 3;
        }).first().replaceWith(rightText);

        $right.contents().filter(function () {
            return this.nodeType === 3;
        }).first().replaceWith(leftText);
    });
});
