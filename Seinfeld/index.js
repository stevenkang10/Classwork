const express = require('express')
const app = express()

// logger
const logger = require('morgan')
app.use(logger('dev'))

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

// 2. Build structure 
//        a- blueprint = Schema
let UserSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String
  }
)

//   b - Model
let UserModel = mongoose.model("user", UserSchema)

// let User = new UserModel(
//   {
//     name: 'Jerry Seinfeld',
//     age: 45,
//     email: 'jerry@gmail.com'
//   }
// )

let User = new UserModel(
    {
      name: 'Cosmo Kramer',
      age: 50,
      email: 'CosmoKramer@gmail.com'
    }
  )

// 3. Write queries
// User.save((err, data) => {
//   if(err){
//     console.log("There was an error from database", err)
//   } else {
//     console.log("Here is the data you saved: ", data)
//   }
// })

// UserModel.create({
//     name: 'Elaine Benes',
//     age: 123,
//     email: "elaine@gmail.com"
// }, (err, data)=>{
//     console.log(err? `there was an error: ${err}`: `saved data: ${data}`)
//     // if(err){
//     // console.log("There was an error from database", err)
//     // } else {
//     // console.log("Here is the data you saved: ", data)
//     // }
// })

UserModel.find({name: "Elaine Benes"}, (err, data)=> {
    console.log(err? `there was an error: ${err}`: `saved data: ${data}`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`App on port ${PORT}`))




//my original from code along that didnt work
// const express = require("express");
// const app = express();

// const logger = require("morgan");
// app.use(logger("dev"));

// // 1. build our connection
// const mongoose = require("mongoose");
// const dbConfig = require("./config")

// let {authoInfo, url, db} = dbConfig.person
// let connection = `${url}/${db}`


// mongoose.connect(connection, authoInfo)
// .then(()=>console.log(`Connected to ${db} db.`))
// .catch(err => `Error connecting to ${db} db: ${err}`)


// // 2. build structure
// //              a-blueprint = Schem

// let UserSchema = mongoose.Schema(
//     {
//      name: String,
//      age: Number,
//      email: String  
//     }
// )

// //              b-model
// let UserModel = mongoose.model("user", UserSchema)

// let User = new UserModel(
//     {
//         name: 'Jerry Seinfeld', 
//         age: 45,
//         email: 'jerry@gmail.com'
//     }
// )


// // 3. write queries
// User.save((err, data)=> {
//     if(err){
//         console.log("there was an error from database", err)
//     }else{
//         console.log("here is the data you saved: ", data)
//     }
// })
            

// const PORT = process.env.PORT || 3000 
// app.listen(PORT, () => console.log(`app listing on ${PORT}`))


