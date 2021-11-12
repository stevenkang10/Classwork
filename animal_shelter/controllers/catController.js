const Cat = require("../models/catModel")

// route: /cats
// description: getting all cats
// method: GET

const getCats = (req, res)=> {
    Cat.find({})
    .then(cats => {
        res.status(500).json({message: "You got some cats!", cats: cats})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Something went wrong with the server!"})
    })
}
// route: /cats
// description: create a cat
// method: POST
const createCat = (req, res) =>{
    const newCat = new Cat(req.body)

    newCat
    .save()
    .then(cat => res.status(201).json({message: "Created a cat!", cat}))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Something went wrong with the server!"})
    })
}


// route: /cats:id 
// description: get a cat by id 
// method: GET
const getCat = (req, res) => {
    let id = req.params.id

    let foundCat = Cat.findById(id)

    foundCat
    .then(cat => res.json({message: "got cat!", cat}))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Something went wrong with the server!"})
    })

}


// route: /cats:id 
// description: update one cat
// method: PUT
const updateCat = (req, res) => {
    let id = req.params.id
    let update = req.body
    Cat.findByIdAndUpdate(id, update, {new: true})
    .then(cat => res.status(200).json({message: `updated cat with id ${id}`, cat}))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Something went wrong with the server!"})
    })
}

// route: /cats:id 
// description: Delete one cat
// method: DELETE
const deleteCat = (req, res) => {
    let id = req.params.id

    Cat.findByIdAndDelete(id)
    .then(cat => res.status(200).json({message: `deleted cat with id ${id}`, cat}))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Something went wrong with the server!"})
    })
}


// route: /cats/search
// description: Search cats
// method: GET
const searchCats = (req, res) =>{

    let searchTerm = req.query.searchTerm
    let searchBy = req.query.searchBy

    Cat.find({[searchBy]: searchTerm})
    .then(cats => res.status(200).json({message: `Search cats based on ${searchBy}`, cats}))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Something went wrong with the server!"})
    })
}


module.exports = {
    getCats: getCats,
    createCat:createCat,
    getCat: getCat,
    updateCat: updateCat,
    deleteCat: deleteCat,
    searchCats: searchCats
}