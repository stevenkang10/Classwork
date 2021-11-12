const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("../client"));

const keys = require("./config/keys");

// NOTE: HOW TO CONVERT TO PG
// 1) Build our connection
//    a) install PG - DONE
//    b) connect - DONE
// 2) Build blueprints -DONE!!!!!
//    a) Schema
//    b) Model
// NOTE: Done by the DBA when they create db and tables

// 3) Write our queries - DONE
//      a) Read
//      a) Create
//      a) Delete
//      a) Update

const { Client } = require('pg')
const conn = new Client(keys);

conn.connect()
.then(()=> console.log(`Able to to connect to ${keys.database} db`))
.catch(err =>  console.log(`Error connecting with ${keys.database} db`))

let userId = 20;
// READ
app.get('/todos', (req, res)=>{
  let query = `SELECT 
                id as _id, 
                id, 
                description,
                iscomplete as "isComplete"
              FROM hr.todos
              WHERE user_id = ${userId};`
  conn.query(query)
  .then(todos => res.json(todos.rows))
  .catch(err => console.log(`Error reading data from db: ${err}`))
})

// CREATE
app.post('/todos', (req, res)=>{
  let query = `INSERT INTO hr.todos
                (description, iscomplete, user_id)
                VALUES('${req.body.description}', false, ${userId})
                RETURNING *;`
  conn.query(query)
  .then(todos => {
    console.log(todos.rows[0])
    res.json(todos.rows[0])
  })
  .catch(err => "Error creating data: " + err)
})

// DELETE
app.delete("/todos/:id", (req, res)=>{
  let query = `DELETE FROM hr.todos
                WHERE id = ${req.params.id}
                RETURNING *;`
  conn.query(query)
  .then(todos => res.json(todos.rows[0]))
  .catch(err => {
    console.log("Error deleting data from db", err);
    res.status(500).send("Not able to delete from database");
    // TODO: another option depending on what client expecting
    // res.status(500).json({message: "Not able to delete from database"})
  })
  
})

// UPDATE
app.put('/todos/:id', (req, res)=>{
  let query = `UPDATE hr.todos
                  SET iscomplete = NOT iscomplete
                WHERE id = ${req.params.id} 
                    AND user_id = ${userId}
                RETURNING *;`
  conn.query(query)
  .then(todos => res.json(todos.rows[0]))
  .catch(err => {
    console.log("Issue with updating in db" + err);
    res.status(501).json({message: "Cannot update database"})
  })
  
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));


///**** FOLLOW ALONG FROM CLASS THAT DIDN'T WORK FOR ME****
// const express = require("express");
// const app = express();

// const logger = require("morgan");
// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(express.static("../client"));

// const keys = require("./config/keys");

// // NOTE: HOW TO CONVERT TO PG
// // 1) Build our connection
// //    a) install PG
// //    b) connect

// // 2) Build blueprints
// //    a) Schema
// //    b) Model

// // 3) Write our queries
// //      a) Read
// //      a) Create
// //      a) Delete
// //      a) Update
// const {Client} = require('pg');
// const { json } = require("express");
// const conn = new Client(keys);


// conn.connect()
// .then(()=> console.log(`Able to connect to ${keys.database}db`))
// .catch(err => console.log(`Error connecting with ${keys.database} db`))

// let userId = 20;
// //READ
// app.get("/todos", (req, res)=> {
//   let query = `SELECT 
//                   id as _id,
//                   id, 
//                   description, 
//                   iscomplete as "isComplete"
//                 FROM hr.todos
//                 WHERE user_id = ${userId};`
//   conn.query(query)
//   .then(todos => {
//     console.log(todos.rows)
//     res.json(todos.rows)
//   })
//   .catch(err => console.log(`Error reading data from db: ${err}`))
// })

// //CREATE 
// app.post("/todos", (req, res)=> {
//   let query = `INSERT INTO hr.todos
//                 (description, iscomplete, user_id)
//                 VALUES ("${req.body.description}", false, ${userId})
//                 RETURNING *;`
//   conn.query(query)
//   .then(todos => {
//     console.log(todos.rows[0])
//     res.json(todos.rows[0])
//   })
//   .catch(err => "error creating data: " + err)
// })

// // // Read - GET
// // app.get("/todos", (req, res) => {
// //   TodoModel.find({}, (error, results) => {
// //     if (error) {
// //       console.log("Error getting data from db: ", error);
// //       // using random numbers for internal communication
// //       // in real world, probably use 400 or 404
// //       res.status(444).json("Error reading data from DB");
// //     } else {
// //       console.log("Results: ", results);
// //       // using random numbers for internal communication
// //       // in real world, probably use 200
// //       res.status(264).json(results);
// //     }
// //   });
// // });

// //DELETE 
// app.delete("/todos/:id", (req, res)=> {
//   let query = `DELETE FROM hr.todos
//                 WHERE id = ${req.params.id}
//                 RETURNING *;`
// conn.query(query)
// .then(todos => res.json (todos.rows[0]))
// .catch(err => {
//   console.log("Error deleting data from db", err);
//   res.status(500).send("not able to delete from database");
//   })
  
// })

// app.put("/todos/:id", (req, res)=>  {
//   let query = `UPDATE hr.todos
//                 SET iscomplete = NOT iscomplete
//                 WHERE id = ${req.params.id}
//                 AND user_id = ${user_id}
//                 RETURNING *;`
//   conn.query(query)
//   .then(todos => res.json(todos.rows[0]))
//   .catch(err => {
//     console.log("Issue with updating in db" + err);
//     res.status(501).json({message: "cannot update database"})
//   })

// })



// // // Update - PUT
// // app.put("/todos/:id", (req, res) => {
// //   let requestedTodoId = req.params.id;
// //   // need to find the document matching our id
// //   TodoModel.findById(requestedTodoId, function (error, result) {
// //     // if id does not exist, let the client know
// //     if (error) res.status(447).send("id does not exist for updating");
// //     //  when we get the "receipt" from the database, it is now called result
// //     // need to toggle the boolean value
// //     else result.isComplete = !result.isComplete;
// //     // NOW, we can save the new updated document
// //     // this will replace the ENTIRE document in mongo with current data
// //     result.save(function (err, updatedTodo) {
// //       if (err) res.status(448).send("Cannot update document");
// //       else res.status(202).send(updatedTodo);
// //     });
// //   });
// // });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`App on port ${port}`));