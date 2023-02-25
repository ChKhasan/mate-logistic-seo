export const actions = {
  async getServices({}, langCode) {
    const res = await this.$axios.$get(`/services`, {
      headers: {
        Language: langCode,
      },
    });
    return res.results;
  },
  async getServicesInner({}, payload) {
    const res = await this.$axios.$get(`/services/${payload.paramsId}`, {
      headers: {
        Language: payload.langCode,
      },
    });
    return res;
  },
};
