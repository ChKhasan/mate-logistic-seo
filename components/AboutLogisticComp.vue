<template lang="html">
  <div class="about-logistic-comp">
    <div class="container_xl">
      <Title
        :title="$store.state.translations['main.mate_logistics_company']"
        :text="$store.state.translations['main.mate_logistics_company-text']"
      />
      <div class="about-logistic-comp-grid about-shadow">
        <client-only>
          <AboutLogisticCard
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="200"
            :title="$store.state.translations['main.info1_cardTitle']"
            :text="$store.state.translations['main.info1_cardText']"
          />
          <AboutLogisticCard
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="400"
            :title="$store.state.translations['main.info2_cardTitle']"
            :text="$store.state.translations['main.info2_cardText']"
          />
          <AboutLogisticCard
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="600"
            :title="$store.state.translations['main.info3_cardTitle']"
            :text="$store.state.translations['main.info3_cardText']"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import AboutLogisticCard from "./cards/AboutLogisticCard.vue";
import Title from "./Title.vue";

export default {
  components: { Title, AboutLogisticCard },
};
</script>
<style lang="scss">
.about-shadow {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 395px;
    height: 381px;
    left: calc(-395px - 30px);
    background: #73abff;
    opacity: 0.45;
    filter: blur(165.385px);
  }
  &::before {
    content: "";
    position: absolute;
    width: 395px;
    height: 381px;
    top: 30px;
    right: calc(-395px - 50px);
    background: #73abff;
    opacity: 0.45;
    filter: blur(165.385px);
  }
}
</style>
