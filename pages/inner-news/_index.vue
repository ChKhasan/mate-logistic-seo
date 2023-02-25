<template lang="html">
  <div class="bg-color">
    <div class="inner-news">
      <div class="container_xl position-relative">
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
           {{$store.state.translations['calculator.toBack']}}
          </nuxt-link>
        </div>
        <div class="inner-news-shadow"></div>
        <div class="inner-news-container">
          <div class="inner-news-title">
            <div class="d-flex flex-column">
              <h1>{{ article.title }}</h1>
              <p>
                {{ article.subtitle }}
              </p>
            </div>
            <div>
              <div class="news-card-date">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66664 3.11263H7.77756M9.33331 3.11263H10.6942C11.6608 3.11263 12.4442 3.89605 12.4442 4.86264V10.6942C12.4442 11.6608 11.6608 12.4442 10.6942 12.4442H3.30572C2.33914 12.4442 1.55573 11.6608 1.55573 10.6942V4.86264C1.55573 3.89605 2.33914 3.11263 3.30572 3.11263M1.55573 7.00055H10.1109M4.66664 4.66722V1.55688M9.33331 4.66722V1.55688"
                    stroke="#B6C2CD"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {{ article.created_date }}
              </div>
            </div>
          </div>

          <div class="inner-news-banner">
            <img :src="article.image" alt="" />
            <!-- <img src="../../assets/images/inner-news-banner.png" alt="" /> -->
          </div>
          <div class="inner-news-desc" v-html="article.body">
            <!-- <p>
              Sasco Global provides professional and comprehensive Air Freight
              services committed to the safe, reliable and cost effective
              service of your consignment. Our dedicated network of integrated
              air and ground services, combine to ensure timely customs
              clearance and delivery for your cargo every time. Freight
              forwarding is our strength in the market and we are specialist in
              freight movement of luxurious and general items.Sasco Global
              provides professional and comprehensive Air Freight services
              committed to the safe, reliable and cost effective delivery of
              your consignment. Our dedicated network of integrated air and
              ground services, combine to ensure timely customs clearance and
              delivery for your cargo every time.
            </p>
            <p>
              Freight forwarding is our strength in the market and we are
              specialist in freight movement of luxurious and general
              items.Sasco Global provides professional and comprehensive Air
              Freight services committed to the safe, reliable and cost
              effective delivery of your consignment. Our dedicated network of
              integrated air and ground services, combine to ensure timely
              customs clearance and delivery for your cargo every time. Freight
              forwarding is our strength in the market and we are specialist in
              freight movement of luxurious and general items.Sasco Global
              provides professional and comprehensive Air Freight services
              committed to the safe, reliable and cost effective delivery of
              your consignment.
            </p> -->
          </div>
        </div>
        <LastNews :articles="articles"> <TitleSmall title="News" /></LastNews>
      </div>
    </div>
  </div>
</template>
<script>
import NewsCard from "../../components/cards/NewsCard.vue";
import ServiceApplicationCard from "../../components/cards/ServiceApplicationCard.vue";
import LastNews from "../../components/LastNews.vue";
import TitleSmall from "../../components/TitleSmall.vue";

export default {
  head: {
    title: "Inner News",
  },
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
      ],
      value: "",
      article: {},
      articles: [],
    };
  },

  mounted() {
    this.__GET_ARTICLE();
    this.__GET_ARTICLES();
  },
  methods: {
    async __GET_ARTICLE() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      this.article = await this.$store.dispatch(
        "fetchArticles/getArticlesInner",
        {
          paramsId: this.$route.params.index,
          langCode: this.$i18n.locale,
        }
      );
      this.$nuxt.$loading.finish();
    },
    async __GET_ARTICLES() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      this.articles = await this.$store.dispatch(
        "fetchArticles/getArticles",
        this.$i18n.locale
      );
      this.$nuxt.$loading.finish();
    },
  },
  components: { NewsCard, ServiceApplicationCard, LastNews, TitleSmall },
};
</script>
<style lang="scss">
.bg-color {
  background: #f5f5f5;
}
</style>
