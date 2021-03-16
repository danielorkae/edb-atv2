const { mergeSort, bubbleSort } = require("./sorts");
const fs = require("fs");

const init = () => {
  const maxSize = 2 ** 20;
  const maxNumber = 10000;

  let unsorted = [];
  let sorted = [];

  //Fill unsorted array
  for (let i = 0; i < maxSize; i++) {
    unsorted.push(Math.floor(Math.random() * maxNumber));
  }

  //Fill sorted array
  for (let i = 0; i < maxSize; i++) {
    sorted.push(i);
  }

  let sortFunctions = {
    "Merge Sort": mergeSort,
    "Bubble Sort": bubbleSort,
  };

  let arrays = {
    unsorted: unsorted,
    sorted: sorted,
  };

  return {
    sortFunctions,
    arrays,
    maxSize,
  };
};

const objToCsv = (obj) => {
  if (obj == null || obj == undefined || !obj.length) {
    return;
  }

  const fields = Object.keys(obj[0]);

  const replacer = (key, value) => (value === null ? "" : value);

  let csv = obj.map((row) => {
    return fields
      .map((fieldName) => {
        return JSON.stringify(row[fieldName], replacer);
      })
      .join(",");
  });

  csv.unshift(fields.join(","));

  csv = csv.join("\r\n");

  return csv;
};

const exportCsv = (csv) => {
  fs.writeFile("./export/output.csv", csv, (x) => x);
};

module.exports = {
  init,
  objToCsv,
  exportCsv,
};
