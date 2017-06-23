const vm = require('vm');
const fs = require('fs');

let makeFunc = () => {
   return process.argv[2] + `.apply(null, ${JSON.stringify(process.argv.splice(3))}` + ');'; 
};

let processFile = (err, fileData) => {
   if (err) throw err;
   vm.runInThisContext(fileData);
   vm.runInThisContext(makeFunc());
};

fs.readFile('./simpleScript.js', processFile);