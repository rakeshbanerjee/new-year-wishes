window.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    if (music) {
        music.volume = 0.4;
        music.play().catch(() => {
            document.addEventListener("click", () => music.play(), { once: true });
        });
    }
});
