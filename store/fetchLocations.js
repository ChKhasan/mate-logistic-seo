export const actions = {
  async getStates({}, langCode) {
    const res = await this.$axios.$get(`/states`, {
      params: { page_size: 60 },
    });
    return res.results;
  },
  async getCities({}, payload) {
    const res = await this.$axios.$get(`/cities`, {
      params: { ...payload, page_size: 60 },
    });
    return res.results;
  },
  async getCurrentCity({}, payload) {
    const res = await this.$axios.$get(`/city/${payload.currentCity}`);
    return res;
  },
};
