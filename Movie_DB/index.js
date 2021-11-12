const express = require("express");
const app = express();
const key = require("./config/keys");
const $fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3";

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/getMovies", (req, res) => {
  let title = "Avengers";
  let route = `search/movie?api_key=${key.tmdb_key}&language=en-US&page=1&include_adult=false&query=${req.query.doggy}`;
  let endpoint = `${baseUrl}/${route}`;
  $fetch(endpoint)
    .then((response) => {
      // TODO: toggle the bang to simulate a fetch error
      // this captures a network error - not able to connect
      if (!response.ok) throw Error("Not able to connect");
      return response.json();
      }
    )
    .then((data) => {
      // NOTE: This has no connection issues BUT there is no data sent back
      // TODO: Try typing '?????' in input box and you should get this error
      if (data.results.length === 0) throw Error("No data");
      res.render("results.ejs", { movies: data.results });
    })
    .catch((err) => res.send(err.message));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App on port ${PORT}`));

// use this for project 2