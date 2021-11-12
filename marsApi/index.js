const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

app.use(express.static('public'));

const $fetch = require('node-fetch');

app.set('view engine', 'ejs');

app.get("/", (req, res)=> {
    res.render('home');
})

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY

const keys = require('./config/keys');

const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers'
app.get('/space', (req, res)=>{
    let route = `curiosity/latest_photos?api_key=${keys.nasa_key}`
    let endpoint = `${baseUrl}/${route}`
    $fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        let imageArr = [];
        for(let i = 0; i < 12; i++){
            let randNum = Math.floor(Math.random()*data.latest_photos.length)+1  // pokemon project
            imageArr.push(data.latest_photos[randNum])
        }
        // let dataSlice = data.latest_photos.slice(0,5)
        // console.log(dataSlice)
        res.render('results', {data: imageArr});
    })
    .catch()

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listing on port ${PORT}`));
