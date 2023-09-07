// require('dotenv').config()

// const express = require('express')
// const mongoose = require('mongoose')
// // const workoutRoutes = require('./routes/workouts')
// // const userRoutes = require('./routes/user')
// const cors= require ('cors');

// // express app
// const app = express()

// // middleware
// app.use(express.json())

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })
// app.use(cors())

// // routes
// // app.use('/api/workouts', workoutRoutes);
// // app.use('/api/user', userRoutes);

// // connect to db
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     // listen for requests
//     app.listen(process.env.PORT, () => {
//       console.log('connected to db & listening on port', process.env.PORT)
//     })
//     mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });

//   })
//   .catch((error) => {
//     console.log(error)
//   })

const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const bcrypt = require('bcrypt');
const cors = require('cors');

// require passport and session for user loggin
const passport = require('passport');
const session = require('express-session');
const initializePassport = require('./config/passport-config');

//database
require('dotenv').config();
require('./config/database'); //connect to our database (code should be after the require dotenv)

//use passport
initializePassport(
    passport,
    // passport tells us that they want a function that will return the correct user given an email
    async email => {
        let user = User.findOne({email: email})
        return user;
    },
    async id => {
        let user = User.findById(id);
        return user;
    },
);
app.post('/users/signup',async (req, res) => {

    let hashedPassword = await bcrypt.hash(req.body.password, 10)

    // use User model to place user in the database
    let userFromCollection = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword
    })

    // sending user response after creation or login
    res.json("user created")
});


app.put('/users/login', async (req, res, next) => {
    console.log(req.body);
    // passport authentication
    passport.authenticate("local", (err, user, message) => {
        console.log(message);
        if (err) throw err;
        if (!user) {
            res.json({
                message: "login failed",
                user: false
            })
        } else {
            // delete user.password
            req.logIn(user, err => {
                if (err) throw err;
                res.json({
                    message: "successfully authenticated",
                    // remove user
                })
            })
        }
    })(req, res, next);
})

//create Catch-All route using (/*)
// The catch all route is necessary to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html')); 	
    });
    
    //listening
     app.listen(3000, () => {
        console.log('listening on port 3000');
     });