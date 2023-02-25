<template>
  <div v-if="loading" class="nuxt_loader">
    <cube-spin></cube-spin>
  </div>
</template>
<script>
import CubeSpin from "vue-loading-spinner/src/components/RotateSquare2.vue";
export default {
  components: { CubeSpin },
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    },
    finish() {
      this.loading = false;
      document.body.style.overflowY = "auto";
      document.body.style.height = "auto";
    },
  },
};
</script>
<style lang="scss">
.nuxt_loader {
  position: fixed;
  z-index: 2050;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}
.spinner {
  &::after {
    background-color: rgb(0, 138, 255) !important;
  }
}
</style>
