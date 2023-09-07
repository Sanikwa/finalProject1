// const mongoose = require('mongoose');

// // mongoose.connect(process.env.MONGO_URI
// // , {
// //   useNewUrlParser: true,
// //   useCreateIndex: true,
// //   useUnifiedTopology: true
// // });
// // let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@practice.eepjlaq.mongodb.net/Cafe?retryWrites=true&w=majority`;

// let connectionString = process.env.MONGO_URI
// //by default mongoose has a strictQuery that is set to true (meaning we cant ask for info that is not in our schema)
// // https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
// mongoose.set('strictQuery', false);

// //
// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
// //   useCreateIndex: true,
//   useUnifiedTopology: true
// });

// // function will activate once to let us know we are connected
// mongoose.connection.once('open', ()=> {
// });


// // const mongoose = require('mongoose');

// // let connectionString = process.env.MONGO_URI

// // mongoose.connect(
// //     `mongodb+srv://${process.env.MONGOUSERNAME}bornqueen22:<password>@practice.hkmj4o3.mongodb.net/Cafe?retryWrites=true&w=majority`
// // , {
// //   useNewUrlParser: true,
// //   useCreateIndex: true,
// //   useUnifiedTopology: true
// // });

const mongoose = require('mongoose');

// Replace 'your_database_uri' with your actual MongoDB URI
const dbURI = 'mongodb+srv://bornqueen22:Ladybug22@practice.hkmj4o3.mongodb.net/k_store?retryWrites=true&w=majority'

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Listen for the database connection event
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Listen for the database error event
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Listen for the database disconnection event
mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});
