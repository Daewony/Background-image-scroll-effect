const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    updateImage();
})

function updateImage() {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 750;
    // bgImageEl.style.backgroundSize = 20 - window.pageYOffset / 50 + "%";
    console.log(bgImageEl.style.backgroundSize);
}
