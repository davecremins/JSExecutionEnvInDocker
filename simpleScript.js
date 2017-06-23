let printToLog = () => {
   process.argv.slice(2).forEach(function(element) {
      console.log(element);
   });
};