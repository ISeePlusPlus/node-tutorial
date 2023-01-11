// npm - global comman, comes with node
// npm --version

// local ependancy - use it only in this particular project
// npm i <packagename>

// global ependency - use it in any project
// npm install -g <packagename>

// package..json - manifest file(store important info about project/package)
// manual approach - create package.json in the root, create proporties manually
// npm init - step by step, press enter to skip
//npm init -y (everything default)

// After installing ependency
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
console.log(items);
const newItems = _.flattenDeep(items);
console.log(newItems);
