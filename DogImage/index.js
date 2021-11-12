const express = require("express");
const app = express();

const needle = require("needle");

app.use(express.static("public"));

let image = `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`;

app.get("/", (req, res )=> {
    res.render("index.ejs", {image});
});

// https://dog.ceo/api/breeds/image/random

const baseUrl = 'https://dog.ceo/api'

app.get('/getImage', (req, res)=> {
    let route = 'breeds/image/random'
    let endpoint = `${baseUrl}/${route}`;
    // make the call - go to the endpoint
    needle.get(endpoint, (error, response)=>{
        // they all get some sort of response - good = data, bad = error!!
        console.log(response.body)
        if(!error && response.statusCode === 200){
            // parse and do something with data
            res.render('index.ejs', {image: response.body.message})
        } else {
            //error handling
            res.render('error.ejs', {error: "Something wrong"})
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App on port ${PORT}`));
