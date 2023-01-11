//CommonJS, every file is moudle(by default)
// Modules - Encapsulated code (only share minimum)

const names = require(`./4-names`);
const sayHi = require("./5-utils");
const alternetiveata = require("./6-alternative-flavor");
require("./7-mind-grandate");

console.log(alternetiveata);

sayHi("Susan");
sayHi(names.yigal);
sayHi(names.ari);
