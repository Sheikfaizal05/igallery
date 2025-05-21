let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

function openLightbox(event) {
    if (event.target.tagName === "IMG") {
        lightbox.style.display = "flex";
        lightboxImg.src = event.target.src;
        currentIndex = Array.from(images).indexOf(event.target);
    }
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    lightboxImg.src = images[currentIndex].src;
}