const vm = require('vm');
const fs = require('fs');

global.executionResult = '';

let makeFunc = () => {
   return process.argv[2] + `.apply(null, ${JSON.stringify(process.argv.splice(3))}` + ');'; 
};

let executeContent = (err, fileData) => {
   if (err) throw err;
   vm.runInThisContext(fileData);
   vm.runInThisContext('executionResult = ' + makeFunc());
   console.log(executionResult);
};

fs.readFile('./breadCrumbMaker.js', executeContent);