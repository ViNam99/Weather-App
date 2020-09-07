const request = require("request");
const { config } = require("../config");
// callBack (err , res)
const getGoogleApi = (address, callBack) => {
  let yourAddress = address;

  request.get(
    {
      url: `${config.google.url}?key=${config.google.key}&address=${yourAddress}`,
      json: true,
    },
    (err, response, body) => {
      if (err && err.code === "ENOTFOUND")
        return callBack("Cannot Connect to maps.googleapis.com");
      if (body.status === "ZERO_RESULTS") return callBack("Address not Found");
      const { formatted_address, geometry } = body.results[0];
      const { lat, lng } = geometry.location;
      callBack(undefined, {
        Address: formatted_address,
        Latitude: lat,
        Longtitude: lng,
      });
    }
  );
};

module.exports.getGoogleApi = getGoogleApi;
