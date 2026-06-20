/* popup cars*/
const cards = document.querySelectorAll(".course-card");
const popupOverlay = document.querySelector(".popup-overlay");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const closeBtn = document.querySelector(".close-btn");

cards.forEach(card => {
    card.addEventListener("click", () => {

        const title = card.querySelector("h3").textContent;
        const description = card.querySelector("p").textContent;

        popupTitle.textContent = title;
        popupDescription.textContent = description;

        popupOverlay.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
});

popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove("active");
    }
});

/* Stiky header */
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");
     menuBtn.classList.toggle("active");

    if(nav.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});