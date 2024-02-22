function scrollCarousel(next) {
  const carousel = document.getElementById("carusell");
  const scrollAmount = carousel.offsetWidth;
  let newScrollPosition;

  if (next) {
    // Calculate new position for next scroll
    newScrollPosition = carousel.scrollLeft + scrollAmount >= carousel.scrollWidth ? 0 : carousel.scrollLeft + scrollAmount;
  } else {
    // Calculate new position for previous scroll
    newScrollPosition = carousel.scrollLeft - scrollAmount < 0 ? carousel.scrollWidth - scrollAmount : carousel.scrollLeft - scrollAmount;
  }

  carousel.scrollTo({
    left: newScrollPosition,
    behavior: "smooth",
  });
}

// settup carusell functionality
export function setupCarousel() {
  document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");

    prevButton.addEventListener("click", () => scrollCarousel(false));
    nextButton.addEventListener("click", () => scrollCarousel(true));
  });
}
