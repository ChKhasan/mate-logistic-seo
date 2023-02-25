<template lang="html">
  <div class="header" ref="navScroll">
    <div class="header-top">
      <div class="container_xl header-top-grid">
        <div class="d-flex align-items-center header-text-animate">
          <div class="anim-left"></div>
          <p class="slider-text">
            {{ $store.state.translations["main.nav_top_text"] }}
          </p>
          <div class="anim-right"></div>
        </div>
        <div class="header-links">
          <nuxt-link :to="localePath('/about-us')" class="header-top-link">
            {{ $store.state.translations["main.careers"] }}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.5" cy="5.5" r="5.5" fill="#008AFF" />
            </svg>
          </nuxt-link>
          <a
            class="header-top-link"
            :href="`tel:${$store.state.staticInfo.nbm}`"
            >{{ $store.state.translations["main.contact_us"] }}
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.5" cy="5.5" r="5.5" fill="#008AFF" />
            </svg>
          </a>
          <span class="header-top-btn" @click="show('modal_support_chat')"
            ><span>{{
              $store.state.translations["main.check_my_order"]
            }}</span></span
          >
        </div>
      </div>
    </div>
    <div class="header-navbar">
      <div class="container_xl header-navbar-items">
        <nuxt-link class="header-navbar-logo" :to="localePath('/')">
          <img src="../../assets/svg/image 2.svg" alt="" />
        </nuxt-link>

        <div class="header-navbar-nav">
          <ul>
            <li>
              <span class="is-active" @click="scrollElement('home-banner')">{{
                $store.state.translations["main.nav_howItWorks"]
              }}</span>
            </li>
            <li>
              <span @click="scrollElement('howWeWork')">{{
                $store.state.translations["main.nav_howWeWork"]
              }}</span>
            </li>
            <li>
              <span @click="scrollElement('ourServices')">{{
                $store.state.translations["main.nav_ourServices"]
              }}</span>
            </li>
            <li>
              <span @click="scrollElement('coverageMap')">{{
                $store.state.translations["main.nav_coverageMap"]
              }}</span>
            </li>
            <li>
              <span @click="scrollElement('newAndEvents')">{{
                $store.state.translations["main.nav_newsAndEvents"]
              }}</span>
            </li>
          </ul>
        </div>
        <div class="header-navbar-btn">
          <!-- <el-dropdown
            trigger="click"
            class="nav_lang"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              Рус<i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <el-dropdown-menu slot="dropdown" class="nav_drop">
              <el-dropdown-item
                v-for="locale in availableLocales"
                :key="locale.code"
                :command="locale.code"
                >{{ locale.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown> -->
          <div>
            <div class="leave-comment" @click="show('modal_leave_weak')">
              <span>{{
                $store.state.translations["main.submit_application"]
              }}</span>
            </div>
          </div>
        </div>
        <div class="mobile-menu" @click="drawerOpen">
          <img src="../../assets/svg/hamburger-menu.svg" alt="" />
        </div>
      </div>
      <modal name="modal_header" width="590px" height="auto">
        <div class="modal_container">
          <div class="modal_header d-flex justify-content-between">
            <h5>{{ $store.state.translations["modal.fastContact_title"] }}</h5>
            <span @click="hide('modal_header')"
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
            <!-- <p class="fasting-contact-text">
              {{ $store.state.translations["modal.fastContact_text"] }}
            </p> -->
            <div class="modal-tariff-info-grid">
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
                >{{ $store.state.translations["modal.fastContact_info1"] }}
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
                >{{ $store.state.translations["modal.fastContact_info2"] }}
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
                >{{ $store.state.translations["modal.fastContact_info3"] }}
              </p>
            </div>
            <el-form
              label-position="top"
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
              action=""
            >
              <div class="form-block modal-form-block">
                <el-form-item prop="nbm" label-position="top">
                  <the-mask
                    type="text"
                    class="w-100"
                    v-model="ruleForm.nbm"
                    placeholder="Phone number"
                    :mask="['(###) ### ####', '(###) ### ####']"
                  />
                </el-form-item>
              </div>
              <div class="modal-form-btn">
                <div class="form-btn" @click="submitForm('ruleForm')">
                  {{ $store.state.translations["modal.fastContact_btn"] }}
                </div>
              </div>
            </el-form>
          </div>
        </div></modal
      >
      <modal name="modal_success" width="590px" height="auto">
        <div class="modal_container">
          <div class="modal_header d-flex justify-content-between">
            <h5>
              {{ $store.state.translations["modal.fastContact_title"] }}
            </h5>
            <span @click="hide('modal_success')"
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
          <div class="modal_body d-flex flex-column align-items-center">
            <span class="success_icon"
              ><img src="../../assets/svg/succees icon.svg" alt=""
            /></span>
            <div
              class="d-flex flex-column align-items-center mt-2 mt-lg-4 mb-4"
            >
              <h5 class="success_contact">
                {{ $store.state.translations["modal.fastSuccess_text"] }}
              </h5>
              <p class="fasting-contact-text text-center mt-1">
                {{ $store.state.translations["modal.fastSuccess_info"] }}
              </p>
            </div>

            <div class="modal-form-btn w-100">
              <div class="form-btn" @click="hide('modal_success')">
                {{ $store.state.translations["modal.fastContact_btn"] }}
              </div>
            </div>
          </div>
        </div></modal
      >
      <modal name="modal_app_success" width="590px" height="auto">
        <div class="modal_container">
          <div class="modal_header d-flex justify-content-between">
            <h5>{{ $store.state.translations["modal.calculator_title"] }}</h5>
            <span></span>
          </div>
          <div class="modal_body d-flex flex-column align-items-center">
            <span class="success_icon"
              ><img src="../../assets/svg/succees icon.svg" alt=""
            /></span>
            <div
              class="d-flex flex-column align-items-center mt-2 mt-lg-4 mb-4"
            >
              <h5 class="success_contact">
                {{ $store.state.translations["modal.calculator_text"] }}
              </h5>
              <p class="fasting-contact-text text-center mt-1">
                {{ $store.state.translations["modal.calculator_info"] }}
              </p>
            </div>

            <div class="modal-form-btn w-100">
              <div class="form-btn" @click="backToHome">
                {{ $store.state.translations["modal.calculator_toBackBtn"] }}
              </div>
            </div>
          </div>
        </div></modal
      >
      <modal name="modal_support_chat" width="590px" height="auto">
        <div class="modal_container">
          <div
            class="modal_header modal_support_chat d-flex justify-content-between"
          >
            <div class="modal_support_profile">
              <img src="../../assets/images/Ellipse 102.png" alt="" />
              <div class="d-flex flex-column">
                <h5 class="profile_name">
                  Nargiza Ahmedova
                </h5>
                <span class="profile_work">
                  Meta logistics asistant
                </span>
              </div>
            </div>
            <span @click="hide('modal_support_chat')"
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
          <div class="modal_support_body d-flex flex-column align-items-center">
            <div class="modal_text_area">
              <div class="asistant_text">
                <p>Hey, How are you?</p>
              </div>
              <div class="asistant_text">
                <p>
                  I was asking for your New ask we are going to host a party.
                </p>
              </div>

              <div class="user_text">
                <p>
                  I am fine, How about you?
                </p>
              </div>
              <div class="user_text">
                <p>
                  Yayy, Great I would love to join the party!
                </p>
              </div>
              <div class="asistant_text">
                <p>Hey, How are you?</p>
              </div>
              <div class="asistant_text">
                <p>
                  I was asking for your New ask we are going to host a party.
                </p>
              </div>

              <div class="user_text">
                <p>
                  I am fine, How about you?
                </p>
              </div>
              <div class="user_text">
                <p>
                  Yayy, Great I would love to join the party!
                </p>
              </div>
            </div>

            <div class="modal_support_send w-100">
              <input type="text" placeholder="Xabaringiz..." />
              <div class="modal_support_btn">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.08189 6.27235C1.15554 6.26073 1.23008 6.25537 1.30465 6.25631H14.0033L13.7264 6.13117C13.4557 6.00669 13.2095 5.83728 12.9987 5.63059L9.43773 2.17036C8.96873 1.73533 8.88993 1.0355 9.25098 0.512206C9.6712 -0.0454281 10.4771 -0.166505 11.051 0.241817C11.0973 0.274823 11.1414 0.310802 11.1828 0.349518L17.6223 6.60672C18.1255 7.09517 18.126 7.88753 17.6233 8.37653C17.623 8.37684 17.6226 8.37719 17.6223 8.3775L11.1828 14.6347C10.6792 15.1227 9.86374 15.1216 9.36146 14.6322C9.32194 14.5937 9.28503 14.5527 9.25098 14.5096C8.88993 13.9863 8.96873 13.2864 9.43773 12.8514L12.9923 9.38491C13.1813 9.20111 13.3985 9.04698 13.6363 8.92814L14.0226 8.75919H1.37553C0.717617 8.78293 0.1404 8.33636 0.0168018 7.70798C-0.0970554 7.02575 0.379787 6.38302 1.08189 6.27235Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div></div
      ></modal>
      <ModalSubmitApp />
    </div>
  </div>
</template>
<script>
import TextCarousel from "./TextCarousel.vue";
import FlipCountdown from "vue2-flip-countdown";
import Drawer from "vue-drawer";
import moment from "moment";
import ModalSubmitApp from "../modals/modalSubmitApp.vue";
const fmt = "YYYY-MM-DD HH:mm:ss";
export default {
  props: {
    drawerOpen: {
      type: Function,
    },
  },
  data() {
    return {
      drawerShow: false,
      deadline2: moment().add(1, "h").format(fmt),
      discountTimer: 60,
      ruleForm: {
        nbm: "",
      },
      rules: {
        nbm: [
          {
            required: true,
            message: "Please enter your number",
            trigger: "change",
          },
          {
            min: 10,
            max: 10,
            message: "Length should be 10",
            trigger: "change",
          },
        ],
      },
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
    discountFunc() {
      return JSON.parse(localStorage.getItem("discount"));
    },
  },
  methods: {
    moment,
    backToHome() {
      this.hide("modal_app_success");
      this.$router.push("/");
    },
    sendNomer() {
      this.$modal.hide(`modal_header`);
      (this.deadline2 = moment().add(1, "h").format(fmt)),
        this.$modal.show(`modal_success`);
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
    timeElapsedHandler(e) {},
    handleCommand(command) {
      this.__GET_STATIC_INFORMATIONS(command);
      this.$i18n.setLocale(command);
    },
    drawerToggle() {
      this.drawerShow = !this.drawerShow;
    },

    async __GET_TRANSLATIONS(command) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      const translations = await this.$store.dispatch(
        "fetchTranslations/getTranslations",
        command
      );
      await this.$store.commit("getTranslations", translations);
      await this.$nuxt.$loading.finish();
    },
    async __GET_STATIC_INFORMATIONS() {
      const info = await this.$store.dispatch(
        "fetchStaticInformations/getStaticInformations",
        this.$i18n.locale
      );
      await this.$store.commit("getInfo", info);
    },
    async __POST_CONTACT_NUMBER() {
      this.app_create = await this.$store.dispatch(
        "fetchLead/getShortAppCreate",
        {
          data: this.ruleForm,
          currentLang: this.$i18n.locale,
        }
      );
      if (this.app_create.status == "На рассмотрении") {
        this.hide("modal_header");
        this.show("modal_success");
      } else {
        this.$toast.open({
          message: `${this.app_create.status}`,
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "top-right",
        });
      }
    },
    async submitForm(ruleForm) {
      this.$refs[ruleForm].validate(async (valid) => {
        if (valid) {
          this.__POST_CONTACT_NUMBER();
        } else {
          return false;
        }
      });
    },
    scrollElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView();
    },
  },

  mounted() {
    this.__GET_STATIC_INFORMATIONS();
    this.__GET_TRANSLATIONS();
    var header = this.$refs.navScroll;
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 300) {
        header.style.top = "0px";
        header.style.marginTop = "0";
        this.navStyle = true;
      } else {
        header.style.top = "0px";
        header.style.marginTop = "0";
        this.navStyle = true;
      }
      this.lastScrollTop = scrollTop;
    });
  },
  watch: {
    discountFunc(val) {
      if (val) {
        this.timer();
      }
    },
  },
  components: { TextCarousel, Drawer, FlipCountdown, ModalSubmitApp },
};
</script>
<style lang="scss">
.ant-calendar-picker-container {
  z-index: 2006 !important;
}
.header {
  transition: all 0.3s !important;
  height: auto;
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 2006 !important;
  top: 0;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 24px 54px -16px rgba(0, 70, 147, 0.12);
  backdrop-filter: blur(25px);
}
.leave-comment {
  position: relative;
  background: #fff;
  cursor: pointer;
  span {
    transition: 0.3s;
  }
  &::before {
    content: "";
    position: absolute;
    overflow: hidden;
    border-radius: 20px;
    left: -1px;
    top: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    z-index: -1;
    background: linear-gradient(90deg, #008aff 0%, #005ba8 100%);
  }
  &::after {
    content: "";
    overflow: hidden;
    background: linear-gradient(90deg, #008aff 0%, #005ba8 100%);
    height: 0;
    width: 0;
    position: absolute;
    bottom: 50%;
    top: 50%;
    left: 50%;
    right: 50%;
    transition: 0.3s;
    border-radius: 20px;
  }
  &:hover {
    &::after {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
    span {
      position: relative;
      z-index: 10;
      color: #fff;
    }
  }
}
.el-drawer__wrapper {
  z-index: 2009 !important;
}
</style>
