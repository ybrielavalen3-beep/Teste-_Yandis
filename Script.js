// ===================================
// EFEITO PARALLAX NA IMAGEM PRINCIPAL
// ===================================

const heroPhoto = document.querySelector(".hero-photo img");

window.addEventListener("scroll", () => {

    if (!heroPhoto) return;

    const movimento = window.scrollY * 0.15;

    heroPhoto.style.transform = `translateY(${movimento}px)`;

});