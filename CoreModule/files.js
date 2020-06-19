var fs = require("fs");

//First agurment is the file name, then the message and then if the error exists it throws up the error message
fs.writeFile("message.txt", "Hello World!", function (e) {
  if (e) return console.log("Error: " + e);
  console.log("Writing is done !");
});
