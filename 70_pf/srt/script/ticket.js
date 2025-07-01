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
    $(".cancel_btn").click(function () {
        $("#modal_date").hide();
    });
    $(".close_btn a").click(function () {
        $("#modal_date").hide();
    });

    // modal_person 팝업
    $(".inputbox_person .input_btn a").click(function () {
        $("#modal_person").show();
    });
    $(".apply_btn").click(function () {
        $("#modal_person").hide();
    });
    $(".cancel_btn").click(function () {
        $("#modal_person").hide();
    });
    $(".close_btn a").click(function () {
        $("#modal_person").hide();
    });
});
