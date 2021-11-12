const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const auth  = {
    host: 'pgdb.accsoftwarebootcamp.com',
    port: 5432,
    database: 'acc',
    user: 'acc',
    password: 'acc_rocks'
  };

const {Client} = require("pg");

const conn = new Client(auth);

conn.connect()
.then(()=> console.log(`connected to ${auth.database} db.`))
.catch(err => console.log(`error with connecting to db: ${auth.database}`))

const userName= "stevenk"

app.get("/", (req, res)=> {
    res.render("index.ejs");
});

app.post("/submitMovie", (req, res)=>{
    let query = `INSERT INTO hr.movies
    (rec_by, movie_name, year_of_release, comments)
    values('${userName}', '${req.body.movie_name}','${req.body.year_of_release}', '${req.body.comments}') RETURNING *;`

    conn.query(query)
    .then( movie => {
        console.log("Great job!! Movie inserted!!!" + movie)
        res.status(200).json(movie.rows)
    })
    .catch(err => {console.log(`error inserting data into db: ${err}`)
    res.status(400).send("Could not insert data.")
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App on port PORT ${PORT}`));