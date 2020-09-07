const axios = require("axios");
const { config } = require("../config");

const getGoogleAPIPromise = (address) => {
  return axios({
    method: "GET",
    url: `${config.google.url}?key=${config.google.key}&address=${address}`,
  })
    .then((res) => {
      if (res.data.status === "ZERO_RESULTS")
        return Promise.reject({
          message: "Address Not Found",
          status: 404,
        });

      const { formatted_address, geometry } = res.data.results[0];
      const { lat, lng } = geometry.location;

      return Promise.resolve({
        Address: formatted_address,
        Latitude: lat,
        Longtitude: lng,
      });
    })
    .catch((err) => {
      if (err && err.code === "ENOTFOUND")
        return Promise.reject({
          message: "Address Not Found",
          status: 500,
        });

      return Promise.reject(err);
    });
};

module.exports = {
  getGoogleAPIPromise: getGoogleAPIPromise,
};
