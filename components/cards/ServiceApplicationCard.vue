<template lang="html">
  <div class="service-app-card">
    <div class="flex-container">
      <div class="da-card-icon">
        <div class="circle">
          <div>
            {{ number }}
          </div>
        </div>
      </div>
      <div class="da-card-body">
        <h4>{{ title }}</h4>
        <p>
          {{ text }}
        </p>
      </div>
    </div>
    <div class="da-card-mobile-text">
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "text", "number"],
};
</script>
<style lang=""></style>
