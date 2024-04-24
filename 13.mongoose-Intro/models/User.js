const mongoose = require('mongoose');

// Mera document kesa dikhega toh vo create krna padega jise hum schema kehte hai
// Schema - Model or structure or blueprint
const userSchema = mongoose.Schema({
    // name, age, city, createdAt all comes under one unit of document
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Yeh model ko use krna hai apne index.js file mein isliye yaha se export krna padega.
// model('Name of model file', name of schema)
module.exports = mongoose.model('User', userSchema);
