const fs = require("fs");
const path = require("path");

let data = "This is my data";

const filePath = path.join(__dirname, "data", "data.txt");
console.log(filePath);

// ek promise tabhi return hoga jb vo kisi function ke andar hoga isliye writeData function banaya
// Yeh function tabhi chlega jab mein is writeData funcion ko call krdunga
// location mein mera filePath ki value capture hogi
// Ab yeh writeData function mera ek promise return krega jisme ya toh resolve hoga ya reject.
// Iske andar mein apna kaam karwaunga ki file write kre toh fs.writeFile(filepath, encoding, callback function) lega
// ab isme agr promise resolve hoga toh resolve state chlega jisme mere paas location milegi.
function writeData(location) {
  return new Promise((resolve, reject) => {
    fs.writeFile(location, data, () => {
      resolve(location);
    });
  });
}

// Ab yaha mein apne data ko read kr rha hu agr promise resolve hoga toh resolve hoga data aur fr vo chlega uske .then block mein
function readData(location) {
    return new Promise((resolve, reject) => {
        fs.readFile(location, 'utf-8', (err, data)=>{
            resolve(data);
        })
    })
}

// Yaha mein writeData ko call kr rha hu jisme kaha se data uthana hai vo bhejhna padega
// Ab resolve mein jo bhi tha vo uske .then block mein chlega.
// Jab mera write krde data tab bolunga ki jao mere data ko read kro location se.
writeData(filePath).then((location) => {
  console.log("File has successfully written");
  return readData(location);
})
// yaha par resolve hua data readData function se
.then((data)=>{
    console.log('File has successfully read as', data);

})
