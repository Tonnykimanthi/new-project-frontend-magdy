const review = document.querySelector(".review");
const buttonShow = document.querySelector(".buttonShow");
const keyObjectContent = document.querySelector(".keyObjectContent");
const reviewContent = document.querySelector(".reviewContent");
const firstArrow = document.querySelector("#firstArrow");
const firstArrowBtn = document.querySelector("#firstArrowBtn");
const secondArrow = document.querySelector("#secondArrow");
const secondArrowBtn = document.querySelector("#secondArrowBtn");

firstArrowBtn.addEventListener("click", () => {
    review.classList.toggle("active");
    keyObjectContent.classList.toggle("active");
    firstArrow.classList.toggle("active");
});

secondArrowBtn.addEventListener("click", () => {
    buttonShow.classList.toggle("active");
    reviewContent.classList.toggle("active");
    secondArrow.classList.toggle("active");
});
