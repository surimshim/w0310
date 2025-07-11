$(document).ready(function () {
    const totalPages = 30;
    let currentPageGroup = 1;

    function renderPagination(group) {
        const pagination = document.getElementById("pagination");
        pagination.innerHTML = "";

        const startPage = (group - 1) * 10 + 1;
        const endPage = Math.min(group * 10, totalPages);

        // ◀ 이전
        if (group > 1) {
            const prev = document.createElement("a");
            prev.textContent = "◀";
            prev.href = "#";
            prev.className = "page-btn arrow";
            prev.addEventListener("click", (e) => {
                e.preventDefault();
                currentPageGroup--;
                renderPagination(currentPageGroup);
            });
            pagination.appendChild(prev);
        }

        // 페이지 링크
        for (let i = startPage; i <= endPage; i++) {
            const link = document.createElement("a");
            link.textContent = i;
            link.href = `#`; // 여기서 이동
            link.className = "page-btn";
            pagination.appendChild(link);
        }

        // ▶ 다음
        if (endPage < totalPages) {
            const next = document.createElement("a");
            next.textContent = "▶";
            next.href = "#";
            next.className = "page-btn arrow";
            next.addEventListener("click", (e) => {
                e.preventDefault();
                currentPageGroup++;
                renderPagination(currentPageGroup);
            });
            pagination.appendChild(next);
        }
    }

    renderPagination(currentPageGroup);
});