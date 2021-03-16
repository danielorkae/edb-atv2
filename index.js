const { init, objToCsv, exportCsv } = require("./utils.js");

let output = [];
let timeStart;
let timeEnd;

const vars = init();

for (let cut = 2; cut <= vars.maxSize; cut += cut) {
  console.log("Array length: " + cut);
  for (type in vars.arrays) {
    for (sortFunction in vars.sortFunctions) {
      timeStart = Date.now();
      vars.sortFunctions[sortFunction](vars.arrays[type].slice(0, cut));
      timeEnd = Date.now();

      output.push({
        algorithm: sortFunction,
        size: cut,
        duration: timeEnd - timeStart,
        arrayType: type,
      });
    }
  }
}

csv = objToCsv(output);
exportCsv(csv);
