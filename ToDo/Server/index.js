/* 
1. our server sends the todo app front-end when a user visits the root route 
2. when the front-end loads, it gets the todos daa from the back-end
3. displays the todo data in the browser front-end

*/

const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const {todoArray} = require('./fakeData')
// console.log(todoArray)


// baseUrl = localhost:3000
// Can only use 2 routes /todo and /todo/:id

//what is CRUD function?
// create data 
// read data - GET or POST 
// update data 
// delete data

// app.get("/", (req, res)=>{
//     res.send("I'm the root")
// })


app.get("/todos", (req, res)=>{
    res.json(todoArray)
})

// app.get("/", (req, res)=>{
//     res.sendFile('../client/index.html')
// })

app.use(express.static('../client'))

let newId = 4;
// Crete data - POST
app.post('/todos', (req, res)=>{
    let newTodo = {
        id: newId++, 
        description: req.body.description,
        isComplete: false
    }
    todoArray.push(newTodo)
    res.json(newTodo)
})

// Update data
app.put('/todos/:id', (req, res)=> {

    let requestedTodoId = Number(req.params.id)
    let requestedTodo = todoArray.find((todo)=>{
        return requestedTodoId === todo.id
    })
    if(!requestedTodo) res.status(404).send({message: "honey not working"})
    requestedTodo.isComplete = !requestedTodo.isComplete
    res.json(requestedTodo)
})

// Delete Data
app.delete('/todos/:id', (req, res)=> {
    let requestedTodoId = Number(req.params.id);
    let requestedIndex = todoArray.findIndex((todo) => {
        return (todo.id === requestedTodoId);
    })
    let deletedTodoObj = todoArray.splice(requestedIndex, 1);
    res.json(deletedTodoObj);
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`app listing on ${PORT}`));

