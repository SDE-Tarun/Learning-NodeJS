const fs = require('fs');

const path = require('path');

let data = 'This is my updated data';

// fs gives an object having different function inside it which we can use -
// console.log(fs);

// path gives an object having different function inside it which we can use -
// console.log(path);

// Function defination - [Function: readFile]
// console.log(fs.readFile);

// Function defination - [Function: join]
// console.log(path.join);

// It gives the exact folder location where we actually are - 
// console.log(__dirname);

// It will give the path to the system or locate the file which we want to use for read or write from the folder.
// console.log(path.join(__dirname, 'data', 'data.txt'));
const filePath = path.join(__dirname, 'data', 'data.txt');
console.log(filePath);

// Data here in callback function we are passing is the data which we are storing in filePath.
fs.readFile(filePath, 'utf-8', (err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

// data here is dummy data i.e let data = 'This is my updated newly fresh data'; 
// writeFile(path of file, data which we want to update store it in variable, (callback function))
// First storing data then updating then reading data.
fs.writeFile(filePath, data, ()=>{
    console.log('File Written Successfully!!');
});


















 



























