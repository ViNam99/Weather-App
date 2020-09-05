const request = require("request");
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

console.log(argv);

const address = argv.address;

request.get(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`,
    json: true,
  },
  (err, response, body) => {
    if (err && err.code === "ENOTFOUND")
      return console.log("Cannot Connect to maps.googleapis.com");
    if (body.status === "ZERO_RESULTS") return console.log("Address not Found");
    const { formatted_address, geometry } = body.results[0];
    const { lat, lng } = geometry.location;
    console.log(formatted_address);
    console.log(lat);
    console.log(lng);
  }
);
