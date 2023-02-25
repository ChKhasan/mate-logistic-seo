<template lang="">
     <div class="services-card">
            <div class="services-card-img">
             <slot></slot>
            </div>
            <div class="services-card-title">
              <h3>{{title}}</h3>
            </div>
            <div class="services-card-text">
              <p>
               {{text}}
              </p>
            </div>
          </div>
</template>
<script>
export default {
    props: ["title","text"]
}
</script>
<style lang="">
    
</style>