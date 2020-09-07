const newPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Success");
      reject("Failure")
    }, 1000);
  });
};

newPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
