import "../scss/style.scss";
import { initSidebar } from "./sidebar";
import { initCarousels } from "./carousels";
import { initScroll } from "./scroll";

document.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  initCarousels();
  initScroll();
});
