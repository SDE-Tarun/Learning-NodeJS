// first step : npm init - it will create a package.json file, it will give information about my package.
// npm i figlet, for example i want to use this package.
// this command will create a node modules folder which contains a sub folder of this package name.
// .gitignore - it will ignore the files/folder which i dont want to push.

var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});