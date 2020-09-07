const { getGoogleAPIPromise } = require("./Promise-Service/googleAPI");
const { getDarkSkyAPIPromise } = require("./Promise-Service/datkSkyAPI");
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

getGoogleAPIPromise(address)
  .then((res) => {
    const { Latitude, Longtitude } = res;
    return getDarkSkyAPIPromise(Latitude, Longtitude);
  })
  .then((res) => {
    const { summary, icon, temperature } = res;
    console.log("Summary: ", summary);
    console.log("Icon: ", icon);
    console.log("Temperature: ", temperature);
  })
  .catch((err) => {
    console.log(err);
  });
