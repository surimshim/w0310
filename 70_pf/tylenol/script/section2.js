$(document).ready(function () {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // 단계별 진행도 계산
        let progress1 = Math.min(scrollY / windowHeight, 1); // 0~1
        let progress2 = Math.min(Math.max((scrollY - windowHeight) / windowHeight, 0), 1); // 0~1

        const bg = document.getElementById("bg");
        const product = document.getElementById("product");
        const first = document.getElementById("first");
        const second = document.getElementById("second");
        const third = document.getElementById("third");

        // ===================== #
        // Step 1 애니메이션
        // ===================== #
        if (bg) {
            let radius = progress1 * 50;
            let scale = 1 - progress1 * 0.3;
            bg.style.borderRadius = `${radius}px`;
            bg.style.transform = `scale(${scale})`;
            bg.style.opacity = 1 - progress2; // 2단계에서 완전히 사라짐
        }

        if (product) {
            let moveY = progress1 * 50;
            product.style.transform = `translate(-50%, calc(-50% + ${moveY}px))`;
        }

        if (first) {
            first.style.opacity = 1 - progress1;
        }

        if (second) {
            second.style.display = "block";
            second.style.opacity = progress1 * (1 - progress2); // 1단계에서 나타났다가 2단계에서 사라짐
        }

        // ===================== #
        // Step 2 애니메이션
        // ===================== #
        if (third) {
            third.style.display = "block";
            third.style.opacity = progress2; // 2단계에서 나타남
        }
    });
})