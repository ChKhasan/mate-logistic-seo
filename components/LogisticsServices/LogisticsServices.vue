<template lang="html">
  <div class="logistic-services" id="ourServices">
    <div class="container_xl">
      <Title
        :title="$store.state.translations['main.all_services']"
        :text="$store.state.translations['main.allServices_text']"
      />
    </div>
    <div class="logistic-services-container container_xl">
      <div class="carousel_grid" ref="carouselWidth">
        <div class="position-relative">
          <LogisticsServicesCarousel :services="services" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "../Title.vue";
import LogisticsServicesCarousel from "./LogisticsServicesCarousel.vue";

export default {
  props: ["services"],
  mounted() {
    const car = this.$refs.carouselWidth;
    car.style.width = `${window.innerWidth + 500}px`;
    window.addEventListener("resize", () => {
      const car = this.$refs.carouselWidth;
      car.style.width = `${window.innerWidth + 500}px`;
    });
  },
  components: { Title, LogisticsServicesCarousel },
};
</script>
<style lang="scss">
.logistic-services-container {
  position: relative;
  height: 400px;
  &::after {
    content: "";
    position: absolute;
    width: 413px;
    height: 399px;
    left: calc(-413px - 100px);
    top: -399px;
    background: #73abff;
    opacity: 0.45;
    filter: blur(165.385px);
  }
}
.carousel_grid {
  position: absolute;
  left: 0;
  max-width: calc(1200px + 500px);
}
@media (max-width: 576px) {
  .logistic-services-container {
    height: 320px;
  }
}
</style>
