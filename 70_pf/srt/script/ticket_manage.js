$(document).ready(function () {
    // 현재 날짜 표시
    function updateDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        const dayOfWeek = daysOfWeek[today.getDay()]; // 요일 숫자를 한글로 변환
        const formattedDate = `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
        document.getElementById("date").innerText = formattedDate;
    }

    updateDate(); // 페이지 로드 시 날짜 + 요일 표시
});