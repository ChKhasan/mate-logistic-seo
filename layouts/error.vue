<template lang="html">
  <div class="container_xl">
    <div class="error_container">
      <h1>404</h1>
      <div class="banner-form-btn">
        <div class="form-btn" @click="$router.push('/')">
          To Back
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.error_container {
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 120px;
    background: linear-gradient(90deg, #008aff 0%, #005ba8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
</style>
