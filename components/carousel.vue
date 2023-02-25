<template>
  <div class="flex items-center justify-center blog position-relative">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination"></div>
    <!-- If navigation buttons are needed -->
    <div class="swiper-button-prev">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.25 12.2743L19.25 12.2743"
          stroke="#020105"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969"
          stroke="#020105"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="swiper-button-next">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.75 11.7257L4.75 11.7257"
          stroke="#020105"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.7002 5.70131L19.7502 11.7253L13.7002 17.7503"
          stroke="#020105"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // init Swiper:  eslint-disable used for deleting error of unsued const swiper
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      // grabCursor: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      // Pagination if needed
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 40000,
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // you can use different options later
    // swiper.on("activeIndexChange", (swiper) => {
    //   console.log(swiper);
    // });
  },
};
</script>

<style lang="scss" scoped>
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #ff7e00;
}
.swiper-pagination-bullet-active {
  width: 12px;
  height: 12px;
}
.swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1 !important;
}
.blog {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination {
  bottom: -30px;
  span {
    background: red !important;
  }
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet {
  width: 16px !important;
  height: 16px !important;
  background: red !important;
}
.swiper-pagination-bullet {
  color: red !important;
  background: red !important;
}
.swiper-button-prev,
.swiper-button-next {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 8;
  &::after {
    display: none;
  }
}
.swiper-button-prev {
  left: 30px;
  right: auto;
}
.swiper-button-next {
  left: auto;
  right: 30px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  overflow: hidden;
  color: #fff;
  width: 100% !important;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  overflow: hidden;
  color: #fff;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.swiper-slide {
  width: 400px;
  height: 400px;
  background: red;
}
</style>
