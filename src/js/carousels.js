import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function initCarousels() {
    let swiper;
  new Swiper(".cover-carousel", {
    modules: [Navigation],
    navigation: {
      nextEl: ".cover-carousel-btn-prev",
      prevEl: ".cover-carousel-btn-next",
    },
  });

  new Swiper(".soon-carousel", {
    modules: [Navigation],
    pagination: false,
    navigation: {
      nextEl: ".soon-carousel-btn-prev",
      prevEl: ".soon-carousel-btn-next",
    },
    
  });
  if (window.innerWidth <= 768 && !swiper) {
  new Swiper(".product-cards-carousel", {
    modules: [Navigation],
    slidesPerView: 1,

    navigation: {
      nextEl: ".soon-carousel-btn-prev",
      prevEl: ".soon-carousel-btn-next",
    },
    breakpoints:{
        1024: {
            destroy: true
        }
    }
    
  });
  } else if (window.innerWidth > 768 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
  
}