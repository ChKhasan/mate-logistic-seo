// const locales = "./lang/en-US.js";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  loading: "~/components/loading.vue",
  head: {
    title: "Mate Logistics",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
    script: [{ src: "//code.jivosite.com/widget/dFa3MqED0a", async: true }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  script: ["//code.jivosite.com/widget/dFa3MqED0a"],

  css: ["~/assets/sass/app.scss", "aos/dist/aos.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/antd-ui.js", ssr: false },
    { src: "~plugins/element-ui.js", ssr: false },
    { src: "~plugins/vue-beautiful-chat.js", ssr: false },
    { src: "~plugins/drawer-layout.js", ssr: false },
    { src: "~plugins/currentLang.js", ssr: false },
    { src: "~/plugins/aos", ssr: false },
    { src: "~plugins/vue-js-modal.js", ssr: false },
    { src: "~plugins/v-mask.js", ssr: false },
    { src: "~plugins/vue-toast-notification.js", ssr: false },
  ],
  loadingIndicator: {
    name: "circle",
    color: "#008AFF",
    background: "white",
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "nuxt-lazy-load",
  ],
  axios: {
    credentials: true,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: "https://matelog.abba.uz/api",
  },

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "ru",
        name: "Russian",
      },
      {
        code: "uz",
        name: "uz",
      },
    ],
    defaultLocale: "en",
    differentDomains: false,
    // baseUrl: "http://localhost:3000/",
    strategy: "prefix_except_default",
    sortRoutes: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
    vueI18n: {
      // fallbackLocale: "en",
      messages: {
        en: {
          welcometo: "Welcome",
        },
        fr: {
          welcometo: "Bienvenue",
        },
        es: {
          welcometo: "Bienvenido",
        },
      },
    },
  },
  mode: "spa",
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
    // fix to work with swiperjs 8 - need to run with standalone:true. That can make some troubles.
    vendor: ["aos"],
    standalone: true,
    extend(config, ctx) {
      // fix to work with swiperjs 8 add needed deps. you can get them from error when doing nuxt generate
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
};
