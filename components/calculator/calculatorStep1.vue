<template lang="html">
  <div class="calculator-form">
    <h1 class="calculator-title">Vehicle delivery details</h1>
    <div class="">
      <div class="form-block">
        <label for="inputFrom">Delivery address</label>
        <div class="calculator-grid">
          <input type="text" id="inputFrom" placeholder="Street home flat" />
          <input type="text" id="inputFrom" placeholder="Street home flat" />
        </div>
      </div>

      <div class="form-block">
        <label for="inputTo">California City, CA 93505 , This is a?</label>
        <a-radio-group v-model="value" @change="onChange">
          <div class="calculator-grid">
            <div class="checkbox-input">
              <a-radio :value="1">
                Residential address
              </a-radio>
            </div>
            <div class="checkbox-input">
              <a-radio :value="2">
                Residential address
              </a-radio>
            </div>
          </div>
        </a-radio-group>
      </div>

      <div class="form-block">
        <label for="inputTo">California City, CA 93505 , This is a?</label>
        <a-radio-group v-model="value1" @change="onChange">
          <div class="calculator-grid">
            <div class="checkbox-input">
              <a-radio :value="1">
                Residential address
              </a-radio>
            </div>
            <div class="checkbox-input">
              <a-radio :value="2">
                Residential address
              </a-radio>
            </div>
          </div>
        </a-radio-group>
      </div>

      <div class="form-block">
        <label for="">Have any special instructions? (Optional)</label>
        <textarea
          name=""
          id=""
          cols="20"
          rows="5"
          placeholder="Description"
        ></textarea>
      </div>
      <div class="banner-form-btn d-flex justify-content-end steps-action pt-3">
        <div class="form-btn" @click="changeSteps(2)">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      value1: 1,
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
  },
};
</script>
<style lang=""></style>
