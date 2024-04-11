const express = require("express");

const app = express();

const port = 3000;

const path = require("path");

// line no. 9 tells we have created a folder name views and sending its path
app.set("views", path.join(__dirname, "views"));
// line no. 10 tells the templating engine we are using is ejs
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // res.send('Welcome To Home Page');
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/home", (req, res) => {
  let heading = "This is heading";
  let para = "This is para";
  res.render("home", { heading, para });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log("Server is running up at http://localhost:", port);
});
