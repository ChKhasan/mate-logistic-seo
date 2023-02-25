<template lang="html">
  <div
    class="tarif_card"
    @click="tarif = tarif_type"
    :class="{ superTarif: tarif == tarif_type }"
  >
    <div class="tarif_card__title">
      <div>
        <span v-if="superTarif">Super price for you</span>
        <h1 @click="">830$</h1>
      </div>
      <div class="tarif_checkbox">
        <span><img :src="checkboxIcon" alt="" /></span>
      </div>
    </div>
    <div class="tarif_body">
      <p>Service type Door to door</p>
      <p>InsuranceIncluded</p>
      <p>All services</p>
      <p>Service type Door to door</p>
      <p>InsuranceIncluded</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["superTarif", "tarif_type"],
  data() {
    return {
      checkboxIcon: require("../../assets/svg/tarif_checkbox.svg"),
      tarif: 0,
    };
  },
};
</script>
