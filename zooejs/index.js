const { response } = require('express');
const express = require('express');
const app = express();

const logger = require('morgan')
app.use(logger('dev'))

app.use(express.static('public'))

const zoo = require('./helpers/fakedata')

app.get("/", (req, res)=> {
    res.send("Im the root route")
})

app.get('/home', (req, res)=> {
    res.render('home.ejs', {animal: zoo})
})

app.get('/about', (req, res)=> {
    res.render('about.ejs')
})

app.get('/contact', (req, res)=> {
    res.render('contact.ejs')
})

app.get('/petfriendly', (req, res)=> {
    res.render('petfriendly.ejs')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listing on port ${PORT}`))

