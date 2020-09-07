const geoCode = require("./geoCode/geoCode");
const getWeather = require("./darkSky/darkSky");
const yargs = require("yargs");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Enter your Address",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

// console.log(argv);

geoCode.geoCodeAddress(argv.address, (res, err) => {
  if (err) return console.log(err);

  getWeather.getWeather(res.Latitude, res.Longtitude, (res, err) => {
    if (err) return console.log(err);
    console.log(res);
  });
});
