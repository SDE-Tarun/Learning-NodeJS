const express = require("express");

const app = express();

const port = 3000;

const data = require("./data/data");

app.get("/", (req, res) => {
  res.send("Welcome To Home Page");
});

// PARAMS - we are requesting at this /products route and asking for a particular id
//  which we will be sending to the browser as value
// req.params is a object in which we are binding a key named as id and storing it in id variable
// console.log(req.params); - it will give an object containing an key which we are binding key and its value we are sending with /:id

// app.get('/products/:id', (req,res)=>{
//     const id = req.params.id
//     console.log(req.params);
//     // const {id} = req.params;
//     console.log(id);

//     const product = data.filter(product => product.id == id);
//     res.send({product});
// })

// QUERY -
app.get("/products", (req, res) => {
  console.log(req.query);
  const id = req.query.id;
  // const {id} = req.params;
  console.log(id);

  const product = data.filter((product) => product.id == id);
  res.send({ product });
});

app.get("/products", (req, res) => {
  res.send({ data });
});

app.listen(port, () => {
  console.log("Server is running up at port", port);
});
