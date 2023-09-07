// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//    email: {
//     type: String,
//     required: true,
//     unique: true
//    },
//    name: {
//     type: String,
//     required: true
//    },
//    password: {
//     type: String,
//     minLength: 3,
//     required: true
//    },
// },
// {
//     timestamps: true
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;
const mongoose = require('mongoose');

// Define a schema for a user
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Add more fields as needed
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
