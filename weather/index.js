const { response } = require('express');
const express = require('express');
const request = require('request');

const app = express();

let baseUrl = 'https://www.metaweather.com/api/'
//route = /api/location/2487956/ 

app.get("/", (req,res)=>{
    res.render('home.ejs');
})

app.get("/results", (req, res)=>{
    let route = 'api/location/2487956/'
    let endpoint = `${baseUrl}/${route}`

    request(endpoint, (error, response, body)=>{
        if(!error && response.statusCode === 200){
        let parsedData = JSON.parse(body)
        res.render('results.ejs', {data: parsedData});
        }
    })
    
})

// /api/location/44418/

app.get("/london", (req, res)=>{
    let route = 'api/location/44418/'
    let endpoint = `${baseUrl}/${route}`

    request(endpoint, (error, response, body)=>{
        if(!error && response.statusCode === 200){
        let parsedData = JSON.parse(body)
        res.render('results.ejs', {data: parsedData});
        }
    })
    
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listing on port ${PORT}`));