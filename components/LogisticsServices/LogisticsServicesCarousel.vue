<template>
  <div class="flex items-center justify-center blog position-relative">
    <div
      ref="carouselControl"
      class="container_xl position-relative carousel_navigate logistic-service-carousel"
    >
      <p>{{ $store.state.translations["main.allServices_choice"] }}</p>
      <div class="navigate-grid">
        <div class="swiper-button-prev prevq">
          <svg
            width="20"
            height="11"
            viewBox="0 0 20 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.63599 4.91318C1.23693 4.91318 0.913424 5.23668 0.913424 5.63574C0.913424 6.0348 1.23693 6.3583 1.63599 6.3583V4.91318ZM19.0358 6.14667C19.318 5.86449 19.318 5.40699 19.0358 5.12481L14.4374 0.526458C14.1553 0.24428 13.6978 0.24428 13.4156 0.526458C13.1334 0.808636 13.1334 1.26614 13.4156 1.54832L17.503 5.63574L13.4156 9.72317C13.1334 10.0053 13.1334 10.4628 13.4156 10.745C13.6978 11.0272 14.1553 11.0272 14.4374 10.745L19.0358 6.14667ZM1.63599 6.3583H18.5249V4.91318H1.63599V6.3583Z"
              fill="#2C7BF2"
            />
          </svg>
        </div>
        <div class="swiper-button-next nextq">
          <svg
            width="20"
            height="11"
            viewBox="0 0 20 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.63599 4.91318C1.23693 4.91318 0.913424 5.23668 0.913424 5.63574C0.913424 6.0348 1.23693 6.3583 1.63599 6.3583V4.91318ZM19.0358 6.14667C19.318 5.86449 19.318 5.40699 19.0358 5.12481L14.4374 0.526458C14.1553 0.24428 13.6978 0.24428 13.4156 0.526458C13.1334 0.808636 13.1334 1.26614 13.4156 1.54832L17.503 5.63574L13.4156 9.72317C13.1334 10.0053 13.1334 10.4628 13.4156 10.745C13.6978 11.0272 14.1553 11.0272 14.4374 10.745L19.0358 6.14667ZM1.63599 6.3583H18.5249V4.91318H1.63599V6.3583Z"
              fill="#2C7BF2"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="swiper mySwiper-2 oneMoreSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="service in services">
          <LogisticsServicesCard :service="service" />
        </div>
        <div class="swiper-slide">
          <div><h1></h1></div>
        </div>
        <div class="swiper-slide">
          <div><h1></h1></div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import LogisticsServicesCard from "../cards/LogisticsServicesCard.vue";
import PartnersCard from "../cards/PartnersCard.vue";
export default {
  props: ["services"],
  computed: {
    windowWidth() {
      return window.innerWidth;
    },
  },
  mounted() {
    // const car = this.$refs.carouselControl;
    // car.style.width = `${window.innerWidth - 32}px`;
    // window.addEventListener("resize", () => {
    //   car.style.width = `${window.innerWidth - 32}px`;
    // });

    const swiper = new Swiper(".oneMoreSlider", {
      slidesPerView: 5,
      spaceBetween: 24,
      // loop: true,
      //   autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: false,
      //   },

      navigation: {
        nextEl: ".nextq",
        prevEl: ".prevq",
      },
      speed: 1000,
      // breakpoints: {
      //   320: {
      //     slidesPerView: 5,
      //     spaceBetween: 10,
      //   },

      //   771: {
      //     slidesPerView: 5,
      //     spaceBetween: 30,
      //   },
      //   1440: {
      //     slidesPerView: 5,
      //     spaceBetween: 30,
      //   },
      // },
    });
  },

  components: {
    PartnersCard,
    PartnersCard,
    PartnersCard,
    LogisticsServicesCard,
  },
};
</script>
<style lang="scss">
.logistic-service-carousel {
  .swiper-button-disabled {
    background: #2c7bf2 !important;
    svg {
      path {
        fill: #fff !important;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: static !important;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #ffffff;
    border: 2.40546px solid #2c7bf2;
    transition: 0.4s;
    &:hover {
      background: #2c7bf2;
      border: 2.40546px solid #2c7bf2;
      svg {
        path {
          fill: #fff;
        }
      }
    }
    &::after {
      display: none;
    }
  }
  .swiper-button-prev {
    svg {
      transform: rotate(180deg);
    }
  }
}
.carousel_navigate {
  margin-left: 0;
  display: flex;
  justify-content: space-between;

  .navigate-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto auto;
    align-items: center;
  }
  p {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #024e90;
    margin-bottom: 0;
  }
}

.logistic-service-carousel {
  margin-bottom: 37px;
}
@media (max-width: 576px) {
  .carousel_navigate {
    margin-left: 0;
    display: flex;
    justify-content: space-between;
    .swiper-button-prev,
    .swiper-button-next {
      position: static !important;
      width: 40px !important;
      height: 40px !important;
      border-radius: 50%;
      background: #ffffff;
      border: 2.40546px solid #2c7bf2;
      &::after {
        display: none;
      }
      svg {
        width: 16px;
      }
    }
    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .logistic-service-carousel {
    margin-bottom: 24px;
  }
}
</style>
