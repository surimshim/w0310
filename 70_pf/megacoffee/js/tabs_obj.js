import tabMenu from './section2.js';

$(() => {
    /* 
        1. 데이터 - 객체, 배열
        
    */

    // data.js
    // const data = [
    //     {
    //         img: 'images/10020.jpg',
    //         txt: '왕메가헛개리카노'
    //     },
    //     {
    //         img: 'images/10022.jpg',
    //         txt: '왕메가사과유자'
    //     },
    //     {
    //         img: 'images/10025.jpg',
    //         txt: '엠지씨네 와앙 메가칩'
    //     }
    // ];

    // 객체 탐색
    const tabs = $('#tabs');
    const tabs_btn = tabs.find('#tabs_btn a');
    
    // // 객체 생성 -> section2.js
    // function tabMenu(idx1, idx2, idx3) {
    //     tabs_1.html(`
    //         <div>
    //             <div><img src="${data[idx1].img}" alt="${data[idx1].txt}"></div>
    //             <h3>1위. ${data[idx1].txt}</h3>
    //         </div>
    //         <div>
    //             <div><img src="${data[idx2].img}" alt="${data[idx2].txt}"></div>
    //             <h3>2위. ${data[idx2].txt}</h3>
    //         </div>
    //         <div>
    //             <div><img src="${data[idx3].img}" alt="${data[idx3].txt}"></div>
    //             <h3>3위. ${data[idx3].txt}</h3>
    //         </div>
    //     `);
    // }

    // 효과
    tabMenu(0,1,2);
    tabs_btn.eq(0).css({color: "var(--main)"});

    // 이벤트
    tabs_btn.click(function(e) {
        // a태그 기본 이벤트(링크 이동) 막기
        e.preventDefault(); 

        // 모든 탭 버튼 색 초기화
        tabs_btn.css({color: "var(--gray2)"});
        // 현재 클릭한 탭 색 변경
        $(this).css({color: "var(--main)"});

        // idx는  li의 순번 0, 1, 2, 3
        let idx = $(this).parent().index();

        // 제어문
        switch (idx) {
            case 0:
                tabMenu(0,1,2);
                break;
            case 1:
                tabMenu(1,2,0);
                break;
            case 2:
                tabMenu(2,0,1);
                break;
            default:
                tabMenu(2,1,0);
        }
    });
});