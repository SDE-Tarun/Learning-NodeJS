const mongoose = require("mongoose");

// we are using this model here so we have to require.
const UserModel = require("./models/User");

// mongoose ke through apna database connect krna padega so we use connect method
mongoose
  .connect("mongodb://localhost:27017/learning-mongoose")
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// 1. CREATE USERS

// For single user
// yeh function mera new user create krke dega database ke andar
async function createUser(name, age, city) {
  //     // creates a new user object using the provided name, age, and city. The UserModel is assumed to be a model/schema for users which we have require.
  //     // database mein yaha se new user ka object banega jo database mein save hone ke baad as a document dikhega.
  // create a new user instance using the constructor
  const user = new UserModel({ name, age, city });
  //     // saves the newly created user object to the database.
  await user.save();
  console.log("User created successfully");

  // OTHER WAY -
  // const user = await UserModel.create({name, email, contact})
  // console.log('User created successfully!');
}

// For single user
// createUser('Tarun', 24, 'New Delhi');

// For bulk user
// Yeh function ek array accept kr rha hai jisme saare users hai
async function createUserInBulk(users) {
  // WAIT KRO JAB TAK APKE USERMODEL KE ANDAR EK METHOD HAI CREATE USEY SAARE USERS NA BAN JAYE TAB TAK AAGE MAT JAO
  await UserModel.create(users);
  console.log("User created successfully");
}

const users = [
  { name: "Tarun", age: 24, city: "New Delhi" },
  { name: "Bhaskar", age: 23, city: "Mumbai" },
  { name: "Tarun", age: 18, city: "NCR" },
  { name: "Bhaskar", age: 26, city: "Banglore" },
];

// createUserInBulk(users);

// 2. GET USERS
async function getUsers() {
  // WAIT KRO JAB TAK USERMODEL MEIN SE APKO VO OBJECT NA MILE JISKA NAME TARUN HAI, JESE HI MIL JAYE MTLB PROMISE RESOLVE HOJAYE VO USER PRINT KRDO.
  // find - all users
  const user = await UserModel.find({ name: "Tarun" });
  // findOne-  single user only
  //   const user = await UserModel.findOne({ name: "Tarun" });

  console.log(user);
}

// getUsers();

// 3. UPDATE USERS
// filter: Ek object jisko filter krna hai
// data: Ek object jisme new data hai jise update krna hai.
async function updateUsers(filter, data) {
  // Wait kro jab tak single user update na hojaye based on the provided filter and data.
  // updateOne - single user update
  //   const user = await UserModel.updateOne(filter, data);
  // updateMany - multiple user update
  const user = await UserModel.updateMany(filter, data);
  console.log(user);
}

// Finally, the updateUsers function is called with the filter {name: "Tarun"} and data {"city: 'Hyderabad"}. This initiates the process of updating users matching the provided filter with the new data.
// updateUsers({ name: "Tarun" }, { city: "Dehradun" });

// 4. DELETE USERS

async function deleteUsers(filter) {
  // filter : Ek object ki kis user ko delete krna hai
  // Wait kro jab tak single user delete na hojaye based on the provided filter
  // deleteOne - single user delete
  // const response = await UserModel.deleteOne(filter);
  // deleteMany - multiple user delete
  const response = await UserModel.deleteMany(filter);
  console.log(response);
}

// deleteUsers({name: "Bhaskar"});

// 5. findById
// Pehle id batani padegi jisko update krna vo db mein milegi
var id = "66288751340938fc9f6fb47a";
async function getUserById() {
  // find krega vo db ki id wala user
  const user = await UserModel.findById(id);
  // id wala user dikha dega
  console.log(user);
}

// getUserById();

// 6. findByIdAndUpdate
// Pehle id batani padegi jisko update krna vo db mein milegi
var id = "66288751340938fc9f6fb47a";
async function getUserByIdAndUpdate() {
  // findByIdAndUpdate(db wali id bhejho, {update ky krna hai}, dikhana kya hai pehle wala toh before agr baad wala toh after)
  const user = await UserModel.findByIdAndUpdate(id, {city:'Manali'}, { returnDocument: 'before' });
  console.log(user);
}

// getUserByIdAndUpdate();

// 7. findByIdAndDelete
var id = "66288751340938fc9f6fb47a";
async function getUserByIdAndDelete() {
  // findByIdAndUpdate(db wali id bhejho)
  const user = await UserModel.findByIdAndDelete(id);
  console.log(user);
}

// getUserByIdAndDelete();











