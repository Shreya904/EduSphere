        //   Synchronous or Blocking( // -line by line execution)
       
        //   ASynchronous or nonBlocking( // -line by line not guranteed)
        const fs = require("fs");
fs.readFile("hello.txt", "utf-8", (err, data)=>{
    console.log(err, data);
});
console.log("This is a message");
          