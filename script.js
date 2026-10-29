const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const imagePreviewDialog = document.getElementById("imagePreviewDialog");
if (imagePreviewDialog) {
const imagePreview = document.getElementById("imagePreview");
const imagePreviewCaption = document.getElementById("imagePreviewCaption");

document.querySelectorAll(".work-image-button").forEach(button => {
    button.addEventListener("click", () => {
        imagePreview.src = button.dataset.image;
        imagePreview.alt = button.dataset.alt;
        imagePreviewCaption.textContent = button.dataset.alt;
        imagePreviewDialog.showModal();
    });
});

document.getElementById("closeImagePreview").addEventListener("click", () => {
    imagePreviewDialog.close();
});

imagePreviewDialog.addEventListener("click", event => {
    if (event.target === imagePreviewDialog) imagePreviewDialog.close();
});
}
const slideImage = document.getElementById("slideImage");
const dots = document.querySelectorAll(".carousel-dots .dot");
const carousel = document.querySelector(".carousel-area");
if (slideImage && dots.length && carousel) {
let activeSlide = 0;
let autoplayTimer;

function showSlide(index) {
    activeSlide = (index + dots.length) % dots.length;
    const slideNumber = activeSlide + 1;
    slideImage.src = `images/img${slideNumber}.jpg`;
    slideImage.alt = `รูปภาพสไลด์ ${slideNumber}`;

    dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeSlide;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-current", String(isActive));
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        startAutoplay();
    });
});

document.getElementById("previousSlide").addEventListener("click", () => {
    showSlide(activeSlide - 1);
    startAutoplay();
});

document.getElementById("nextSlide").addEventListener("click", () => {
    showSlide(activeSlide + 1);
    startAutoplay();
});

function startAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => showSlide(activeSlide + 1), 1000);
}

function stopAutoplay() {
    clearInterval(autoplayTimer);
}

carousel.addEventListener("mouseenter", stopAutoplay);
carousel.addEventListener("mouseleave", startAutoplay);

document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
});

startAutoplay();
}
