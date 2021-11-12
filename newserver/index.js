const express = require('express');
const app = express();
const logger = require('morgan');
const chalk = require('chalk');
const { reset } = require('chalk');

app.use(logger('dev'));

app.get("/", (req, res)=>{
    res.send("hello world")
})

// app.get('/end', (req, res)=>{
//     res.end()
// })

// app.get('/json', (req, res)=>{
//     res.json({ fname: "Steven-Kang"})
// })

// app.get('/:fruit', (req, res)=>{
//     // console.log(req.params.fruit)
//     // let fruit = req.params.fruit
//     res.send(`I like ${req.params.fruit}`)
// })


// app.get('/:isOld', (req, res)=>{
    // let oldEnough = req.params.isOld;
    // if(oldEnough >= 21){
    //     res.send('You can drink')
    // }else{
    //     res.send('Not old enough!')
    // }
    // res.send(req.params.isOld >= 21 ? 'you can drink' : 'not old enough!')
// })


app.get('/account/:fname/money/:num', (req, res)=>{
    let first = req.params.fname;
    res.send(req.params.num >= 100 ? ('Hey ' + first + ' can I borrow some money?') : 'You like living on the edge?')
})

//app.get('/account/:fname/money/:num', (req, res)=>{
    
//})

app.get('/doggyHorse', (req, res)=>{
    res.send("<h1>I like coding!</h1>")
})

app.get('*', (req, res)=>{
    res.send('Sorry route does not exist')
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(chalk.green(`App listing on port ${chalk.blue(PORT)}`)));