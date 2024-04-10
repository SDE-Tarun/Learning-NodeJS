const express = require('express');

const app = express();

const port = 3000;

const path = require('path');

// res.send() - Allows us to send a message or data as an object
app.get('/', (req,res)=>{
    res.send('Welcome to Home Page');
})

// __dirname - It gives absolute directory address
// process.cwd() - It gives relative directory address
// res.sendFile() - Allows us to show page by giving its path.
app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
})

app.listen(port, (req,res)=>{
    console.log('Server is running up at port', port);
})