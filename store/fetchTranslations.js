export const actions = {
  async getTranslations({}, langCode) {
    const res = await this.$axios.$get(`/translations`, {
      headers: {
        Language: "en",
      },
    });
    return res;
  },
};
