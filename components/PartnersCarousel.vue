<template>
  <div
    class="flex items-center justify-center blog position-relative"
    data-aos="fade-left"
    data-aos-duration="1000"
  >
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="review in reviews">
          <PartnersCard :review="review" />
        </div>
        <div class="swiper-slide" v-for="review in reviews">
          <PartnersCard :review="review" />
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
import PartnersCard from "./cards/PartnersCard.vue";
export default {
  props: ["reviews"],
  mounted() {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      // notNextTick: true,
      autoplay: {
        delay: 1,
        // disableOnInteraction: false,
      },
      speed: 10000,
      breakpoints: {
        320: {
          slidesPerView: 1.4,
          spaceBetween: 12,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  },
  components: { PartnersCard },
};
</script>

<style lang="scss">
.swiper-slide {
  height: initial !important
  ;
}
</style>
