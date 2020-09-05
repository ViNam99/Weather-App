let x;

const queryData = (callBack) => {
  setTimeout(() => {
    x = 10;
    console.log("Query DB successfully");
    callBack();
  }, 2000);
};

const printData = () => {
  console.log(x);
};

queryData(() => {
  printData();
});

// queryData(printData)
