export const actions = {
  async getCheckEmail({}, payload) {
    try {
      const res = await this.$axios.$get(
        `https://api.hunter.io/v2/email-verifier?email=${payload}&api_key=81c723a7bdbbbb143a364d60199dd7fbdb4f1773`
      );
      return res.data;
    } catch (e) {
      return e.response;
    }
  },
};
