const express = require("express");

const app = express();

const port = 3000;

const path = require("path");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

// When request goes to / route it will show my home.ejs file
app.get("/", (req, res) => {
  res.render("home");
});

// Created an array to store my users for now it is empty at the time of creation
const users = [];

// to see all users for the first time visit it will show empty array
app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

// body parser
app.use(express.urlencoded());

// app.get('/users/new', (req,res)=>{
//     // using query we are getting username and password value in an object of req.query
//     const {username,password} = req.query;
//     // req.query : {username: 'Tarun', password: 123};
//     console.log(req.query);
//     // To using it, we need a middleware, i have used it in line no. 29
//     console.log("form data------->", req.body);

//     // for the first time when we request to /users/new it will show Invalid data message.
//     if(!username || !password){
//         return res.send('Invalid Data');
//     }

//     // After doing query, we will get an object through req.query so we have to push this object in my users array
//     users.push(req.query);
//     // After pushing it will show "user successfully created message".
//     res.send('User Successfully Created');
// })

// When user fills the form it and click on submit it will route to /users/new and whatever data io fill in form it will create an object through req.body
app.post("/users/new", (req, res) => {
  console.log(req.body);
  res.send("Hello from users/new route");
  // if i want to see that user create through post method then i need to push the req.body object in my users array
  // users.push(req.body);
});

app.listen(port, () => {
  console.log("Server is running up at", port);
});
