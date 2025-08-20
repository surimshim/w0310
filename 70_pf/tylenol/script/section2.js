$(document).ready(function () {
    let currentPage = 0; // 0=first, 1=second, 2=third
    const pages = ["first", "second", "third"];
    const bg = document.getElementById("bg");
    const product = document.getElementById("product");

    function showPage(index) {
        console.log("현재 페이지:", index); // 디버깅
        pages.forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.toggle("active", i === index);
            }
        });

        if (index === 0) {
            bg.style.borderRadius = "0px";
            bg.style.transform = "scale(1)";
            bg.style.opacity = "1";
            product.style.transform = "translate(-50%, -50%)";
            product.style.boxShadow = "none";
        }
        else if (index === 1) {
            bg.style.borderRadius = "260px";
            bg.style.transform = "scale(0.4, 0.5)";
            bg.style.opacity = "1";
            product.style.transform = "translate(-5%, -5%)";
            product.style.boxShadow = "30px 30px 30px rgba(0, 0, 0, 0.5);";
        }
        else if (index === 2) {
            bg.style.opacity = "0";
            product.style.transform = "translate(50%, -60%)";
        }
    }

    // 휠 이벤트로 페이지 전환
    let isScrolling = false;

    window.addEventListener("wheel", (e) => {
        if (isScrolling) return; // 애니메이션 중에는 무시
        isScrolling = true;

        if (e.deltaY > 0) {
            if (currentPage < 2) currentPage++;
        } else {
            if (currentPage > 0) currentPage--;
        }
        showPage(currentPage);

        // 0.8초 뒤 다시 휠 입력 허용 (CSS transition 시간과 맞춤)
        setTimeout(() => { isScrolling = false; }, 800);
    }, { passive: true });
})