const path = require("path");

console.log(path.sep);

//removes extra "/" get normalizes path
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

//return base filename
const base = path.basename(filePath);
console.log(base);

//returns an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
