<template lang="html">
  <div class="news-card">
    <div class="news-card-img" @click="$router.push(`/inner-news/${article.id}`)">
      <img :src="article.image" alt="" />
    </div>
    <div class="news-card-body">
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
      <nuxt-link
        :to="localePath(`/inner-news/${article.id}`)"
        class="news-card-title"
        >{{ article.title }}</nuxt-link
      >
      <p class="news-card-text">
        {{ article.subtitle }}
      </p>
      <nuxt-link
        :to="localePath(`/inner-news/${article.id}`)"
        class="news-card-btn"
      >
        Read more
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.91998 4.64172L13.2783 10.0001L7.91998 15.3584"
            stroke="#024E90"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["article"],
};
</script>
<style lang=""></style>
