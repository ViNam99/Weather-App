const getgeoCode = require("./Services/googleApi");
const getDarkSky = require("./Services/darkSkyAPI")
const yargs = require("yargs");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Enter your address",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

const address = argv.address;

getgeoCode.getGoogleApi(address, (err, res) => {
  if (err) return console.log(err);
  const {Latitude, Longtitude} = res;
  getDarkSky.getDarkSkyAPI(Latitude, Longtitude, (err , res) => {
      if(err) return console.log(err);
      const {summary, icon , temperature} = res;
      console.log("Summary: " , summary);
      console.log("Icon: " , icon);
      console.log("Temperature: " , temperature);
  })
});
