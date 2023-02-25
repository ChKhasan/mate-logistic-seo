<template lang="html">
  <div class="calculator-form">
    <h1 class="calculator-title">Vehicle delivery details 2222</h1>
    <div class="">
      <div class="form-block">
        <a-radio-group v-model="value" @change="onChange">
          <div class="calculator-grid">
            <div class="checkbox-input">
              <a-radio :value="1">
                An individual
              </a-radio>
            </div>
            <div class="checkbox-input">
              <a-radio :value="2">
                An individual
              </a-radio>
            </div>
          </div>
        </a-radio-group>
      </div>

      <div class="form-block calculator-grid">
        <div class="d-flex flex-column">
          <label for="inputTo">Your full name</label>
          <input type="text" id="inputFrom" placeholder="Jamshid Sultanov" />
        </div>
        <div class="d-flex flex-column">
          <label for="inputTo">Your email</label>
          <input
            type="text"
            id="inputFrom"
            placeholder="jamshid.sultsnov99@gmail.com"
          />
        </div>
      </div>

      <div class="form-block">
        <label for="inputTo">Your phone number</label>
        <div class="calculator-grid">
          <div class="phone-number" v-for="item in numberInputs" :key="item.id">
            <input
              type="text"
              id="inputFrom"
              v-model="item.value"
              placeholder="(224) 300-5367"
            />
            <img
              @click="deleteNumberInput(item.id)"
              src="../../assets/svg/x.svg"
              alt=""
            />
          </div>
          <div class="phone-number">
            <div class="add-number-btn" v-on:click="addNumberInput">
              + Add another number
            </div>
          </div>
        </div>
      </div>

      <div class="banner-form-btn d-flex justify-content-end steps-action pt-3">
        <div class="form-btn" @click="changeSteps(3)">
          Next stage<svg
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
        <p>Ma’lumotlarni tanlshingiz va qoldirishingiz bilan siz saytning  barcha policy and private qoidalariga rozilik bildirasiz </p>
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
            <h4>Buyurtma jarayonida muammolarga duch keldingizmi?</h4>
            <p>bizning call centrimiz sizga yordam berdi aloqadamiz 24/7</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      value1: 1,
      inputX: require("../../assets/svg/x.svg"),
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
    onChange(e) {
    },
    addNumberInput() {
      this.numberInputs.push({ id: this.numberInputs.length + 1 });
    },
    deleteNumberInput(id) {
      if (this.numberInputs.length > 1) {
        this.numberInputs = this.numberInputs.filter((item) => item.id != id);
      }
    },
  },
};
</script>
<style lang=""></style>
