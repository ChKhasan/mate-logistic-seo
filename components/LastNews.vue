<template>
  <div
    class="flex last-news items-center justify-center blog position-relative"
    id="newAndEvents"
  >
    <div class="container_xl position-relative carousel_navigate mb-4">
      <slot></slot>
      <div class="navigate-grid">
        <div class="swiper-button-prev last-news-prev">
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
        <div class="swiper-button-next last-news-next">
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
    <div class="swiper mySwiper-3">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="article in articles">
          <NewsCard :article="article" />
        </div>

        <!-- <div class="swiper-slide">
          <NewsCard />
        </div>
        <div class="swiper-slide">
          <NewsCard />
        </div>
        <div class="swiper-slide">
          <NewsCard />
        </div>
        <div class="swiper-slide">
          <NewsCard />
        </div>
        <div class="swiper-slide">
          <NewsCard />
        </div>
        <div class="swiper-slide">
          <NewsCard />
        </div>
        <div class="swiper-slide">
          <NewsCard />
        </div>
        <div class="swiper-slide">
          <NewsCard />
        </div>
        <div class="swiper-slide">
          <NewsCard />
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import NewsCard from "./cards/NewsCard.vue";
export default {
  props: ["articles"],
  mounted() {
    const swiper = new Swiper(".mySwiper-3", {
      slidesPerView: 3,
      spaceBetween: 24,
      // loop: true,
      //   autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: false,
      //   },
      autoplay: false,
      navigation: {
        nextEl: ".position-relative .navigate-grid .last-news-next",
        prevEl: ".position-relative .navigate-grid .last-news-prev",
      },
      speed: 1000,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        770: {
          slidesPerView: 2,
          spaceBetween: 50,
        },

        771: {
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
  components: {
    NewsCard,
  },
};
</script>

<style lang="scss">
.last-news {
  .carousel_navigate {
    margin-left: 0;
    display: flex;
    justify-content: space-between;
    // margin-bottom: 24px;
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
    .swiper-button-disabled {
      background: #2c7bf2;
      svg {
        path {
          fill: #fff !important;
        }
      }
    }
    .navigate-grid {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: auto auto;
      align-items: center;
    }
  }
}
</style>
