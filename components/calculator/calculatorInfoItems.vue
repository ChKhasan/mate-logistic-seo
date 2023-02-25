<template lang="html">
  <div class="calculator-info-items">
    <span
      >{{ name }}
      <a-tooltip placement="top" color="red" v-if="info">
        <template slot="title" color="red">
          <span color="red" class="hover-info">{{ info }}</span>
        </template>
        <a-button
          ><svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.65625 5V3.65625H6.34375V5H7.65625ZM7.65625 10.3438V6.34375H6.34375V10.3438H7.65625ZM2.28125 2.3125C3.59375 1 5.16667 0.34375 7 0.34375C8.83333 0.34375 10.3958 1 11.6875 2.3125C13 3.60417 13.6562 5.16667 13.6562 7C13.6562 8.83333 13 10.4062 11.6875 11.7188C10.3958 13.0104 8.83333 13.6562 7 13.6562C5.16667 13.6562 3.59375 13.0104 2.28125 11.7188C0.989583 10.4062 0.34375 8.83333 0.34375 7C0.34375 5.16667 0.989583 3.60417 2.28125 2.3125Z"
              fill="#9A999B"
            />
          </svg>
        </a-button> </a-tooltip
    ></span>
    <a-radio-group v-if="checkbox" v-model="value" @change="onChange">
      <div class="items-checkbox">
        <a-radio :value="index" v-for="(radio, index) in checkbox">
          <p>{{ radio }}</p>
        </a-radio>
      </div>
    </a-radio-group>
    <div class="edit_input" v-if="editValue">
      <input type="text" />
      <span @click="editInformation(false)"
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
    <p v-if="!checkbox && !editValue">{{ option }}</p>
    <div class="edit-btn" @click="editInformation(true)" v-if="!editValue">
      <svg
        v-if="edit"
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6123 2.6875L11.3936 3.90625L8.89355 1.40625L10.1123 0.1875C10.2373 0.0625 10.3936 0 10.5811 0C10.7686 0 10.9248 0.0625 11.0498 0.1875L12.6123 1.75C12.7373 1.875 12.7998 2.03125 12.7998 2.21875C12.7998 2.40625 12.7373 2.5625 12.6123 2.6875ZM0.799805 9.5L8.1748 2.125L10.6748 4.625L3.2998 12H0.799805V9.5Z"
          fill="#9A999B"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    editInformation: {
      type: Function,
      required: true,
    },
    checkbox: {
      type: Array,
    },
    editValue: {
      type: Boolean,
    },
    edit: {
      type: Boolean,
    },
    option: {
      type: String,
    },
    name: {
      type: String,
    },
    info: {
      type: String,
    },
  },
  data() {
    return {
      value: 1,
      value1: 1,
      editShow: false,
    };
  },
  methods: {
    onChange(e) {
    },
    editInfo(val) {
      this.editShow = val;
    },
    CloseInput() {
      if (this.editShow) {
        this.editShow = false;
      }
    },
  },
};
</script>
<style lang="scss">

</style>
