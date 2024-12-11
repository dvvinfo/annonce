export function initScroll() {
  const scrollToTopButton = document.querySelector(".arrow");

  if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}
