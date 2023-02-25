export const actions = {
  async getAboutUs({}, langCode) {
    const res = await this.$axios.$get(`/about_us`, {
      headers: {
        Language: langCode,
      },
    });
    return res;
  },
};
