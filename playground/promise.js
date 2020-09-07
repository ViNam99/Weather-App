const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Hey, it Worked");
    reject("It did not work");
  }, 1000);
});

somePromise
  .then((message) => {
    console.log("Success: " + message);
  })
  .catch((err) => {
    console.log("Failure: " + err);
  });
