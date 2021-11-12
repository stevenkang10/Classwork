//BASIC SERVER CODE MEMORIZE THIS!!!!

// Foundation
const express = require('express');
const app = express();


// Route Handlers
app.get("/", (request, response)=>{
        response.send("I am the root route!")
    })


// The Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listing on port ${PORT}`))

