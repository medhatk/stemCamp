/* popup cards*/
const cards = document.querySelectorAll(".course-card");
const popupOverlay = document.querySelector(".popup-overlay");
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupTeacher = document.getElementById("popup-teacher");
const closeBtn = document.querySelector(".close-btn");


cards.forEach(card => {
    card.addEventListener("click", () => { 
        const title = card.querySelector("h3").textContent;
        const description = card.querySelector("p").textContent;
        const image = card.querySelector("img").src;
        const teacherName =card.querySelector(".teacher-name").textContent;
        const teacherInfo =card.querySelector(".teacher-info").textContent;

        popupImage.src = image;
        popupTitle.textContent = title;
        popupTeacher.textContent = teacherName;
        popupDescription.textContent = teacherInfo;
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
/* صفحه التسجيل */
const enrollBtns = document.querySelectorAll(".Enroll-btn");

const registerOverlay = document.querySelector(".register-overlay");
const closeRegister = document.querySelector(".close-register");

enrollBtns.forEach(btn => {

    btn.addEventListener("click", () => {
        registerOverlay.classList.add("active");
    });

});

closeRegister.addEventListener("click", () => {
    registerOverlay.classList.remove("active");
});

registerOverlay.addEventListener("click", (e) => {

    if(e.target === registerOverlay){
        registerOverlay.classList.remove("active");
    }

});
/* الارسال للواتساب */
const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const studentName =
    registerForm.querySelector('[placeholder="اسم الطالب"]').value;

    const phone =
    registerForm.querySelector('[placeholder="رقم الهاتف"]').value;

    const parentPhone =
    registerForm.querySelector('[placeholder="رقم هاتف ولي الأمر"]').value;

    const score =
    registerForm.querySelector('[placeholder="المجموع من 280"]').value;

    const track =
    document.querySelector('input[name="track"]:checked')?.value;

    const perfectSubjects = [...document.querySelectorAll(
    'input[name="perfectSubject"]:checked'
)].map(subject => subject.value);

    const message = `
اسم الطالب: ${studentName}
رقم الهاتف: ${phone}
رقم ولي الأمر: ${parentPhone}
المجموع: ${score}/280
مواد الدرجات النهائيه : ${perfectSubjects.join(" - ") || "لا يوجد"}
المسار: ${track}
`;

    const whatsappUrl =
`https://wa.me/201033279972?text=${encodeURIComponent(message)}`;

window.location.href = whatsappUrl;
});