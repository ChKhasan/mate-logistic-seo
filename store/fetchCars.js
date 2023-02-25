export const actions = {
  async getCarMakes({}, langCode) {
    const res = await this.$axios.$get(`/car_makes`, {
      headers: {
        Language: langCode,
      },
    });
    return res.results;
  },
  async getCarsModels({}, payload) {
    const res = await this.$axios.$get(`/car_models`, {
      params: { make: payload.paramsId },
      headers: {
        Language: payload.langCode,
      },
    });
    return res.results;
  },
};
