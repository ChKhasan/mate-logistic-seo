<template>
  <div class="flex items-center justify-center blog position-relative">
    <div class="swiper mySwiper-text">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
export default {
  mounted() {
    const swiper = new Swiper(".mySwiper-text", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      speed: 1000,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          770: {
            slidesPerView: 1,
            spaceBetween: 50,
          },

          771: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
    });
  },
};
</script>

<style lang="scss">

</style>
