<template lang="html">
  <div class="logistic-block">
    <svg
      width="148"
      height="200"
      viewBox="0 0 148 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.07">
        <path
          d="M50.5822 198L50.5822 139.513C40.1991 137.889 17.1378 128.791 7.95692 105.396C-13.3557 163.883 27.6301 190.418 50.5822 198Z"
          fill="#008AFF"
        />
        <path
          d="M50.5822 139.513L50.5822 198L116.16 198C132.457 198 145.669 184.907 145.669 168.757C145.669 152.606 132.457 139.513 116.16 139.513L50.5822 139.513Z"
          fill="#008AFF"
        />
        <path
          d="M50.5822 198L50.5822 139.513M50.5822 198L116.16 198C132.457 198 145.669 184.907 145.669 168.757C145.669 152.606 132.457 139.513 116.16 139.513L50.5822 139.513M50.5822 198C27.6301 190.418 -13.3557 163.883 7.95692 105.396C17.1378 128.791 40.1991 137.889 50.5822 139.513"
          stroke="#008AFF"
          stroke-width="3.19265"
        />
        <path
          d="M53.0826 127.749L53.0826 70.2711C42.9725 68.6745 24.3488 65.4812 17.9636 28.7592C-20.3483 84.6406 30.7341 126.152 53.0826 127.749Z"
          fill="#008AFF"
        />
        <path
          d="M53.0826 70.2711L53.0826 127.749L116.936 127.749C132.805 127.749 145.669 114.882 145.669 99.0101C145.669 83.138 132.805 70.2711 116.936 70.2711L53.0826 70.2711Z"
          fill="#008AFF"
        />
        <path
          d="M53.0826 127.749L53.0826 70.2711M53.0826 127.749L116.936 127.749C132.805 127.749 145.669 114.882 145.669 99.0101C145.669 83.138 132.805 70.2711 116.936 70.2711L53.0826 70.2711M53.0826 127.749C30.7341 126.152 -20.3483 84.6406 17.9636 28.7592C24.3488 65.4812 42.9725 68.6745 53.0826 70.2711"
          stroke="#008AFF"
          stroke-width="3.19265"
        />
        <rect
          x="27.542"
          y="60.6922"
          width="60.6712"
          height="118.128"
          rx="30.3302"
          transform="rotate(-90 27.542 60.6922)"
          fill="#008AFF"
        />
      </g>
    </svg>

    <div class="logistic-card">
      <h3 v-if="this.title">
        <ICountUp
          :delay="delay"
          :endVal="Number(this.title)"
          :options="options"
          @ready="onReady"
        />+
      </h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<script>
import ICountUp from "vue-countup-v2";

export default {
  props: ["title", "text"],
  data() {
    return {
      delay: 1000,
      endVal: 120500,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
        enableScrollSpy: true, // start animation when target is in view
        scrollSpyDelay: 500, // delay (ms) after target comes into view
        scrollSpyOnce: true,
      },
    };
  },
  methods: {
    onReady: function (instance, CountUp) {
      const that = this;
      instance.update(Number(this.title));
    },
  },
  components: { ICountUp },
};
</script>
<style lang=""></style>
