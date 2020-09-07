const asyncSum = (a, b) => {
  return new Promise((resolve, reject) => {
    const checkTypeNum = typeof a !== "number" || typeof b !== "number";
    setTimeout(() => {
      if (checkTypeNum) return reject("Syntax Error");

      resolve(a + b);
    }, 1000);
  });
};

//1 + 2 + 3 + 4 + 5

// asyncSum(1, 2)
//   .then((res) => {
//     console.log(res);
//     asyncSum(res, 3).then((res) => {
//       console.log(res);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

asyncSum(1, 2)
  .then((res) => {
    console.log(res);
    return asyncSum(res, 3);
  })
  .then((res) => {
    console.log(res);
    return asyncSum(res, "4");
  })
  .then((res) => {
    console.log(res);
    return asyncSum(res, 5);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
