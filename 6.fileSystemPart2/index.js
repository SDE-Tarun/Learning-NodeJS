const fs = require("fs");

const path = require("path");

const filePath1 = path.join(__dirname, "data", "input1.txt");

const filePath2 = path.join(__dirname, "data", "input2.txt");

const filePath3 = path.join(__dirname, "data", "output.txt");

fs.readFile(filePath1, "utf-8", (err, data1) => {
  if (err) {
    console.log(err);
  }

  // Data1 will come in string so we need to insert it in an array 1 by splitting \n
  const arr1 = data1.split("\n");
  console.log(arr1);

  // When we get data1, then we will read file 2 data
  fs.readFile(filePath2, "utf-8", (err, data2) => {
    if (err) {
      console.log(err);
    }
    // Data2 will come in string so we need to insert it in an array 2 by splitting \n
    const arr2 = data2.split("\n");
    console.log(arr2);

    // We need to merge the data 1 and data 2 and insert it in an array 3
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);

    // Logic -
    // We need to sort the data
    const data = arr3.sort((a, b) => a - b);
    console.log(data);

    // We again need to convert data in string as for writing it needs data as a string otherwise gives type error.
    const finalData = data.join("\n");
    console.log(finalData);

    fs.writeFile(filePath3, finalData, () => {
      console.log("Data has been successfully update");
    });
  });
});
