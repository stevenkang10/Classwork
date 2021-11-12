const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/user");

//Build connnection
const dbConfig = require('./config');
//pulls values (sensitive) from seperate file
let { authInfo, url, db } = dbConfig.person;
//Builds our connection route
let connection = `${url}/${db}`;

mongoose.connect(connection, authInfo)
.then(() => console.log(`Connected to ${db} db.`))
.catch((err) => console.log('error', err))

app.use(express.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "blah blah blah",
    resave: false, 
    saveUninitialzed: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", (req, res)=> {
    res.render("home.ejs");
});

app.get("/signup", (req, res)=> {
    res.render("signup.ejs");
});


app.post("/signup", (req, res)=> {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signup.ejs")
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/newsfeed");
            });
        }
    })
});

app.get("/login", (req, res)=>{
    res.render("login.ejs");
});

app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/newsfeed",
        failureRedirect: "/login"
    }), (req, res) =>{
});

app.get("/logout", (req, res)=> {
    req.logout();
    res.redirect("/");
});

// isAuthenticated is a built in passport method
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.get("/newsfeed", isLoggedIn, (req, res)=> {
    res.render("newsfeed.ejs");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listing on ${PORT}`))