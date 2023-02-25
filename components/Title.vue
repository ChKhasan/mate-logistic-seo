<template lang="html">
  <div class="title-comp">
    <div>
      <h1 v-html="title"></h1>
      <span></span>
    </div>
    <div>
      <p v-if="text" v-html="text"></p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "text"],
};
</script>
<style lang=""></style>
