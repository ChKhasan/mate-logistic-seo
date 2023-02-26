<template lang="html">
  <div class="calculator-form">
    <h1 class="calculator-title step-title">
      {{ $store.state.translations["calculator.choice_tarif"] }}
    </h1>
    <div class="">
      <div
        class="inner-news-desc"
        v-html="$store.state.translations['calculator.chTarif_text']"
      ></div>
      <div class="tarif_card-grid">
        <div
          class="tarif_card"
          @click="$store.commit('tarifType', 1)"
          :class="{ superTarif: $store.state.tarifType == 1 }"
        >
          <div class="tarif_card__title">
            <div>
              <h1 @click="">
                {{ $store.state.translations["calculator.tarif1_price"] }}
              </h1>
            </div>
            <div class="tarif_checkbox">
              <span v-if="$store.state.tarifType == 1"
                ><img :src="checkboxIcon" alt=""
              /></span>
            </div>
          </div>
          <div class="tarif_body">
            <p>{{ $store.state.translations["calculator.tarif1_ption1"] }}</p>
            <p>{{ $store.state.translations["calculator.tarif1_ption2"] }}</p>
            <p>{{ $store.state.translations["calculator.tarif1_ption3"] }}</p>
            <p>{{ $store.state.translations["calculator.tarif1_ption4"] }}</p>
            <p>{{ $store.state.translations["calculator.tarif1_ption5"] }}</p>
          </div>
        </div>
        <div
          class="tarif_card"
          @click="$store.commit('tarifType', 2)"
          :class="{ superTarif: $store.state.tarifType == 2 }"
        >
          <div class="tarif_card__title">
            <div>
              <span>
                {{ $store.state.translations["calculator.tarif2_title"] }}</span
              >
              <h1 @click="">
                {{ $store.state.translations["calculator.tarif2_price"] }}
              </h1>
            </div>
            <div class="tarif_checkbox">
              <span v-if="$store.state.tarifType == 2"
                ><img :src="checkboxIcon" alt=""
              /></span>
            </div>
          </div>
          <div class="tarif_body">
            <p>{{ $store.state.translations["calculator.tarif2_ption1"] }}</p>
            <p>{{ $store.state.translations["calculator.tarif2_ption2"] }}</p>
            <p>{{ $store.state.translations["calculator.tarif2_ption3"] }}</p>
            <p>{{ $store.state.translations["calculator.tarif2_ption4"] }}</p>
            <p>{{ $store.state.translations["calculator.tarif2_ption5"] }}</p>
          </div>
        </div>
      </div>
      <div class="included-tariff">
        <h1 class="calculator-title step-title">
          {{ $store.state.translations["calculator.included_tariff"] }}
        </h1>
        <div class="tariff-info-grid">
          <p class="tariff-info-text">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM8.16699 11.5001V13.1667H9.83366V11.5001H8.16699ZM9.83366 10.1292C10.5034 9.92739 11.0783 9.49171 11.4538 8.90153C11.8292 8.31136 11.9802 7.60596 11.8793 6.9138C11.7783 6.22165 11.4321 5.58878 10.9037 5.13046C10.3753 4.67214 9.6998 4.41886 9.00033 4.41675C8.32604 4.4167 7.67255 4.65021 7.15099 5.07758C6.62943 5.50494 6.272 6.09977 6.13949 6.76091L7.77449 7.08841C7.82089 6.85627 7.93226 6.64208 8.09563 6.47076C8.25901 6.29944 8.46767 6.17803 8.69735 6.12067C8.92702 6.0633 9.16827 6.07234 9.39301 6.14672C9.61775 6.22111 9.81675 6.35778 9.96685 6.54084C10.117 6.7239 10.212 6.94582 10.2409 7.18078C10.2698 7.41574 10.2314 7.65408 10.1301 7.86807C10.0289 8.08205 9.86894 8.26288 9.66893 8.38952C9.46892 8.51616 9.23706 8.5834 9.00033 8.58341C8.77931 8.58341 8.56735 8.67121 8.41107 8.82749C8.25479 8.98377 8.16699 9.19573 8.16699 9.41675V10.6667H9.83366V10.1292Z"
                fill="#0070CE"
              /></svg
            >{{ $store.state.translations["calculator.included_tariff1"] }}
          </p>
          <p class="tariff-info-text">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM8.16699 11.5001V13.1667H9.83366V11.5001H8.16699ZM9.83366 10.1292C10.5034 9.92739 11.0783 9.49171 11.4538 8.90153C11.8292 8.31136 11.9802 7.60596 11.8793 6.9138C11.7783 6.22165 11.4321 5.58878 10.9037 5.13046C10.3753 4.67214 9.6998 4.41886 9.00033 4.41675C8.32604 4.4167 7.67255 4.65021 7.15099 5.07758C6.62943 5.50494 6.272 6.09977 6.13949 6.76091L7.77449 7.08841C7.82089 6.85627 7.93226 6.64208 8.09563 6.47076C8.25901 6.29944 8.46767 6.17803 8.69735 6.12067C8.92702 6.0633 9.16827 6.07234 9.39301 6.14672C9.61775 6.22111 9.81675 6.35778 9.96685 6.54084C10.117 6.7239 10.212 6.94582 10.2409 7.18078C10.2698 7.41574 10.2314 7.65408 10.1301 7.86807C10.0289 8.08205 9.86894 8.26288 9.66893 8.38952C9.46892 8.51616 9.23706 8.5834 9.00033 8.58341C8.77931 8.58341 8.56735 8.67121 8.41107 8.82749C8.25479 8.98377 8.16699 9.19573 8.16699 9.41675V10.6667H9.83366V10.1292Z"
                fill="#0070CE"
              /></svg
            >{{ $store.state.translations["calculator.included_tariff2"] }}
          </p>
          <p class="tariff-info-text">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM8.16699 11.5001V13.1667H9.83366V11.5001H8.16699ZM9.83366 10.1292C10.5034 9.92739 11.0783 9.49171 11.4538 8.90153C11.8292 8.31136 11.9802 7.60596 11.8793 6.9138C11.7783 6.22165 11.4321 5.58878 10.9037 5.13046C10.3753 4.67214 9.6998 4.41886 9.00033 4.41675C8.32604 4.4167 7.67255 4.65021 7.15099 5.07758C6.62943 5.50494 6.272 6.09977 6.13949 6.76091L7.77449 7.08841C7.82089 6.85627 7.93226 6.64208 8.09563 6.47076C8.25901 6.29944 8.46767 6.17803 8.69735 6.12067C8.92702 6.0633 9.16827 6.07234 9.39301 6.14672C9.61775 6.22111 9.81675 6.35778 9.96685 6.54084C10.117 6.7239 10.212 6.94582 10.2409 7.18078C10.2698 7.41574 10.2314 7.65408 10.1301 7.86807C10.0289 8.08205 9.86894 8.26288 9.66893 8.38952C9.46892 8.51616 9.23706 8.5834 9.00033 8.58341C8.77931 8.58341 8.56735 8.67121 8.41107 8.82749C8.25479 8.98377 8.16699 9.19573 8.16699 9.41675V10.6667H9.83366V10.1292Z"
                fill="#0070CE"
              /></svg
            >{{ $store.state.translations["calculator.included_tariff3"] }}
          </p>
          <p class="tariff-info-text">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM8.16699 11.5001V13.1667H9.83366V11.5001H8.16699ZM9.83366 10.1292C10.5034 9.92739 11.0783 9.49171 11.4538 8.90153C11.8292 8.31136 11.9802 7.60596 11.8793 6.9138C11.7783 6.22165 11.4321 5.58878 10.9037 5.13046C10.3753 4.67214 9.6998 4.41886 9.00033 4.41675C8.32604 4.4167 7.67255 4.65021 7.15099 5.07758C6.62943 5.50494 6.272 6.09977 6.13949 6.76091L7.77449 7.08841C7.82089 6.85627 7.93226 6.64208 8.09563 6.47076C8.25901 6.29944 8.46767 6.17803 8.69735 6.12067C8.92702 6.0633 9.16827 6.07234 9.39301 6.14672C9.61775 6.22111 9.81675 6.35778 9.96685 6.54084C10.117 6.7239 10.212 6.94582 10.2409 7.18078C10.2698 7.41574 10.2314 7.65408 10.1301 7.86807C10.0289 8.08205 9.86894 8.26288 9.66893 8.38952C9.46892 8.51616 9.23706 8.5834 9.00033 8.58341C8.77931 8.58341 8.56735 8.67121 8.41107 8.82749C8.25479 8.98377 8.16699 9.19573 8.16699 9.41675V10.6667H9.83366V10.1292Z"
                fill="#0070CE"
              /></svg
            >{{ $store.state.translations["calculator.included_tariff4"] }}
          </p>
          <p class="tariff-info-text">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM8.16699 11.5001V13.1667H9.83366V11.5001H8.16699ZM9.83366 10.1292C10.5034 9.92739 11.0783 9.49171 11.4538 8.90153C11.8292 8.31136 11.9802 7.60596 11.8793 6.9138C11.7783 6.22165 11.4321 5.58878 10.9037 5.13046C10.3753 4.67214 9.6998 4.41886 9.00033 4.41675C8.32604 4.4167 7.67255 4.65021 7.15099 5.07758C6.62943 5.50494 6.272 6.09977 6.13949 6.76091L7.77449 7.08841C7.82089 6.85627 7.93226 6.64208 8.09563 6.47076C8.25901 6.29944 8.46767 6.17803 8.69735 6.12067C8.92702 6.0633 9.16827 6.07234 9.39301 6.14672C9.61775 6.22111 9.81675 6.35778 9.96685 6.54084C10.117 6.7239 10.212 6.94582 10.2409 7.18078C10.2698 7.41574 10.2314 7.65408 10.1301 7.86807C10.0289 8.08205 9.86894 8.26288 9.66893 8.38952C9.46892 8.51616 9.23706 8.5834 9.00033 8.58341C8.77931 8.58341 8.56735 8.67121 8.41107 8.82749C8.25479 8.98377 8.16699 9.19573 8.16699 9.41675V10.6667H9.83366V10.1292Z"
                fill="#0070CE"
              /></svg
            >{{ $store.state.translations["calculator.included_tariff5"] }}
          </p>
          <p class="tariff-info-text">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM8.16699 11.5001V13.1667H9.83366V11.5001H8.16699ZM9.83366 10.1292C10.5034 9.92739 11.0783 9.49171 11.4538 8.90153C11.8292 8.31136 11.9802 7.60596 11.8793 6.9138C11.7783 6.22165 11.4321 5.58878 10.9037 5.13046C10.3753 4.67214 9.6998 4.41886 9.00033 4.41675C8.32604 4.4167 7.67255 4.65021 7.15099 5.07758C6.62943 5.50494 6.272 6.09977 6.13949 6.76091L7.77449 7.08841C7.82089 6.85627 7.93226 6.64208 8.09563 6.47076C8.25901 6.29944 8.46767 6.17803 8.69735 6.12067C8.92702 6.0633 9.16827 6.07234 9.39301 6.14672C9.61775 6.22111 9.81675 6.35778 9.96685 6.54084C10.117 6.7239 10.212 6.94582 10.2409 7.18078C10.2698 7.41574 10.2314 7.65408 10.1301 7.86807C10.0289 8.08205 9.86894 8.26288 9.66893 8.38952C9.46892 8.51616 9.23706 8.5834 9.00033 8.58341C8.77931 8.58341 8.56735 8.67121 8.41107 8.82749C8.25479 8.98377 8.16699 9.19573 8.16699 9.41675V10.6667H9.83366V10.1292Z"
                fill="#0070CE"
              /></svg
            >{{ $store.state.translations["calculator.included_tariff6"] }}
          </p>
        </div>
      </div>
      <div class="banner-form-btn d-flex justify-content-end steps-action pt-3">
        <div @click="toNextStep" class="form-btn">
          {{ $store.state.translations["main.form_btn_nextStage"]
          }}<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9565 6.28711L18.6695 12.0001L12.9565 17.7131M5.35547 12.0001H18.6525"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div class="block-help block-help-web">
        <p>
          {{ $store.state.translations["calculator.text_contact"] }}
        </p>
        <div class="contact-us">
          <div class="contact-us-svg">
            <svg
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.1145 6.88048C30.9358 -2.29543 16.0564 -2.29323 6.88048 6.88552C-2.29544 16.0643 -2.29323 30.9436 6.88553 40.1195C16.0643 49.2954 30.9436 49.2932 40.1196 40.1145C44.5264 35.7063 47.0014 29.728 47 23.495C46.9987 17.2629 44.5219 11.2865 40.1145 6.88048ZM35.5899 32.7352C35.5889 32.7362 35.5879 32.7373 35.5868 32.7383V32.7305L34.3961 33.9133C32.8562 35.4727 30.6135 36.1143 28.4819 35.6053C26.3343 35.0305 24.2928 34.1155 22.4346 32.895C20.7083 31.7917 19.1085 30.502 17.6641 29.0488C16.3352 27.7296 15.1413 26.2811 14.0999 24.7248C12.9609 23.0503 12.0594 21.2261 11.4209 19.3042C10.689 17.0463 11.2955 14.5688 12.9876 12.9044L14.3819 11.5101C14.7696 11.1207 15.3995 11.1193 15.7888 11.5069C15.7898 11.5079 15.7909 11.509 15.7919 11.5101L20.1942 15.9124C20.5836 16.3 20.585 16.9299 20.1974 17.3192C20.1963 17.3202 20.1953 17.3213 20.1942 17.3224L17.6092 19.9074C16.8675 20.641 16.7742 21.8068 17.3899 22.649C18.3249 23.9322 19.3595 25.1396 20.4841 26.2602C21.738 27.5195 23.1011 28.665 24.5574 29.6834C25.3989 30.2704 26.5398 30.1714 27.2677 29.4484L29.7665 26.9104C30.1542 26.521 30.7841 26.5197 31.1734 26.9073C31.1744 26.9083 31.1754 26.9093 31.1765 26.9104L35.5867 31.3284C35.9762 31.716 35.9776 32.3458 35.5899 32.7352Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="contact-us-body">
            <h4>{{ $store.state.translations["calculator.contact_title"] }}</h4>
            <p>{{ $store.state.translations["calculator.contact_text"] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TarifCard from "../../../components/cards/TarifCard.vue";

export default {
  head: {
    title: "Calculator Choice Tarif",
  },
  layout: "calculator",
  data() {
    return {
      value: 1,
      checkboxIcon: require("~/assets/svg/tarif_checkbox.svg"),
      inputX: require("~/assets/svg/x.svg"),
      numberInputs: [
        {
          id: 1,
          value: "",
        },
      ],
    };
  },
  props: {
    changeSteps: {
      type: Function,
    },
  },
  methods: {
    toNextStep() {
      if(process.browser) {

        localStorage.setItem(
          "app_create",
          JSON.stringify({ tarif: this.$store.state.tarifType })
        );
      }
      this.$router.push(
        `/calculator/delivery-details/${this.$route.params.index}`
      );
    },
    show(name) {
      this.$modal.show(name);
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    },
    hide(name) {
      this.$modal.hide(name);
      document.body.style.overflowY = "auto";
      document.body.style.height = "auto";
    },
    onChange(e) {
      console.log("radio checked", e.target.value);
    },
    addNumberInput() {
      this.numberInputs.push({ id: this.numberInputs.length + 1 });
      console.log(this.numberInputs);
    },
    deleteNumberInput(id) {
      if (this.numberInputs.length > 1) {
        this.numberInputs = this.numberInputs.filter((item) => item.id != id);
      }
    },
  },
  components: { TarifCard },
};
</script>
<style lang="scss">
.tarif_card-grid {
  display: grid;
  grid-template-columns: 2fr 2fr 3fr;
  grid-gap: 20px;
}
@media (max-width: 1200px) {
  .tarif_card-grid {
    grid-template-columns: 4fr 4fr 3fr;
  }
}
@media (max-width: 992px) {
  .tarif_card-grid {
    grid-template-columns: 4fr 4fr 1fr;
  }
}
@media (max-width: 768px) {
  .tarif_card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 576px) {
  .tarif_card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
