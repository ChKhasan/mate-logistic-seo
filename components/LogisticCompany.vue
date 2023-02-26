<template lang="html">
  <div class="logistic-comp">
    <div class="container_xl">
      <Title
        :title="$store.state.translations['main.mate_logistics_company']"
        :text="$store.state.translations['main.mate_logistics_company-text']"
      />

      <div class="logistic-comp-grid">
        <client-only>
          <LogisticCompCard
            data-aos="fade-right"
            data-aos-duration="800"
            :title="$store.state.translations['main.mlc_card1_title']"
            :text="$store.state.translations['main.mlc_card1_text']"
          />
          <LogisticCompCard
            data-aos="zoom-in"
            data-aos-duration="800"
            :title="$store.state.translations['main.mlc_card2_title']"
            :text="$store.state.translations['main.mlc_card2_text']"
          />
          <LogisticCompCard
            data-aos="fade-left"
            data-aos-duration="800"
            :title="$store.state.translations['main.mlc_card3_title']"
            :text="$store.state.translations['main.mlc_card3_text']"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import LogisticCompCard from "./cards/LogisticCompCard.vue";
import Title from "./Title.vue";
export default {
  components: { Title, LogisticCompCard },
};
</script>
<style lang="scss"></style>
