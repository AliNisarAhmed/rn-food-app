import axios from 'axios';

const baseUrl = 'https://api.yelp.com/v3/businesses';
const apiKey =
  'Bearer 4w2WWqPrhN_-70Gotc_-kW72Y24j38d_bjsDOafUE2eg5Hp6lt9v9BNn0WxO5OFMHVIdm0X8dtNpsdetHOk9m7E_hbyWjEmhaiDG4mWsVpo42nq-iq-OxwRvA8RyXXYx';

const YelpAPI = {
  getSearchResult: async (term, params) => {
    const results = await axios.get(`${baseUrl}/${term}`, {
      headers: {
        Authorization: apiKey,
      },
      params,
    });
    return results;
  },
};

export default YelpAPI;
