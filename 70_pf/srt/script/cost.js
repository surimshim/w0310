$(function () {
    let currentInput = null;

    // 출발역, 도착역 클릭 시 모달 열기
    $(document).on('click', '#departure, #arrival', function () {
        currentInput = this;
        $('#station-modal').fadeIn(100);
    });

    // 닫기 버튼
    $(document).on('click', '#close-modal', function () {
        $('#station-modal').fadeOut(100);
    });

    // 역 선택 시 해당 input에 값 넣고 모달 닫기
    $(document).on('click', '.station-list li', function () {
        if (currentInput) {
            $(currentInput).val($(this).text());
        }
        $('#station-modal').fadeOut(100);
    });

    // 모달 바깥 클릭 시 닫기
    $(document).on('click', '#station-modal', function (e) {
        if (e.target === this) $(this).fadeOut(100);
    });
});

/* 탭 높이 자동 조절 최소화 JS */
window.addEventListener('DOMContentLoaded', function () { 
    // 1. 문서가 모두 로드되면 실행
    const tabs = document.querySelector('.tabs');           
    // 2. .tabs 요소를 선택
    function setHeight() {                                  
        // 3. 탭 높이를 조절하는 함수 정의
        const c = tabs.querySelector('input:checked+label+.tab-con'); 
        // 4. 체크된 탭의 내용(.tab-con) 선택
        if (c) tabs.style.height = c.scrollHeight + 'px';     
        // 5. 해당 탭 내용의 실제 높이만큼 .tabs 높이 설정
    }
    tabs.querySelectorAll('input[type="radio"]').forEach(   
        // 6. 모든 탭 라디오 버튼에
        i => i.addEventListener('change', setHeight)          
        //    탭이 바뀔 때마다 setHeight 실행 이벤트 등록
    );
    setHeight();                                            
    // 7. 페이지 로드시에도 한 번 높이 맞춤
});

/*
라인별 설명:
1. DOMContentLoaded 이벤트로 문서가 모두 준비되면 콜백 함수 실행.
2. 탭 전체를 감싸는 .tabs 요소를 가져옴.
3. setHeight 함수는 현재 선택된 탭의 내용을 기준으로 높이를 조절함.
4. 체크된 라디오 버튼 바로 다음 label, 그리고 그 다음 .tab-con(탭 내용) 요소를 선택.
5. .tab-con의 실제 높이(scrollHeight)를 .tabs의 높이로 지정해 탭 내용이 잘리지 않게 함.
6. 모든 탭 라디오 버튼에 change 이벤트를 걸어, 탭이 바뀔 때마다 setHeight가 실행되게 함.
7. 페이지가 처음 로드될 때도 setHeight를 한 번 실행해 초기 높이도 맞춤.
*/