const { config } = require("../config");
const request = require("request");
// callBack (err , res)
const getDarkSkyAPI = (latitude, Longtitude, callBack) => {
  request.get(
    {
      url: `${config.darkSky.url}/${config.darkSky.key}/${latitude},${Longtitude}`,
      json: true,
    },
    (err, response, body) => {
      if (err) return callBack("Unable to connect to the DarkSky server");
      if (body.code === 400) return callBack("NOT FOUND LOCATION");

      const { summary, icon, temperature } = body.currently;
      callBack(undefined, {
        summary,
        icon,
        temperature,
      });
    }
  );
};

module.exports.getDarkSkyAPI = getDarkSkyAPI;
