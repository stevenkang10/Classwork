const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger("dev"));

app.set("view engine", "ejs");

app.get("/", (request, response)=>{
    response.send("I am the root route!")
})

app.get('/home', (req, res)=>{
    res.render('home.ejs')
})

app.get('/about', (req, res)=>{
    res.render('about.ejs')
})

app.get('/contact', (req, res)=>{
    res.render('contact.ejs')
})

let animal = "lion";
let fruit = "acai";

app.get('/animals', (req, res)=> {
    res.render('animals', { animal, fruit})
})

app.get('/people', (req, res)=> {
    let person =[
        {
        fname:'Steven',
        age: 45,
        isMarried: true
        }
    ]
    res.render('people', {person})
})

app.get('/dogs', (req, res)=> {
    let canines = ['bulldogs', 'boston terrier', 'yorkie'];
    res.render('dogs', {canines})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listing on port ${PORT}`))