const fs = require('fs');
const path = require('path');

const filePath1 = path.join(__dirname, 'data', 'input1.txt');
console.log(filePath1);

const filePath2 = path.join(__dirname, 'data', 'input2.txt');
console.log(filePath2);

const filePath3 = path.join(__dirname, 'data', 'output.txt');
console.log(filePath3);

function readData(location1) {
    return new Promise((resolve, reject) => {
        fs.readFile(location1, 'utf-8', (err, data1)=>{
            resolve(data1);
        })
    })
}

function readData(location2) {
    return new Promise((resolve, reject) => {
        fs.readFile(location2, 'utf-8', (err, data2)=>{
            resolve(data2);
        })
    })
}

function writeData(location3, finalData){
    return new Promise((resolve, reject) => {
        fs.writeFile(location3, finalData, ()=>{
            resolve(finalData);
        })
    })
}

readData(filePath1).then((data1)=>{
    console.log('File has successfully read from input1.txt');
    arr1 = data1.split('\n');
    console.log(arr1);
    return readData(filePath2);
})
.then((data2)=>{
    console.log('File has successfully read from input2.txt');
    arr2 = data2.split('\n');
    console.log(arr2);
    arr3 = [...arr1, ...arr2];
    console.log(arr3);

    // Sort
    arr4 = arr3.sort((a, b)=>{
        return a - b;
    })
    console.log(arr4);

    // covert back to string to send original data
    let finalData = arr4.join('\n');
    console.log(finalData);
    // Ab mujhe yaha sath mein data bhejhna padega ki isko write krde
    return writeData(filePath3, finalData);
})
.then((finalData)=>{
    console.log('Data has successfully written in output.txt');
    console.log(finalData);
})







