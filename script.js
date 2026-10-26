
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuBtn.textContent = isOpen ? "×" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});


// LOVE LETTER

const modal = document.getElementById("letterModal");

document.getElementById("openLetter").addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
});

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

document.getElementById("closeLetter").addEventListener("click", closeModal);
document.getElementById("modalBg").addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
});


// SURPRISE MESSAGES

const messages = [
    "Your smile makes my day beautiful. ♡",
    "You are my favourite notification.",
    "I hope you always keep smiling.",
    "Every little moment with you is special.",
    "I'm really lucky to have you in my life. ❤️"
];

let messageIndex = 0;

document.getElementById("surpriseBtn").addEventListener("click", () => {

    document.getElementById("surpriseMessage").textContent =
        messages[messageIndex];

    messageIndex = (messageIndex + 1) % messages.length;

    for (let i = 0; i < 7; i++) {
        createHeart();
    }
});


// FLOATING HEARTS

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.bottom = "10px";
    heart.style.left = Math.random() * 90 + "vw";
    heart.style.color = "#c9828b";
    heart.style.fontSize = "25px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "30";
    heart.style.animation = "heartMove 2.5s ease forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2500);
}

const heartStyle = document.createElement("style");

heartStyle.innerHTML = `
@keyframes heartMove {
    to {
        transform: translateY(-75vh) rotate(30deg);
        opacity: 0;
    }
}`;

document.head.appendChild(heartStyle);



const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");

musicBtn.addEventListener("click", async () => {

    if (music.paused) {
        try {
            await music.play();
            musicText.textContent = "Pause Music";
        } catch (error) {
            musicText.textContent = "Tap to Play";
        }
    } else {
        music.pause();
        musicText.textContent = "Play Music";
    }

});
