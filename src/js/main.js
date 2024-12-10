import "../scss/style.scss";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper JS
import Swiper from "swiper";

const coverCarousel = new Swiper(".cover-carousel", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".cover-carousel-btn-prev",
    prevEl: ".cover-carousel-btn-next",
  },
});

const soonCarousel = new Swiper(".soon-carousel", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".soon-carousel-btn-prev",
    prevEl: ".soon-carousel-btn-next",
  },
});
