<template lang="html">
  <div class="about">
    <div class="container_xl postion-relative">
      <div>
        <nuxt-link class="service-back-btn" to="/"
          ><svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0383 5.43603C14.9729 5.42597 14.9066 5.42132 14.8403 5.42214H3.55262L3.79875 5.31368C4.03934 5.2058 4.25821 5.05897 4.44556 4.87985L7.61091 1.88098C8.02779 1.50395 8.09784 0.897436 7.7769 0.443911C7.40338 -0.039371 6.68706 -0.144304 6.17691 0.209574C6.1357 0.23818 6.09653 0.269362 6.05972 0.302916L0.335755 5.72582C-0.111572 6.14915 -0.111966 6.83586 0.334861 7.25965C0.335147 7.25993 0.335469 7.26023 0.335755 7.2605L6.05972 12.6834C6.5074 13.1064 7.23223 13.1054 7.6787 12.6813C7.71383 12.6479 7.74664 12.6124 7.7769 12.5749C8.09784 12.1214 8.02779 11.5149 7.61091 11.1379L4.45128 8.13359C4.28332 7.97429 4.09021 7.84072 3.87889 7.73772L3.53545 7.5913H14.7773C15.3621 7.61187 15.8752 7.22485 15.9851 6.68025C16.0863 6.08899 15.6624 5.53195 15.0383 5.43603Z"
              fill="#005BA8"
            />
          </svg>
          Back
        </nuxt-link>
      </div>
      <div class="about-us-shadow"></div>
      <div class="about-container">
        <div class="service-title">
          <div class="d-flex flex-column">
            <h1>{{ $store.state.translations["about_us.title"] }}</h1>
          </div>
        </div>
        <div class="about-grid-container">
          <div>
            <div class="about-video">
              <div class="video_play_block">
                <img @click="videoPlay" v-if="!video" :src="vidPlay" alt="" />
                <img @click="videoPlay" v-else :src="vidStop" alt="" />
              </div>
              <img src="../assets/images/Exclude.png" alt="" />
              <!-- <svg
                width="100%"
                height="400"
                viewBox="0 0 559 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M559 157.669V0L0 -2.44347e-05L-1.77468e-05 406L559 406V320.107C558.944 367.365 520.617 405.657 473.346 405.657C426.041 405.657 387.693 367.309 387.693 320.004V157.772C387.693 110.467 426.041 72.1186 473.346 72.1186C520.617 72.1186 558.944 110.411 559 157.669ZM165.14 137.173C169.727 107.856 195.415 42.7419 261.471 16.8195C96.3326 -43.3573 21.4088 72.3675 0.00195312 137.173L0.00196122 322.333C0.00196323 368.351 36.9694 405.655 82.5711 405.655C128.173 405.655 165.14 368.351 165.14 322.333V137.173ZM198.357 144.233C202.865 81.1317 320.076 -63.1011 477.859 45.0737C374.173 63.1026 365.156 115.687 360.648 144.233V324.524C360.648 369.332 324.318 405.656 279.503 405.656C234.687 405.656 198.357 369.332 198.357 324.524L198.357 144.233Z"
                  fill="white"
                />
              </svg> -->

              <video
                ref="video"
                autoplay="autoplay"
                loop="loop"
                playsinline
                muted="muted"
                :src="aboutUs.video"
              ></video>
            </div>
          </div>
          <div class="about-desc">
            <h1>{{ aboutUs.title_one }}</h1>
            <p v-html="aboutUs.text_first"></p>
            <div class="about-us-numbers">
              <div class="about-number-info">
                <h2 v-if="this.$store.state.translations['main.mlc_card1_title']">
                  <ICountUp
                    :delay="delay"
                    :endVal="
                      Number($store.state.translations['main.mlc_card1_title'])
                    "
                    :options="options"
                    @ready="onReady"
                  />
                </h2>
                <h6>{{ $store.state.translations["main.mlc_card1_text"] }}</h6>
              </div>
              <div class="about-number-info">
                <h2 v-if="this.$store.state.translations['main.mlc_card2_title']">
                  <ICountUp
                    :delay="delay"
                    :endVal="
                      Number($store.state.translations['main.mlc_card2_title'])
                    "
                    :options="options"
                    @ready="onReady1"
                  />
                </h2>
                <h6>{{ $store.state.translations["main.mlc_card2_text"] }}</h6>
              </div>
              <div class="about-number-info">
                <h2 v-if="this.$store.state.translations['main.mlc_card3_title']">
                  <ICountUp
                    :delay="delay"
                    :endVal="
                      Number($store.state.translations['main.mlc_card3_title'])
                    "
                    :options="options"
                    @ready="onReady2"
                  />
                </h2>
                <h6>{{ $store.state.translations["main.mlc_card3_text"] }}</h6>
              </div>
            </div>
          </div>
          <div class="about-desc">
            <h1>{{ aboutUs.title_second }}</h1>
            <p v-html="aboutUs.text_second"></p>
          </div>
          <div class="employee-card-grid">
            <EmployeeCard />
            <EmployeeCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EmployeeCard from "../components/cards/EmployeeCard.vue";
import ICountUp from "vue-countup-v2";
export default {
  head: {
    title: "About Us",
  },
  data() {
    return {
      aboutUs: {},
      video: true,
      vidPlay: require("../assets/svg/about_play.svg"),
      vidStop: require("../assets/svg/video_pause.svg"),
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
  computed: {
    localChange() {
      return this.$i18n.locale;
    },
  },
  mounted() {
    this.GET_ABOUT_US();
  },
  methods: {
    onReady: function (instance, CountUp) {
      instance.update(
        Number(this.$store.state.translations["main.mlc_card1_title"])
      );
    },
    onReady1: function (instance, CountUp) {
      instance.update(
        Number(this.$store.state.translations["main.mlc_card2_title"])
      );
    },
    onReady2: function (instance, CountUp) {
      instance.update(
        Number(this.$store.state.translations["main.mlc_card3_title"])
      );
    },
    videoPlay() {
      if (!this.$refs.video.paused) {
        this.$refs.video.pause();
        this.video = false;
      } else {
        this.$refs.video.play();
        this.video = true;
      }
    },
    async GET_ABOUT_US() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      this.aboutUs = await this.$store.dispatch(
        "fetchAboutUs/getAboutUs",
        this.$i18n.locale
      );
      await this.$nuxt.$loading.finish();
    },
  },
  components: { EmployeeCard, ICountUp },
};
</script>
<style lang=""></style>
