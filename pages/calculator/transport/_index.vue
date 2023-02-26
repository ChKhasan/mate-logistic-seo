<template lang="html">
  <div class="calculator-form">
    <h1 class="calculator-title"> {{ $store.state.translations["calculator.vehicleDelivery"] }}</h1>
    <div class="">
      <el-form
        label-position="top"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
        action=""
      >
        <div class="form-block">
          <a-radio-group v-model="ruleForm.ship_type" @change="onChange">
            <div class="calculator-grid">
              <div class="checkbox-input">
                <a-radio value="An individual">
                  {{ $store.state.translations["calculator.placeH_individual"] }}
                </a-radio>
              </div>
              <div class="checkbox-input">
                <a-radio value="General">
                  {{ $store.state.translations["calculator.placeH_general"] }}
                </a-radio>
              </div>
            </div>
          </a-radio-group>
        </div>

        <div class="form-block calculator-grid">
          <div class="d-flex flex-column">
            <label for="inputTo"> {{ $store.state.translations["calculator.label_name"] }}</label>
            <el-form-item prop="first_name" label-position="top">
              <input
                type="text"
                class="w-100"
                id="inputFrom"
                v-model="ruleForm.first_name"
                :placeholder="$store.state.translations['calculator.placeH_name']"
              />
              <div class="el-form-item__error" v-if="userNameRequired">
                First and last name required.
              </div>
            </el-form-item>
          </div>
          <div class="d-flex flex-column">
            <label for="inputTo">{{$store.state.translations['calculator.label_email']}}</label>
            <el-form-item prop="email" label-position="top">
              <input
                type="text"
                class="w-100"
                v-model="ruleForm.email"
                id="inputFrom"
                :placeholder="$store.state.translations['calculator.placeH_email']"
              />
            </el-form-item>
          </div>
        </div>

        <div class="form-block">
          <label for="inputTo">{{$store.state.translations['calculator.label_phoneNumber']}}</label>
          <div class="calculator-grid">
            <div
              class="phone-number"
              v-for="item in ruleForm.nbms"
              :key="item.id"
            >
              <the-mask
                class="w-100"
                type="text"
                placeholder="(224) 300-5367"
                :mask="['(###) ###-####', '(###) ###-####']"
                v-model="item.value"
                label-position="top"
              />

              <img
                @click="deleteNumberInput(item.id)"
                src="~/assets/svg/x.svg"
                alt=""
              />
            </div>
            <div class="phone-number">
              <div class="add-number-btn" v-on:click="addNumberInput">
                {{$store.state.translations['calculator.btn_addNumber']}}
              </div>
            </div>
          </div>
        </div>

        <div
          class="banner-form-btn d-flex justify-content-end steps-action pt-3"
        >
          <div class="form-btn" type="submit" @click="submitForm('ruleForm')">
            {{ $store.state.translations["main.form_btn_nextStage"] }}<svg
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
            {{ $store.state.translations["calculator.text_contact"]
          }}
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
              <h4> {{ $store.state.translations["calculator.contact_title"]
          }}</h4>
            <p> {{ $store.state.translations["calculator.contact_text"]
          }}</p>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  layout: "calculator",
  head: {
    title: "Calculator Transport",
  },
  data() {
    return {
      value: "An individual",
      value1: 1,
      userNameRequired: false,
      inputX: require("~/assets/svg/x.svg"),
      app_create: {},
      rules: {
        nbm: [
          {
            min: 10,
            max: 10,
            message: "Length should be 10",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "incorrect email",
            trigger: "blur",
          },
        ],
        first_name: [
          {
            required: true,
            message: "incorrect email",
            trigger: "blur",
          },
        ],
      },

      ruleForm: {
        tarif: null,
        email: "",
        ship_type: "An individual",
        first_name: "",
        last_name: "",
        car_year: "2000",
        nbms: [
          {
            id: 1,
            value: "",
          },
        ],
      },
    };
  },
  props: {
    changeSteps: {
      type: Function,
    },
  },
  methods: {
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
    async submitForm(ruleForm) {
      const newNmbs = this.ruleForm.nbms.map((item) => {
        return item.value;
      });

      const newUserFullName = this.ruleForm.first_name.split(" ");
      this.$refs[ruleForm].validate(async (valid) => {
        if (valid) {
          if (this.ruleForm.first_name.includes(" ") && process.browser) {
            const step = JSON.parse(localStorage.getItem("app_create"));
            this.ruleForm = {
              ...this.ruleForm,
              ...step,
              tarif: 1,
              nbms: newNmbs,
              first_name: newUserFullName[0],
              last_name: newUserFullName[1],
            };
            console.log(this.ruleForm);
            this.__POST_APP();
          } else {
            this.userNameRequired = true;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    async __POST_APP() {
      this.app_create = await this.$store.dispatch("fetchLead/getAppCreate", {
        data: this.ruleForm,
        currentLang: this.$i18n.locale,
      });
      if (this.app_create.status == 500) {
        this.$toast.open({
          message: this.app_create.error,
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "top-right",
        });
      } else {
        this.show("modal_app_success");
      }
    },
    onChange(e) {
      console.log("radio checked", e.target.value);
    },
    addNumberInput() {
      this.ruleForm.nbms.push({ id: this.ruleForm.nbms.at(-1).id + 1 });
    },
    deleteNumberInput(id) {
      if (this.ruleForm.nbms.length > 1) {
        this.ruleForm.nbms = this.ruleForm.nbms.filter((item) => item.id != id);
      }
    },
  },
  watch: {
    "ruleForm.first_name"(val) {
      if (val.includes(" ")) {
        this.userNameRequired = false;
      }
    },
  },
};
</script>
<style lang=""></style>
