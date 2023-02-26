<template lang="html">
  <div>
  <client-only>

    <modal name="modal_timer" width="440px" height="auto">
      <div class="modal_container">
        <div class="modal_header d-flex justify-content-between">
          <h5>Tezkor aloqa</h5>
          <span @click="hide('modal_timer')"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66699 6.646L17.333 17.31M6.66699 17.31L17.333 6.646"
                stroke="#024E90"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
        </div>
        <div class="modal_body">
          <p class="timer_text">
            Ma’lumot uchun raxmat! atiga 1 soat ichida operatorimiz aloqaga
            chiqadi
          </p>
          <div class="modal_timer">
            <span class="two_dots">:</span>
            <flip-countdown
              :deadline="deadline2"
              :showDays="false"
              :showHours="false"
              @timeElapsed="timeElapsedHandler"
            ></flip-countdown>
          </div>
          <div class="d-flex justify-content-center">
            <span class="another_attempt">Boshqattan urinish</span>
          </div>
        </div>
      </div></modal
    >
  </client-only>

  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
