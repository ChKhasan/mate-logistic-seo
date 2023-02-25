export const actions = {
  async getGoogleApi({}, langCode) {
    const res = await this.$axios.$get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ3TIXdn2LrjgRcUdQ-oBRfns&key=AIzaSyC8ONOB7USjW_j9U9EDdk9w0OmRACDjUzM`
    );
    return res;
  },
  async getReviews({}, langCode) {
    const res = await this.$axios.$get(`/reviews`);
    return res.results;
  },
};
