import axios from 'axios';

const baseURL = 'https://api.yelp.com/v3/businesses';
const apiKey =
  'Bearer 4w2WWqPrhN_-70Gotc_-kW72Y24j38d_bjsDOafUE2eg5Hp6lt9v9BNn0WxO5OFMHVIdm0X8dtNpsdetHOk9m7E_hbyWjEmhaiDG4mWsVpo42nq-iq-OxwRvA8RyXXYx';

export default axios.create({
  baseURL,
  headers: {
    Authorization: apiKey,
  },
});
