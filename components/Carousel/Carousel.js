const imgs = document.querySelectorAll(".carousel-element img");
const carouselInsideDynamic = document.querySelector(
  ".carousel-inside-dynamic"
);
const img = document.querySelector(".carousel-element img");
let currentImage = 0;

function resetImagesWidth(imgs) {
  for (let img of imgs) {
    const width =
      document.querySelector(".carousel").clientWidth -
      document.querySelector(".carousel-left-arrow").clientWidth * 2;
    img.style.width = `${width}px`;
  }
  setScrollPosition();
}

function scrollCarousel(scrollRight) {
  if (scrollRight && currentImage < imgs.length - 1) {
    currentImage++;
  } else if (!scrollRight && currentImage > 0) {
    currentImage--;
  }
  setScrollPosition();
}

function setScrollPosition() {
  const leftScrollPosition = -currentImage * img.clientWidth;
  carouselInsideDynamic.style.left = `${leftScrollPosition}px`;
}

resetImagesWidth(imgs);
window.addEventListener("resize", () => resetImagesWidth(imgs));

document.querySelector(".carousel-left-arrow").addEventListener("click", () => {
  scrollCarousel(false);
});

document
  .querySelector(".carousel-right-arrow")
  .addEventListener("click", () => {
    scrollCarousel(true);
  });
