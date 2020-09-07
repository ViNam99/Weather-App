// 1 + 2 + 3 + 4

//Call Back Hell
// const totalSum = (a, b, callBack) => {
//   setTimeout(() => {
//     if (typeof a !== "number" || typeof b !== "number")
//       return callBack(undefined, "Syntax Error");
//     callBack(
//       {
//         sum: a + b,
//       },
//       undefined
//     );
//   }, 1000);
// };

// totalSum(1, 2, (res, err) => {
//   if (err) return console.log(err);
//   console.log(res.sum);
//   totalSum(res.sum, 3, (res, err) => {
//     if (err) return console.log(err);
//     console.log(res.sum);
//     totalSum(res.sum, 4, (res, err) => {
//       if (err) return console.log(err);
//       console.log(res.sum);
//     });
//   });
// });

const totalSumPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number")
        return reject("Syntax Error");

      resolve({
        sum: a + b,
      });
    }, 1000);
  });
};

totalSumPromise(1, 2)
  .then((res) => {
    console.log(res.sum);
    return totalSumPromise(res.sum, 3);
  })
  .then((res) => {
    console.log(res.sum);
    return totalSumPromise(res.sum, 4);
  })
  .then((res) => {
    console.log(res.sum);
  })
  .catch((err) => {
    console.log(err);
  });
