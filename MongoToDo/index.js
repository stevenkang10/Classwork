/*
  1. our server sends the todo app front-end when a user visits the root route - DONE
  2. when the front-end loads, it gets the todos data from the back-end
  3. displays the todo data in the browser front-end
*/
const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// static or public folder is exposed by express.js
app.use(express.static('./public'))
// 1. Build our connection
const mongoose = require("mongoose");
const dbConfig = require("./config");
// pulls values (sensitive) from a separate file
let { authInfo, url, db } = dbConfig.person;
// builds our connection route
let connection = `${url}/${db}`;
// creates the connection of index.js with mongodb
mongoose
  .connect(connection, authInfo)
  .then(() => console.log(`Connected to ${db} db.`))
  .catch((err) => `Error connecting to ${db} db: ${err}`);
let ToDoSchema = mongoose.Schema(
  {
    description: String,
    isComplete: Boolean,
  },
  );
let ToDoModel = mongoose.model("todos", ToDoSchema);
// app.get('/', (req, res) => {
//   res.send('Hello')
// })
// ToDoModel.find({}, function (err,data){
//   console.log(data)
// })
app.get('/todos', (req, res)=>{
  ToDoModel.find({},function (err,data){
    if(err) {
      console.log('Got a mongo error:', err)
      res.status(400).send({message: 'mongo error', err: err})
    }
    res.json(data)
  })
})
app.post('/todos', (req, res)=>{
  const NewToDo = new ToDoModel({ 
    description: req.body.description,
    isComplete: false
  })
  NewToDo.save(function(err, data){
    console.log('data received is:', data)
    if(err) {
      res.status(400).send({
        ok: false,
        message: 'error', 
        err: err, 
      })
    }
    res.json(data)
  })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App on PORT ${PORT}`));






// const express = require("express");
// const app = express();
// const logger = require("morgan");
// app.use(logger("dev"));

// app.use(express.urlencoded({extended: false}))
// app.use(express.json())


// app.use(express.static('./public'))


// // 1. Build our connection
// const mongoose = require('mongoose')
// const dbConfig = require('./config')

// // pulls values (sensitive) from a separate file
// let {authInfo, url, db} = dbConfig.person
// // builds our connection route
// let connection = `${url}/${db}`

// // creates the connection of index.js with mongodb
// mongoose.connect(connection, authInfo)
// .then(()=> console.log(`Connected to ${db} db.`))
// .catch(err => `Error connecting to ${db} db: ${err}`)

// let ToDoSchema = mongoose.Schema(
//     {
//         description: String, 
//         isComplete: Boolean, 
//     }
// )

// let ToDoModel = mongoose.model("todos", ToDoSchema)

// // ToDoModel.find({}, function(err, data){
// //     console.log(data)
// // })

// app.get("/todos", (req, res)=>{
//     ToDoModel.find({}, function(err, data){
//         if(err) {
//         console.log('Got a mongo error:', err)
//         res.status(400).send({message: 'mongo error', err: err})
//         }
//         res.json(data)
//     })
// })

// app.post('/todos', (req, res)=> {
//     const NewToDo = new ToDoModel({
//         description: req.body.description,
//         isComplete: false
//     })
//     NewToDo.save(function(err, data){
//         if(err){
//             res.status(400).send({message: 'error', err: err})
//         }
//         res.json(data)
//     })
// })

// const PORT = process.env.PORT || 3000
// app.listen(PORT, ()=> console.log(`app listing on ${PORT}`))