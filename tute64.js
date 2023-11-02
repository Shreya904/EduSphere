const fs = require("fs");
// const text = fs.readFileSync("hello.txt","utf-8");

let text = fs.readFileSync("hello.txt","utf-8");
text = text.replace("hii", "rohan");


console.log("the content of the file is :")
console.log(text);


console.log("creating a new file....")
fs.writeFileSync("rohan.txt",text);