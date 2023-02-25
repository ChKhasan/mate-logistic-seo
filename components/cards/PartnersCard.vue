<template lang="html">
  <div class="partners-card">
    <div class="partners-grid">
      <div>
      <div class="partners-avatar">
        <img :src="review.image" alt="" />
      </div>
      </div>
      <div class="partners-body">
        <div class="partners-title">
          <h3>{{ review?.title }}</h3>
        </div>
        <div class="partners-text">
          <p v-html="review?.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["review"],
};
</script>
<style lang=""></style>
