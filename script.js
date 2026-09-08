// ===============================
// PINDAH HALAMAN
// ===============================

function nextPage(pageNumber) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById("page" + pageNumber);

    if (targetPage) {
        targetPage.classList.add("active");
    }

    // Confetti setiap pindah halaman
    createConfetti();
}


// ===============================
// CONFETTI
// ===============================

function createConfetti() {
    const symbols = ["💗", "💕", "💖", "✨", "🌸", "🎀"];

    for (let i = 0; i < 25; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti");
        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.fontSize =
            (Math.random() * 10 + 15) + "px";

        document.body.appendChild(confetti);

        // Hapus setelah animasi selesai
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}


// ===============================
// CONFETTI SAAT WEBSITE DIBUKA
// ===============================

window.addEventListener("load", () => {
    setTimeout(() => {
        createConfetti();
    }, 500);
});