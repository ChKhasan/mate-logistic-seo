export const actions = {
  async getStaticInformations({}, langCode) {
    const res = await this.$axios.$get(`/static_infos`, {
      headers: {
        Language: langCode,
      },
    });
    return res;
  },
};
