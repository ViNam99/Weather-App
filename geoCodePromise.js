const axios = require("axios");
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

const urlGeoCode = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`;

axios({
  method: "GET",
  url: urlGeoCode,
})
  .then((res) => {
    if (res.data.status === "ZERO_RESULTS")
      return console.log("Address not Found");

    const { formatted_address, geometry } = res.data.results[0];
    return ({ lat, lng } = geometry.location);
  })
  .then((res) => {
    const { lat, lng } = res;
    axios({
      
    })
  })
  .catch((err) => {
    if (err && err.code)
      return console.log("Cannot Connect to maps.googleapis.com");
  });
