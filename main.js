const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let current = 0;

function showSlide(i) {
  if (i < 0) {
    current = slide.length - 1;
  } else if (i >= slide.length) {
    current = 0; 
  } else {
    current = i;
  }
  slides.style.transform = `translateX(-${current * 100}%)`;
}

prevButton.addEventListener("click", () => {
  showSlide(current - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(current + 1);
});

setInterval(() => {
    showSlide(current + 1);
}, 4000);
