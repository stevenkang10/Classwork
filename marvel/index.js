const express = require("express");
const app = express();

// 1. Build our connection
const mongoose = require('mongoose')
const dbConfig = require('./config')

// pulls values (sensitive) from a separate file
let {authInfo, url, db} = dbConfig.person
// builds our connection route
let connection = `${url}/${db}`

// creates the connection of index.js with mongodb
mongoose.connect(connection, authInfo)
.then(()=> console.log(`Connected to ${db} db.`))
.catch(err => `Error connecting to ${db} db: ${err}`)

let CharSchema = mongoose.Schema({
    alias: {
        type: String,
        required: true
    }, 
    fname: String, 
    lname: String, 
    nemesis: String, 
    hero: {
        type: Boolean,
        default: true
    }, 
    created: {
        type: Date,
        default: Date.now()
    },
    alive: {
        type: Boolean, 
        default: true
    },
    friends: Array
})

let CharModel = mongoose.model('characters', CharSchema)

// let Char1 = new CharModel({
//         fname: "Peter",
//         lname: "Parker",
//         alias: "Spider-Man"
//     });

// let Char1 = new CharModel({
//     fname: "Norman",
//     lname: "Osborn",
//     alias: "Green Goblin",
//     alive: false,
//     hero: false,
//     nemesis: "Spider-Man"
//     });


let Char1 = new CharModel({
        fname: "Peter",
        lname: "Quill",
        alias: "StarLord",
        alive: true,
        hero: true,
        nemesis: "Ego the Living Planet",
        friends: ["Gamora", "Mantis"]
        });

Char1.save((err, data)=>{
    console.log(err? `Error: ${err}` : `Show me the character: ${data}`)
})


const PORT =process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`app listing on ${PORT}`));
