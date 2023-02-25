<template lang="html">
  <div class="location-map-card">
    <div class="lm-map" v-html="currentCitiesData?.iframe"></div>
    <div class="lm-body">
      <h2 class="lm-title">
        {{ currentCitiesData.name }}
      </h2>
      <h6 class="lm-area">Tochka {{ spaceType }}</h6>
      <div class="lm-text" v-html="currentCitiesData.text"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["currentCitiesData", "skeleton","spaceType"],
};
</script>
<style lang=""></style>
