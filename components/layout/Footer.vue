<template lang="html">
  <div class="footer">
    <div class="footer-logo-img">
      <img src="../../assets/svg/Mask group.svg" alt="" />
    </div>
    <div class="container_xl d-flex flex-column footer-body">
      <div class="footer-grid">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="../../assets/svg/Footer logo.svg" alt="" />
          </div>
          <div class="contact-info contact-web">
            <a :href="`tel:${$store.state.staticInfo.nbm}`"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00501 11.9709C8.75501 12.6901 9.63417 13.2751 10.6058 13.6901L11.0383 13.8743L12.3675 12.5243C12.6975 12.1893 13.175 12.0443 13.6358 12.1409L16.8558 12.8151C17.4008 12.9309 17.79 13.4118 17.79 13.9684V16.2868C17.79 17.1159 17.1183 17.7876 16.2892 17.7876H15.5767C12.2983 17.7876 9.06334 16.7018 6.61667 14.5201C6.41501 14.3409 6.21917 14.1551 6.02834 13.9651L6.05917 13.9959C5.86834 13.8051 5.68334 13.6093 5.50417 13.4076C3.32167 10.9618 2.23584 7.72677 2.23584 4.44844V3.73594C2.23584 2.90677 2.90751 2.23511 3.73667 2.23511H6.05501C6.61167 2.23511 7.09251 2.62427 7.20834 3.16927L7.88334 6.38927C7.97917 6.84927 7.83501 7.32761 7.50001 7.65761L6.15001 8.98677L6.33417 9.41927C6.74917 10.3901 7.28501 11.2209 8.00501 11.9709Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $store.state.staticInfo.nbm }}</a
            >
            <a href="">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99832 17.7767C9.99832 17.7767 3.52832 13.8892 3.52832 8.70335C3.52832 5.12335 6.42999 2.22168 10.01 2.22168C13.59 2.22168 16.4917 5.12335 16.4917 8.70335C16.4917 13.8892 9.99832 17.7767 9.99832 17.7767Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.01 11.2967C11.4418 11.2967 12.6025 10.136 12.6025 8.70418C12.6025 7.27238 11.4418 6.11168 10.01 6.11168C8.57819 6.11168 7.41749 7.27238 7.41749 8.70418C7.41749 10.136 8.57819 11.2967 10.01 11.2967Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $store.state.staticInfo.adres }}</a
            >
            <a :href="`mailto:${$store.state.staticInfo.email}`"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.55914 5.7008L9.99997 12.0775L17.4408 5.7008M15.2775 15.5541H4.72247C3.34164 15.5541 2.22247 14.435 2.22247 13.0541V6.9458C2.22247 5.56497 3.34164 4.4458 4.72247 4.4458H15.2783C16.6591 4.4458 17.7783 5.56497 17.7783 6.9458V13.055C17.7775 14.435 16.6583 15.5541 15.2775 15.5541Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $store.state.staticInfo.email }}</a
            >
          </div>
          <div class="brand-icons">
            <a target="_blank" v-if="$store.state.staticInfo.instagram" :href="$store.state.staticInfo.instagram"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0104 6.98988L17.0124 6.99116M10.7555 21.246H13.2445C16.0447 21.246 17.4449 21.246 18.5144 20.7011C19.4552 20.2217 20.2201 19.4568 20.6995 18.516C21.2445 17.4464 21.2445 16.0463 21.2445 13.246V10.7571C21.2445 7.95682 21.2445 6.55669 20.6995 5.48713C20.2201 4.54632 19.4552 3.78141 18.5144 3.30205C17.4449 2.75708 16.0447 2.75708 13.2445 2.75708H10.7555C7.95523 2.75708 6.5551 2.75708 5.48554 3.30205C4.54473 3.78141 3.77983 4.54632 3.30046 5.48713C2.75549 6.55669 2.75549 7.95682 2.75549 10.7571V13.246C2.75549 16.0463 2.75549 17.4464 3.30046 18.516C3.77983 19.4568 4.54473 20.2217 5.48554 20.7011C6.5551 21.246 7.95523 21.246 10.7555 21.246ZM15.665 12.0019C15.665 14.025 14.025 15.665 12.0019 15.665C9.97884 15.665 8.33882 14.025 8.33882 12.0019C8.33882 9.97882 9.97884 8.3388 12.0019 8.3388C14.025 8.3388 15.665 9.97882 15.665 12.0019Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a target="_blank" v-if="$store.state.staticInfo.facebook" :href="$store.state.staticInfo.facebook"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.002 21.2854C17.1301 21.2854 21.2874 17.1286 21.2874 12.001C21.2874 6.87333 17.1301 2.71655 12.002 2.71655C6.87377 2.71655 2.71655 6.87333 2.71655 12.001C2.71655 17.1286 6.87377 21.2854 12.002 21.2854ZM12.002 21.2854V13.2199M15.9806 7.62934L15.8433 7.58922C13.923 7.02819 12.002 8.46828 12.002 10.4688V13.2199M12.002 13.2199H15.3056M12.002 13.2199H9.30521"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a target="_blank" v-if="$store.state.staticInfo.linked_in" :href="$store.state.staticInfo.linked_in"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.27843 16.7856V10.7747M11.5141 16.7856V15.1039M11.5141 15.1039V10.7747M11.5141 15.1039C11.5141 14.0447 12.1322 10.7747 14.2876 10.7747C15.6341 10.7747 16.7256 11.8662 16.7256 13.2127V16.7856M7.27466 7.21533L7.27674 7.21661M18.332 21.332H5.66797C4.01097 21.332 2.66797 19.989 2.66797 18.332V5.66797C2.66797 4.01097 4.01097 2.66797 5.66797 2.66797H18.332C19.989 2.66797 21.332 4.01097 21.332 5.66797V18.332C21.332 19.989 19.989 21.332 18.332 21.332Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a target="_blank" v-if="$store.state.staticInfo.twitter" :href="$store.state.staticInfo.twitter"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0808 8.21701C19.0808 13.9166 14.8805 19.5111 8.99593 19.5111C5.84521 19.5111 2.69489 17.812 2.69489 17.812C3.98966 17.812 6.19639 17.302 8.09256 15.8713C7.14114 15.5547 5.57144 14.6735 4.05682 13.572M19.0808 8.21701C19.0808 7.44027 18.8431 6.71904 18.4366 6.12206M19.0808 8.21701L21.3114 7.28651M2.69489 4.49072C5.51038 8.17768 10.2019 9.40941 11.5909 9.19685C11.6155 8.881 11.6282 8.55449 11.6282 8.21701C11.6282 6.15904 13.2965 4.49072 15.3545 4.49072C16.6357 4.49072 17.7659 5.13735 18.4366 6.12206M18.4366 6.12206C18.876 6.21331 19.9416 6.01478 20.6887 4.49072M3.51579 9.3953C4.55792 10.2557 4.86998 10.543 5.98496 11.0754"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-menu">
          <div class="menu-title">
            <h3>Home</h3>
          </div>
          <ul>
            <li>
              <nuxt-link :to="localePath('/about-us')">About us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Shipping</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Quick order</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Shipping</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-menu">
          <div class="menu-title">
            <h3>Options</h3>
          </div>
          <ul>
            <li>
              <nuxt-link to="/">Online Shipping</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Our number</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Check my order</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">About my order</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="contact-info contact-mobile">
          <a href=""
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00501 11.9709C8.75501 12.6901 9.63417 13.2751 10.6058 13.6901L11.0383 13.8743L12.3675 12.5243C12.6975 12.1893 13.175 12.0443 13.6358 12.1409L16.8558 12.8151C17.4008 12.9309 17.79 13.4118 17.79 13.9684V16.2868C17.79 17.1159 17.1183 17.7876 16.2892 17.7876H15.5767C12.2983 17.7876 9.06334 16.7018 6.61667 14.5201C6.41501 14.3409 6.21917 14.1551 6.02834 13.9651L6.05917 13.9959C5.86834 13.8051 5.68334 13.6093 5.50417 13.4076C3.32167 10.9618 2.23584 7.72677 2.23584 4.44844V3.73594C2.23584 2.90677 2.90751 2.23511 3.73667 2.23511H6.05501C6.61167 2.23511 7.09251 2.62427 7.20834 3.16927L7.88334 6.38927C7.97917 6.84927 7.83501 7.32761 7.50001 7.65761L6.15001 8.98677L6.33417 9.41927C6.74917 10.3901 7.28501 11.2209 8.00501 11.9709Z"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $store.state.staticInfo.nbm }}</a
          >
          <a href="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99832 17.7767C9.99832 17.7767 3.52832 13.8892 3.52832 8.70335C3.52832 5.12335 6.42999 2.22168 10.01 2.22168C13.59 2.22168 16.4917 5.12335 16.4917 8.70335C16.4917 13.8892 9.99832 17.7767 9.99832 17.7767Z"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.01 11.2967C11.4418 11.2967 12.6025 10.136 12.6025 8.70418C12.6025 7.27238 11.4418 6.11168 10.01 6.11168C8.57819 6.11168 7.41749 7.27238 7.41749 8.70418C7.41749 10.136 8.57819 11.2967 10.01 11.2967Z"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $store.state.staticInfo.adres }}</a
          >
          <a href=""
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.55914 5.7008L9.99997 12.0775L17.4408 5.7008M15.2775 15.5541H4.72247C3.34164 15.5541 2.22247 14.435 2.22247 13.0541V6.9458C2.22247 5.56497 3.34164 4.4458 4.72247 4.4458H15.2783C16.6591 4.4458 17.7783 5.56497 17.7783 6.9458V13.055C17.7775 14.435 16.6583 15.5541 15.2775 15.5541Z"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $store.state.staticInfo.email }}</a
          >
        </div>

        <div class="footer-map" v-html="$store.state.staticInfo.map"></div>
      </div>
      <div class="footer-hr"></div>
      <div class="footer-bottom d-flex justify-content-between">
        <p>{{ $store.state.translations["main.footer_allRightsReserved"] }}</p>
        <p>{{ $store.state.translations["main.footer_made_in"] }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  computed: {
    localChange() {
      return this.$i18n.locale;
    },
  },
  mounted() {},
  watch: {
    localChange(newVal, oldVal) {
      if (newVal != oldVal) {
      }
    },
  },
};
</script>
<style lang=""></style>
