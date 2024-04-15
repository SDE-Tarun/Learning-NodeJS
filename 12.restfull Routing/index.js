const express = require("express");

const app = express();

const path = require("path");

const { v4: uuid } = require("uuid");

const methodOverride = require('method-override');

const port = 3000;

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

const users = [
  {
    id: uuid(),
    firstName: "Tarun",
    lastName: "Kumar",
    role: "Backend Developer",
    email: "tarun@test.com",
  },
];

// To See All Users.
app.get("/users", (req, res) => {
  // res.json({
  //     users
  // })
  res.render("users/user", { users });
});

// To Create A New Year, Will Get Form Here.
app.get("/users/new", (req, res) => {
  res.render("users/new");
});

// Middleware
app.use(express.urlencoded());

// Will Fill The Form Here, and added to /users Route Where We Can See All Users.
app.post("/users", (req, res) => {
  // const {firstName,lastName,role,email} = req.body;
  // console.log(req.body);
  req.body.id = uuid();
  console.log(req.body);
  users.push(req.body);
  console.log(users);
  res.redirect("/users");
});

// Show Particular User Details
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const user = users.find((user) => user.id == userId);
  console.log(user);
  res.render("users/show", { user });
});

// Edit A Particular User Details
app.get('/users/:id/edit', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id == userId);
  res.render('users/update', { user });
})

// Method Override
app.use(methodOverride('_method'))

// Updating Values of Fields
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const user = users.find((user) => user.id == userId);
  console.log(user);
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.role = req.body.role;
  user.email = req.body.email;
  res.redirect("/users");
});

// Delete A Particular User
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const userInd = users.findIndex((user) => {
      return user.id == id;
  })
  users.splice(userInd, 1);
  res.redirect('/users');
})

// app.get('/getAllUser', (req,res)=>{
//     res.json({
//         users
//     });
// })

app.listen(port, () => {
  console.log("Server is running up at", port);
});
