export const actions = {
  async getArticles({}, langCode) {
    const res = await this.$axios.$get(`/articles`, {
      headers: {
        Language: langCode,
      },
    });
    return res.results;
  },
  async getArticlesInner({}, payload) {
    const res = await this.$axios.$get(`/articles/${payload.paramsId}`, {
      headers: {
        Language: payload.langCode,
      },
    });
    return res;
  },
};
