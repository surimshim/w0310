// 스크롤 이벤트 감지 및 클래스 토글
/* 
    이벤트: scroll
    속성
        .clientHeight
        .offsetHeight
        window.scrollY
        .classList.add()
        .classList.remove()
*/
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    // 스크롤이 50px 이상 되면 헤더에 navbar-scrolled 클래스가 추가
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});