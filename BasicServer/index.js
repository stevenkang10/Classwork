const express = require("express");
const app = express();

app.get ('/', function(req, res){
    res.send("root route!!!")
})

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, ()=> console.log(`app listing on port ${PORT}`))