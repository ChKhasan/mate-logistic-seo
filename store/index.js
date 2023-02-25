export const state = () => ({
  staticInfo: [],
  dataLoader: false,
  translations: {},
  tarifType: 1,
});
export const mutations = {
  getInfo(state, payload) {
    state.staticInfo = payload;
  },
  getTranslations(state, payload) {
    state.translations = payload;
  },
  tarifType(state, payload) {
    state.tarifType = payload;
  },
};
