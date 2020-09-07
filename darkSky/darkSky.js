const request = require("request");

const getWeather = (latitude, Longtitude, callBack) => {
    
  request.get(
    {
      url: `https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${latitude},${Longtitude}?fbclid=IwAR1y_ViOalGnDCLnImMOCgNl9Arge3WLP5RDicoHSYRgCFlCEJXBA3zs2Ug`,
      json: true,
    },
    (err, response, body) => {
      if (err)
        return callBack(undefined, "Unable to connect to the DarkSky server");
      if (body.code === 400) return callBack(undefined, "NOT FOUND LOCATION");

      const { summary, icon, temperature } = body.currently;
      callBack({
        Sumary: summary,
        Icon: icon,
        Temperature: temperature,
      }, undefined);
    }
  );
};

module.exports.getWeather = getWeather;
