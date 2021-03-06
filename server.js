// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Requiring our Driver and Student models
var Driver = require("./models/Driver.js");
var Traveler = require("./models/Traveler.js");


port = process.env.PORT || 3000;

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Make public a static dir
app.use(express.static("public"));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Database configuration with mongoose
mongoose.connect("mongodb://heroku_c1hjq4m5:5m5td9hivulrf0ljjekag4tnmg@ds155934.mlab.com:55934/heroku_c1hjq4m5");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});


//config passport
var passport = require('passport');
var expressSession = require('express-session');

app.use(expressSession({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


var flash = require('connect-flash');
app.use(flash());


// Initialize Passport
var initPassport = require('./passport/passport');
initPassport(passport);


var isAuthenticated = function(req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated()) {
        return next();
    }
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}


// Routes
// ======

app.post('/passengerSignup', passport.authenticate('TravelerSignup', {
    successRedirect: '/passengerProfile',
    failureRedirect: '/mainPage',
    failureFlash: true
}));

app.post('/passengerLogin', passport.authenticate('TravelerLogin', {
    successRedirect: '/passDrive',
    failureRedirect: '/mainPage',
    failureFlash: true
}));

app.post('/driverSignup', passport.authenticate('DriverSignup', {
    successRedirect: '/driverProfile',
    failureRedirect: '/mainPage',
    failureFlash: true
}));

app.post('/driverLogin', passport.authenticate('DriverLogin', {
    successRedirect: '/passDrive',
    failureRedirect: '/mainPage',
    failureFlash: true
}));

app.get("/passDrive", isAuthenticated, function(req, res) {
    res.sendFile(__dirname + "/public/users.html");
});

app.get("/passengerPage", isAuthenticated, function(req, res) {
    res.sendFile(__dirname + "/public/users.html");
});


app.get("/driverPage", isAuthenticated,  isAuthenticated, function(req, res) {
    res.sendFile(__dirname + "/public/users.html");
});


app.get("/mainPage", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/passengerProfile", isAuthenticated,  function(req, res) {
    res.sendFile(__dirname + "/public/passengerProfile.html");
});

app.get("/driverProfile", isAuthenticated,  function(req,res){
    res.sendFile(__dirname + "/public/driverProfile.html");
});

//passengers to be picked-pending pickup requests
app.get("/passengerData", isAuthenticated, function(req, res) {
    Traveler.find({pickupStatus: false}, function(error, doc) {
        if (error) {
            console.log(error);
        } else {
            res.json(doc);
        }
    });
});

//passengers already picked by a driver- confirmed pickup requests
app.get("/pickedPassenger", isAuthenticated, function(req, res) {
    Traveler.find({driver_id: req.user._id }, function(error, doc) {
        if (error) {
            console.log(error);
        } else {
            res.json(doc);
        }
    });
});




// This will get the drivers listed
app.get("/drivers", function(req, res) {
    // Grab every doc in the Students array
    Driver.find({}, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});

// This will get the drivers listed
app.get("/passengers", function(req, res) {
    // Grab every doc in the Students array
    Traveler.find({}, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});


// route for passenger to fill in profile info
app.post("/travelerProfile", function(req, res) {
    // Create a new note and pass the req.body to the entry
    var profile = req.body;
    console.log(req.user);
    console.log(profile);
    // for testing purpose, "77 77" must be the name of one of your existed records in database
    Traveler.findOneAndUpdate({ _id: req.user._id }, req.body, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});

app.get("/ConfirmedDriver", function(req,res){
    if (req.user.pickupStatus != true) {
        res.send(false);
    }
    else {
        Driver.find({_id: req.user.driver_id }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                res.json(doc);
            }
        });
    }


});

// route for passenger to request a pickup
app.post("/pickupRequest", function(req, res) {
    // Create a new note and pass the req.body to the entry
    var pickupRequest = req.body;
    console.log(pickupRequest);
    console.log(req.user);
    // for testing purpose, "77 77" must be the name of one of your existed records in database
    Traveler.findOneAndUpdate({ _id: req.user._id }, pickupRequest, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});
// route for driver to fill in profile info
app.post("/driverProfile", function(req, res) {
    // Create a new note and pass the req.body to the entry
    var profile = req.body;
    console.log(profile);
    console.log(req.user);
    // for testing purpose, "Tony W" must be the name of one of your existed records in database
    Driver.findOneAndUpdate({ _id: req.user._id }, profile, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});
// route for driver to confirm pickup 
app.post("/pickupConfirm", function(req, res) {
    var pickupUpdate = {
        driver_id: req.user._id,
        pickupStatus: true
    };
    var passengerId = req.body.passengerId;
    Traveler.findOneAndUpdate({ _id: passengerId }, pickupUpdate, function(error, doc) {
        // Log any errors - $set: {pickupStatus: true}
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.send(true);
        }
    });
});

app.post("/unpickConfirm", function(req, res) {
    console.log("postedunpickConfirm");
    var pickupUpdate = {
        driver_id: undefined,
        pickupStatus: false
    };
    var passengerId = req.body.passengerId;
    Traveler.findOneAndUpdate({ _id: passengerId }, pickupUpdate, function(error, doc) {
        console.log("insidefindoneandupdate");
        // Log any errors - $set: {pickupStatus: true}
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.send(true);
        }
    });
});


app.get('/currentUser', function(req, res){
 return res.json(req.user);
});

//signout
app.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
});


app.listen(port, function() {
    console.log("App is running!");
});