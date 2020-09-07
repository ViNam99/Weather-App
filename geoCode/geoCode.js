const request = require("request");

const geoCodeAddress = (address, callBack) => {
  let encodedAddress = encodeURIComponent(address);

  request.get(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${encodedAddress}`,
      json: true,
    },
    (err, response, body) => {
      if (err && err.code === "ENOTFOUND")
        return callBack(undefined, "Cannot Connect to maps.googleapis.com");
      if (body.status === "ZERO_RESULTS")
        return callBack(undefined, "Address not Found");

      const { formatted_address, geometry } = body.results[0];
      const { lat, lng } = geometry.location;

      callBack(
        {
          Address: formatted_address,
          Latitude: lat,
          Longtitude: lng,
        },
        undefined
      );
    }
  );
};
module.exports.geoCodeAddress = geoCodeAddress;
