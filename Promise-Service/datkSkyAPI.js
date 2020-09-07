const axios = require("axios");
const { config } = require("../config");

const getDarkSkyAPIPromise = (latitude, Longtitude) => {
  return axios
    .get(
      `${config.darkSky.url}/${config.darkSky.key}/${latitude},${Longtitude}`
    )
    .then((res) => {
      const { summary, icon, temperature } = res.data.currently;
      return Promise.resolve({
        summary,
        icon,
        temperature,
      });
    })
    .catch((err) => {
      if (err && err.code === 400)
        return Promise.reject({
          message: "NOT FOUND LOCATION",
          status: 400,
        });
    });
};
module.exports = {
  getDarkSkyAPIPromise: getDarkSkyAPIPromise,
};
